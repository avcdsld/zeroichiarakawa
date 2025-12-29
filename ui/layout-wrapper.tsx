'use client';

import { usePathname } from 'next/navigation';
import { GlobalNav } from './global-nav';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const is2025Page = pathname === '/2025';

  return (
    <>
      {!is2025Page && <GlobalNav />}
      <div className={is2025Page ? '' : 'lg:pl-72'}>
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          <div className="p-3.5 lg:p-6">{children}</div>
        </div>
      </div>
    </>
  );
}
