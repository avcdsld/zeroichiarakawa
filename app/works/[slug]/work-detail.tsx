'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { menuData } from '#/lib/menu-data';
import { t, TBlock } from '#/lib/i18n';
import { WORK_DETAIL_SIZES } from '#/lib/work-image';
import { BackLink } from '#/ui/back-link';
import { FadeLink } from '#/ui/fade-link';

function linkLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

// Text between ``` fences is rendered as a code block, the rest as prose.
function Description({ text }: { text: string }) {
  const parts = text.split('```');
  return (
    <div className="mb-16">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <pre
            key={i}
            className="my-8 overflow-x-auto border-l border-gray-800 pl-6 font-mono text-xs leading-loose text-gray-300"
          >
            {part.replace(/^\n/, '').replace(/\n$/, '')}
          </pre>
        ) : (
          <p
            key={i}
            className="whitespace-pre-wrap text-sm leading-loose text-gray-400"
          >
            {part.replace(/^\n/, '').replace(/\n$/, '')}
          </p>
        ),
      )}
    </div>
  );
}

// Only works with their own page take part in the prev/next walk; the external
// ones would drop the reader out of the site.
const works = (menuData.find((s) => s.name === 'Works')?.items ?? []).filter(
  (item) => item.slug,
);

export function WorkDetail({
  slug,
  image,
}: {
  slug: string;
  image: string | null;
}) {
  const index = works.findIndex((item) => item.slug === 'works/' + slug);
  const menuItem = works[index];
  if (!menuItem) {
    notFound();
  }

  const previous = works[index - 1];
  const next = works[index + 1];
  const title = menuItem.nameJa
    ? t(menuItem.name, menuItem.nameJa)
    : menuItem.name;

  return (
    <div className="min-h-[100svh]">
      <BackLink />

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-12">
        <header className="mb-16">
          <h1 className="text-xl text-white">{title}</h1>
          {menuItem.year && (
            <p className="mt-2 text-sm text-gray-400">{menuItem.year}</p>
          )}
        </header>

        {image && (
          <div className="bg-gray-1000 mb-16">
            <Image
              src={image}
              alt={menuItem.name}
              width={800}
              height={600}
              sizes={WORK_DETAIL_SIZES}
              priority
              className="w-full"
              style={{ height: 'auto' }}
            />
          </div>
        )}

        {menuItem.photos?.map((photo) => (
          <figure key={photo.src} className="mb-16">
            <div className="bg-gray-1000">
              <Image
                src={photo.src}
                alt={menuItem.name}
                width={photo.width}
                height={photo.height}
                sizes={WORK_DETAIL_SIZES}
                className="w-full"
                style={{ height: 'auto' }}
              />
            </div>
            {photo.caption && (
              <figcaption className="mt-3 text-xs text-gray-400">
                {t(photo.caption, photo.captionJa ?? photo.caption)}
              </figcaption>
            )}
          </figure>
        ))}

        {menuItem.description && (
          <TBlock
            en={<Description text={menuItem.description} />}
            ja={
              <Description
                text={menuItem.descriptionJa ?? menuItem.description}
              />
            }
          />
        )}

        {menuItem.externalUrls && menuItem.externalUrls.length > 0 && (
          <div className="space-y-3 border-t border-gray-800 pt-8">
            {menuItem.externalUrls.map((url: string) =>
              url ? (
                <a
                  key={url}
                  href={url}
                  title={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-400 transition-opacity hover:opacity-50"
                >
                  {linkLabel(url)} ↗
                </a>
              ) : null,
            )}
          </div>
        )}

        {(previous || next) && (
          <nav className="mt-24 flex justify-between gap-6 border-t border-gray-800 pt-8 text-sm">
            {previous ? (
              <FadeLink
                href={`/${previous.slug}`}
                className="text-gray-400 transition-opacity hover:opacity-50"
              >
                ←{' '}
                {previous.nameJa
                  ? t(previous.name, previous.nameJa)
                  : previous.name}
              </FadeLink>
            ) : (
              <span />
            )}
            {next && (
              <FadeLink
                href={`/${next.slug}`}
                className="text-right text-gray-400 transition-opacity hover:opacity-50"
              >
                {next.nameJa ? t(next.name, next.nameJa) : next.name} →
              </FadeLink>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
