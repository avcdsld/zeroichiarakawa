'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const KEY = 'scroll-positions';

// Marks a history entry that was reached by an in-app navigation. history.state
// is per-entry and survives back/forward and reloads, so a back link can ask
// "was this page pushed from inside the site?" instead of relying on a global
// "has the user ever navigated" flag.
const IN_APP = '__inAppNavigation';

// Mobile browsers often finish the back navigation before the restored page has
// reached its full height, so the built-in restoration clamps to the top.
// Remember the scroll position per path ourselves and re-apply it over the next
// few frames, once the page is tall enough to hold it.
const MAX_RESTORE_FRAMES = 60;

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

export function useNavigation() {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const pendingRef = useRef<number | null>(null);
  const poppedRef = useRef(false);
  const firstRenderRef = useRef(true);
  const savingRef = useRef(true);

  pathnameRef.current = pathname;

  // popstate fires after the URL has changed, so the target path is already known.
  useEffect(() => {
    const onPopState = () => {
      poppedRef.current = true;
      const saved = readPositions()[window.location.pathname];
      if (typeof saved === 'number') {
        // Stop recording until the restore finishes, or the scroll-to-top that
        // happens while the new page mounts would overwrite the saved position.
        savingRef.current = false;
        pendingRef.current = saved;
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (!savingRef.current || frame) {
        return;
      }
      frame = requestAnimationFrame(() => {
        frame = 0;
        writePosition(pathnameRef.current, window.scrollY);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    const popped = poppedRef.current;
    poppedRef.current = false;

    // A fresh document load and a back/forward both land on an entry whose flag
    // is already correct; only a push creates an entry that needs marking.
    const isPush = !popped && !firstRenderRef.current;
    firstRenderRef.current = false;
    if (isPush) {
      window.history.replaceState(
        { ...window.history.state, [IN_APP]: true },
        '',
      );
    }

    const target = pendingRef.current;
    if (target === null) {
      return;
    }

    let frame = 0;
    let frames = 0;
    const tick = () => {
      const max = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );
      window.scrollTo(0, Math.min(target, max));
      frames += 1;
      if (
        Math.abs(window.scrollY - target) > 1 &&
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
