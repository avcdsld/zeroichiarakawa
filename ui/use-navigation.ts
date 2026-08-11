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

export function arrivedFromInsideSite() {
  return Boolean(
    (window.history.state as Record<string, unknown> | null)?.[IN_APP],
  );
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

function navigationType() {
  const [entry] = performance.getEntriesByType(
    'navigation',
  ) as PerformanceNavigationTiming[];
  return entry?.type;
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
  const pendingRef = useRef<number | null>(null);
  const poppedRef = useRef(false);
  const firstRenderRef = useRef(true);
  const savingRef = useRef(true);

  // popstate fires after the URL has changed, so the target path is already known.
  useEffect(() => {
    const onPopState = () => {
      poppedRef.current = true;
      // Stop recording until the restore finishes, or the scroll-to-top that
      // happens while the new page mounts would overwrite the saved position.
      savingRef.current = false;
      pendingRef.current = readPositions()[window.location.pathname] ?? 0;
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    // Throttled with a timer rather than a frame: a tab that is never painted
    // (opened in the background) gets no frames, and recording the position
    // must not depend on that. The trailing write matters most — it is the one
    // that captures where the reader actually came to rest.
    let timer = 0;
    let scrolled = false;
    const flush = () => {
      timer = 0;
      if (!scrolled) {
        return;
      }
      scrolled = false;
      writePosition(pathnameRef.current, window.scrollY);
      // Keep the window open so a scroll that ends inside it is still recorded.
      timer = window.setTimeout(flush, SAVE_THROTTLE_MS);
    };
    const onScroll = () => {
      if (!savingRef.current) {
        return;
      }
      scrolled = true;
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

    const popped = poppedRef.current;
    poppedRef.current = false;
    const isFirstRender = firstRenderRef.current;
    firstRenderRef.current = false;

    if (isFirstRender) {
      // A reload or a back/forward into a fresh document is where the browser's
      // own restoration is least reliable, so it is handled here too.
      const type = navigationType();
      if (type === 'reload' || type === 'back_forward') {
        const saved = readPositions()[pathname];
        if (typeof saved === 'number' && saved > 0) {
          savingRef.current = false;
          pendingRef.current = saved;
        }
      }
    } else if (!popped) {
      // A push: this entry was reached from inside the site, and it starts at
      // the top like a freshly opened page.
      window.history.replaceState(
        { ...window.history.state, [IN_APP]: true },
        '',
      );
      window.scrollTo(0, 0);
    }

    const target = pendingRef.current;
    if (target === null) {
      return;
    }

    let frame = 0;
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

    const tick = () => {
      const atTarget = apply();
      frames += 1;
      if (
        (!atTarget || stableFrames < STABLE_FRAMES) &&
        frames < MAX_RESTORE_FRAMES
      ) {
        frame = requestAnimationFrame(tick);
      } else {
        pendingRef.current = null;
        savingRef.current = true;
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      pendingRef.current = null;
      savingRef.current = true;
    };
  }, [pathname]);
}
