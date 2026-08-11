'use client';

import { usePathname } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { LanguageProvider } from '#/lib/language-context';
import { LanguageToggle } from './language-toggle';
import { useNavigation } from './use-navigation';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const is2025Page = pathname === '/2025';

  useNavigation();

  // Remove fade-out class when page changes
  useEffect(() => {
    document.body.classList.remove('fade-out');
  }, [pathname]);

  // Every page owns its own container, so this wrapper only adds the chrome
  // that sits on top of them.
  return (
    <>
      {!is2025Page && <LanguageToggle />}
      {children}
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
