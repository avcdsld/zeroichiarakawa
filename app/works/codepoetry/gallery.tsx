'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { t } from '#/lib/i18n';
import { BackLink } from '#/ui/back-link';
import poems from '#/lib/codepoetry-data.json';

type Poem = typeof poems[number];

const LANGS = (() => {
  const counts: Record<string, number> = {};
  for (const p of poems) {
    if (p.lang) counts[p.lang] = (counts[p.lang] || 0) + 1;
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([lang]) => lang);
})();

const PAGE_SIZE = 24;

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${d.getMonth() + 1}`;
}

export function CodePoetryGallery() {
  const [filter, setFilter] = useState<string | null>(null);
  const [shown, setShown] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{
    poem: Poem;
    index: number;
  } | null>(null);

  const filtered = useMemo(
    () => (filter ? poems.filter((p) => p.lang === filter) : poems),
    [filter],
  );

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  return (
    <div className="min-h-[100svh]">
      <BackLink />

      <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">
        <header className="mb-12">
          <h1 className="text-xl text-white">Code Poetry on X</h1>
          <p className="mt-2 text-sm text-gray-400">
            {t(`${poems.length} poems, 2023–`, `${poems.length}篇、 2023年〜`)}
          </p>
        </header>

        {/* Language filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setFilter(null);
              setShown(PAGE_SIZE);
            }}
            className={`rounded-full border px-3 py-1 text-xs transition-opacity ${
              filter === null
                ? 'border-gray-400 text-gray-300'
                : 'border-gray-700 text-gray-500 hover:opacity-70'
            }`}
          >
            {t('All', 'すべて')}
          </button>
          {LANGS.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setFilter(filter === lang ? null : lang);
                setShown(PAGE_SIZE);
              }}
              className={`rounded-full border px-3 py-1 text-xs transition-opacity ${
                filter === lang
                  ? 'border-gray-400 text-gray-300'
                  : 'border-gray-700 text-gray-500 hover:opacity-70'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((poem) => (
            <article key={poem.id} className="group">
              {poem.media.length > 0 && poem.media[0].type === 'image' && (
                <button
                  onClick={() => setLightbox({ poem, index: 0 })}
                  className="bg-gray-1000 mb-3 block w-full cursor-zoom-in overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/images/codepoetry/${poem.media[0].src}`}
                    alt={poem.title || 'code poetry'}
                    width={640}
                    height={640}
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    className="w-full object-contain transition-opacity group-hover:opacity-80"
                  />
                </button>
              )}
              {poem.media.length > 0 && poem.media[0].type === 'video' && (
                <div className="mb-3 overflow-hidden rounded-lg">
                  <video
                    src={`/images/codepoetry/${poem.media[0].src}`}
                    controls
                    preload="metadata"
                    className="w-full"
                  />
                </div>
              )}
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate text-sm text-gray-300">
                  {poem.title || ' '}
                </span>
                <span className="flex-shrink-0 text-xs text-gray-500">
                  {formatDate(poem.date)}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-3">
                {poem.lang && (
                  <span className="text-xs text-gray-500">{poem.lang}</span>
                )}
                <a
                  href={poem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-gray-600 transition-opacity hover:opacity-50"
                >
                  X ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShown((s) => s + PAGE_SIZE)}
              className="rounded-full border border-gray-700 px-6 py-2 text-sm text-gray-400 transition-opacity hover:opacity-70"
            >
              {t('Load more', 'もっと見る')}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          poem={lightbox.poem}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={(index) => setLightbox({ ...lightbox, index })}
        />
      )}
    </div>
  );
}

function Lightbox({
  poem,
  index,
  onClose,
  onNav,
}: {
  poem: Poem;
  index: number;
  onClose: () => void;
  onNav: (index: number) => void;
}) {
  const images = poem.media.filter((m) => m.type === 'image');
  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="bg-black/92 fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute right-6 top-6 text-2xl text-white/80 hover:text-white"
        onClick={onClose}
      >
        ✕
      </button>
      {images.length > 1 && index > 0 && (
        <button
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            onNav(index - 1);
          }}
        >
          ‹
        </button>
      )}
      {images.length > 1 && index < images.length - 1 && (
        <button
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation();
            onNav(index + 1);
          }}
        >
          ›
        </button>
      )}
      <div
        className="flex max-h-[92vh] max-w-[92vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`/images/codepoetry/${current.src}`}
          alt={poem.title || 'code poetry'}
          className="max-h-[78vh] rounded object-contain"
        />
        <div className="mt-3 text-center">
          {poem.title && <p className="text-sm text-gray-200">{poem.title}</p>}
          {poem.text && poem.text !== poem.title && (
            <p className="mt-1 max-w-lg whitespace-pre-wrap text-xs leading-relaxed text-gray-400">
              {poem.text}
            </p>
          )}
          {images.length > 1 && (
            <p className="mt-2 text-xs text-gray-500">
              {index + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
