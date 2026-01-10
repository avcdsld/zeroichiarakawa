'use client';

import { usePathname } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { GlobalNav } from './global-nav';
import { LanguageProvider } from '#/lib/language-context';
import { LanguageToggle } from './language-toggle';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const is2025Page = pathname === '/2025';
  const isHomePage = pathname === '/';
  const isWorksPage = pathname.startsWith('/works/');
  const isCVPage = pathname === '/cv';

  // Remove fade-out class when page changes
  useEffect(() => {
    document.body.classList.remove('fade-out');
  }, [pathname]);

  // These pages have their own layout
  const needsWrapper = !isHomePage && !isWorksPage && !is2025Page && !isCVPage;

  return (
    <>
      {!is2025Page && <GlobalNav />}
      {!is2025Page && <LanguageToggle />}
      <div className={needsWrapper ? 'mx-auto max-w-2xl px-6 py-24 lg:px-8' : ''}>
        {children}
      </div>
    </>
  );
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>{children}</div>}>
      <LanguageProvider>
        <LayoutContent>{children}</LayoutContent>
      </LanguageProvider>
    </Suspense>
  );
}
