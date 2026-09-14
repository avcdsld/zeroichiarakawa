'use client';

import { t } from '#/lib/i18n';
import { BackLink } from '#/ui/back-link';

export type DiaryEntry = {
  slugJa: string;
  slugEn: string;
  titleJa: string;
  titleEn: string;
};

export function DiaryIndex({ entries }: { entries: DiaryEntry[] }) {
  return (
    <div className="min-h-[100svh]">
      <BackLink />

      <div className="mx-auto max-w-2xl px-6 py-24 md:px-12">
        <h1 className="mb-16 text-xl text-white">{t('Diary', '日記')}</h1>

        {entries.length === 0 ? (
          <p className="text-sm text-gray-400">
            {t('Nothing yet.', 'まだ何もありません。')}
          </p>
        ) : (
          <ul className="space-y-6">
            {entries.map((e) => {
              // Static HTML served via rewrite — plain <a> (full navigation),
              // not next/link. Each edition links to its own slug so the one on
              // screen always points at the matching language; when a piece has
              // only one edition, both slugs are the same file.
              const className =
                'text-base text-gray-300 transition-opacity hover:opacity-70';
              return (
                <li key={e.slugJa}>
                  {t(
                    <a href={`/diary/${e.slugEn}`} className={className}>
                      {e.titleEn}
                    </a>,
                    <a href={`/diary/${e.slugJa}`} className={className}>
                      {e.titleJa}
                    </a>,
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
