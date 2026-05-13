'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { menuData } from '#/lib/menu-data';
import { useLanguage } from '#/lib/language-context';
import { FadeLink } from '#/ui/fade-link';

export default function Page({ params }: { params: { slug: string } }) {
  const { t, lang } = useLanguage();
  const menuItem = menuData
    .map((section) => section.items)
    .flat()
    .find((item) => item.slug === 'works/' + params.slug);
  if (!menuItem) {
    notFound();
  }

  const title = menuItem.nameJa && lang === 'ja' ? menuItem.nameJa : menuItem.name;
  const description = menuItem.descriptionJa && lang === 'ja' ? menuItem.descriptionJa : menuItem.description;

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <FadeLink
        href="/"
        className="fixed left-6 top-6 text-xs text-gray-500 transition-opacity hover:opacity-50 md:left-12 md:top-12"
      >
        {t('← back', '← 戻る')}
      </FadeLink>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-12">
        <header className="mb-16">
          <h1 className="text-xl text-white">{title}</h1>
          {menuItem.year && (
            <p className="mt-2 text-sm text-gray-600">{menuItem.year}</p>
          )}
        </header>

        <div className="mb-16">
          <Image
            src={`/images/${params.slug}.jpg`}
            alt={title}
            width={800}
            height={600}
            sizes="100vw"
            priority
            className="w-full"
            style={{ height: 'auto' }}
          />
        </div>

        {description && (
          <p className="mb-16 whitespace-pre-wrap text-sm leading-loose text-gray-400">
            {description}
          </p>
        )}

        {menuItem.externalUrls && menuItem.externalUrls.length > 0 && (
          <div className="space-y-3 border-t border-gray-800 pt-8">
            {menuItem.externalUrls.map((url: string) =>
              url ? (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 transition-opacity hover:opacity-50"
                >
                  {url}
                </a>
              ) : null,
            )}
          </div>
        )}
      </div>
    </div>
  );
}
