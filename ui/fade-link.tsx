'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type FadeLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  back?: boolean;
};

const NAV_FLAG = 'fade-link-navigated';

export function FadeLink({ href, children, className, back }: FadeLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Fade out
    document.body.classList.add('fade-out');

    setTimeout(() => {
      // Going back through history restores the scroll position;
      // fall back to push when the page was opened directly.
      if (back && sessionStorage.getItem(NAV_FLAG) === '1') {
        router.back();
      } else {
        sessionStorage.setItem(NAV_FLAG, '1');
        router.push(href);
      }
    }, 300);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
