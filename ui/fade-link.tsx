'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type FadeLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function FadeLink({ href, children, className }: FadeLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Fade out
    document.body.classList.add('fade-out');

    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
