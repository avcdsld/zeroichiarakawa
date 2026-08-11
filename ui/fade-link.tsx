'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { arrivedFromInsideSite } from '#/ui/use-navigation';

type FadeLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  back?: boolean;
};

const FADE_MS = 180;

// Cmd/Ctrl/Shift/Alt clicks and middle clicks mean "open this somewhere else" —
// let the browser handle them instead of swallowing them in the transition.
function isPlainLeftClick(e: React.MouseEvent) {
  return (
    e.button === 0 &&
    !e.metaKey &&
    !e.ctrlKey &&
    !e.shiftKey &&
    !e.altKey &&
    !e.defaultPrevented
  );
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function FadeLink({ href, children, className, back }: FadeLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!isPlainLeftClick(e)) {
      return;
    }
    e.preventDefault();

    // Going back through history restores the scroll position; fall back to a
    // push when this page was opened directly (shared link, new tab, reload).
    const navigate = () => {
      if (back && arrivedFromInsideSite()) {
        router.back();
      } else {
        router.push(href);
      }
    };

    if (prefersReducedMotion()) {
      navigate();
      return;
    }

    document.body.classList.add('fade-out');
    setTimeout(navigate, FADE_MS);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
