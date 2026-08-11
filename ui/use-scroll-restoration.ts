'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const KEY = 'scroll-positions';

// Mobile browsers often finish the back navigation before the restored page has
// reached its full height, so the built-in restoration clamps to the top.
// Remember the scroll position per path ourselves and re-apply it over the next
// few frames, once the page is tall enough to hold it.
const MAX_RESTORE_FRAMES = 60;

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

export function useScrollRestoration() {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const pendingRef = useRef<number | null>(null);
  const savingRef = useRef(true);

  pathnameRef.current = pathname;

  // popstate fires after the URL has changed, so the target path is already known.
  useEffect(() => {
    const onPopState = () => {
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
