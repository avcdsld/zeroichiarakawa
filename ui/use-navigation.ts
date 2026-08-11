'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const KEY = 'scroll-positions';

// Marks a history entry that was reached by an in-app navigation. history.state
// is per-entry and survives back/forward and reloads, so a back link can ask
// "was this page pushed from inside the site?" instead of relying on a global
// "has the user ever navigated" flag.
const IN_APP = '__inAppNavigation';

// Restoring is retried across frames because a page rarely has its final height
// on the first one: images resolve, and the language only switches to Japanese
// after mount, which reflows every block of text. Restoring once would land the
// reader next to where they were, so the position is held until the page has
// stopped growing (or the cap is reached, ~1s at 60fps).
const MAX_RESTORE_FRAMES = 60;
const STABLE_FRAMES = 6;
const SAVE_THROTTLE_MS = 100;
const FALLBACK_TICK_MS = 32;
const RECORDING_WATCHDOG_MS = 2000;

// Swapping pages moves the scroll position on its own: the browser clamps it to
// the incoming page's height, and the code below scrolls deliberately. None of
// that is the reader scrolling, so recording is switched off from the moment a
// navigation starts until the new page has been positioned. Exactly one
// instance of this hook is mounted (in the layout), so the switch lives here at
// module scope, where the links can reach it too.
let recording = true;
let watchdog = 0;

export function pauseScrollRecording() {
  recording = false;
  clearTimeout(watchdog);
  // If the navigation never lands, recording still has to come back.
  watchdog = window.setTimeout(resumeScrollRecording, RECORDING_WATCHDOG_MS);
}

// Whether the next page comes from a link (a push, which starts at the top) or
// from the reader going back or forward (which returns them to where they were)
// is declared by the link itself. The alternatives are not dependable: popstate
// can be delivered after the render it caused, and history.state is Next's, who
// replaces it wholesale as it takes over a freshly loaded document.
let pushDeclared = false;
let pushWatchdog = 0;

export function declarePush() {
  pushDeclared = true;
  clearTimeout(pushWatchdog);
  // A push that never lands must not be mistaken for the next navigation.
  pushWatchdog = window.setTimeout(() => {
    pushDeclared = false;
  }, RECORDING_WATCHDOG_MS);
}

function takePushDeclaration() {
  const declared = pushDeclared;
  pushDeclared = false;
  clearTimeout(pushWatchdog);
  pushWatchdog = 0;
  return declared;
}

function resumeScrollRecording() {
  clearTimeout(watchdog);
  watchdog = 0;
  recording = true;
}

export function arrivedFromInsideSite() {
  return Boolean(
    (window.history.state as Record<string, unknown> | null)?.[IN_APP],
  );
}

function navigationType() {
  const [entry] = performance.getEntriesByType(
    'navigation',
  ) as PerformanceNavigationTiming[];
  return entry?.type;
}

function readPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

function writePosition(path: string, y: number) {
  try {
    const positions = readPositions();
    positions[path] = y;
    sessionStorage.setItem(KEY, JSON.stringify(positions));
  } catch {
    // sessionStorage can be unavailable (private mode, quota); scrolling still works.
  }
}

/**
 * Owns scroll position across navigations: a new page starts at the top, back
 * and forward return to where the reader was.
 *
 * Next's own scroll handling skips the reset whenever the new segment's top
 * edge happens to be on screen, so every push is scrolled explicitly here
 * instead. The browser's own restoration is left enabled: it is a reasonable
 * baseline when this code cannot run, and where it gets things wrong (mobile
 * back navigation, and the reflow when the language switches after mount) the
 * restore below runs afterwards and wins.
 */
export function useNavigation() {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const firstRenderRef = useRef(true);

  // The swap itself moves the scroll position; stop recording as early as the
  // browser lets us know one is coming. (The effect below pauses too, for when
  // this arrives late.)
  useEffect(() => {
    window.addEventListener('popstate', pauseScrollRecording);
    return () => window.removeEventListener('popstate', pauseScrollRecording);
  }, []);

  useEffect(() => {
    // Where the reader is, is read when they scroll — not when the timer fires.
    // A write that lands after a navigation has started must still describe the
    // page it came from. The trailing write matters most: it is the one that
    // captures where they came to rest.
    // Throttled with a timer rather than a frame because a tab that is never
    // painted (opened in the background) gets no frames.
    let timer = 0;
    let latest: { path: string; y: number } | null = null;
    const flush = () => {
      timer = 0;
      if (!latest) {
        return;
      }
      const { path, y } = latest;
      latest = null;
      writePosition(path, y);
      // Keep the window open so a scroll that ends inside it is still recorded.
      timer = window.setTimeout(flush, SAVE_THROTTLE_MS);
    };
    const onScroll = () => {
      if (!recording) {
        return;
      }
      latest = { path: pathnameRef.current, y: window.scrollY };
      if (!timer) {
        timer = window.setTimeout(flush, SAVE_THROTTLE_MS);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Updated on commit, not during render: a navigation renders the next page
    // while the current one is still on screen and scrollable, so writing this
    // any earlier could file that scroll under the page being navigated to.
    pathnameRef.current = pathname;
    pauseScrollRecording();

    const isFirstRender = firstRenderRef.current;
    firstRenderRef.current = false;
    const pushed = takePushDeclaration();

    if (isFirstRender) {
      // A freshly opened document. The browser positions a reload or a
      // back/forward into a new document, but does it least reliably of all —
      // so those are restored below; anything else stays where it opened.
      const type = navigationType();
      if (type !== 'reload' && type !== 'back_forward') {
        resumeScrollRecording();
        return;
      }
    } else if (pushed) {
      // A push: a new page starts at the top, like a freshly opened one, and
      // its entry is marked so a back link on it knows it can go back.
      window.history.replaceState(
        { ...(window.history.state ?? {}), [IN_APP]: true },
        '',
      );
      window.scrollTo(0, 0);
      resumeScrollRecording();
      return;
    }

    // Back, forward, or a reload: the reader returns to where they were.
    const target = readPositions()[pathname] ?? 0;

    let frame = 0;
    let timer = 0;
    let finished = false;
    let frames = 0;
    let stableFrames = 0;
    let lastHeight = -1;

    const apply = () => {
      const height = document.documentElement.scrollHeight;
      const reachable = Math.min(
        target,
        Math.max(height - window.innerHeight, 0),
      );
      window.scrollTo(0, reachable);
      stableFrames = height === lastHeight ? stableFrames + 1 : 0;
      lastHeight = height;
      return Math.abs(window.scrollY - reachable) <= 1;
    };

    // Position the page right away, then keep it there while it settles.
    apply();

    const clearScheduled = () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };

    const done = () => {
      finished = true;
      clearScheduled();
      resumeScrollRecording();
    };

    const tick = () => {
      if (finished) {
        return;
      }
      clearScheduled();
      const atTarget = apply();
      frames += 1;
      if (
        (!atTarget || stableFrames < STABLE_FRAMES) &&
        frames < MAX_RESTORE_FRAMES
      ) {
        schedule();
      } else {
        done();
      }
    };

    function schedule() {
      frame = requestAnimationFrame(tick);
      // A tab that is not being painted gets no frames, and a page whose height
      // is still settling would be left short. The timer keeps the retry alive
      // there; when both fire, re-applying is harmless.
      timer = window.setTimeout(tick, FALLBACK_TICK_MS);
    }

    schedule();

    return () => {
      done();
    };
  }, [pathname]);
}
