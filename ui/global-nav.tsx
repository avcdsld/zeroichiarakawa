'use client';

import { menuData, type Item } from '#/lib/menu-data';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { notoSansJP } from '../font/font';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div
      className={
        'menu-font fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800'
      }
    >
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Zeroichi Arakawa / Ara
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-0">
          {menuData.map((section, index) => {
            return (
              <div key={index}>
                <div
                  className={`${notoSansJP.className} mb-2 px-3 text-xs font-bold font-semibold uppercase tracking-wider text-gray-400/80`}
                >
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item: any) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <>
      {item.slug ? (
        <Link
          onClick={close}
          href={`/${item.slug}`}
          className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
            {
              'text-gray-400 hover:bg-gray-800': !isActive,
              'text-white': isActive,
            },
          )}
        >
          {item.name}
        </Link>
      ) : (
        <a
          onClick={close}
          href={item && item!.externalUrls && item!.externalUrls[0]}
          target="_blank"
          rel="noreferrer"
          className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
            {
              'text-gray-400 hover:bg-gray-800': !isActive,
              'text-white': isActive,
            },
          )}
        >
          {item.name}
        </a>
      )}
    </>
  );
}
