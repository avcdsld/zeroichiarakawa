'use client';

import { useLanguage } from '#/lib/language-context';
import { FadeLink } from '#/ui/fade-link';

export type DiaryEntry = {
  slug: string;
  titleJa: string;
  titleEn: string;
  hasEn: boolean;
};

export function DiaryIndex({ entries }: { entries: DiaryEntry[] }) {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen">
      <FadeLink
        href="/"
        className="fixed left-6 top-6 text-xs text-gray-500 transition-opacity hover:opacity-50 md:left-12 md:top-12"
      >
        {t('← back', '← 戻る')}
      </FadeLink>

      <div className="mx-auto max-w-2xl px-6 py-24 md:px-12">
        <h1 className="mb-16 text-xl text-white">{t('Diary', '日記')}</h1>

        {entries.length === 0 ? (
          <p className="text-sm text-gray-500">
            {t('Nothing yet.', 'まだ何もありません。')}
          </p>
        ) : (
          <ul className="space-y-6">
            {entries.map((e) => {
              // Static HTML served via rewrite — use a plain <a> (full nav),
              // not next/link. Fall back to the JP edition when no EN exists.
              const href =
                lang === 'ja' || !e.hasEn
                  ? `/diary/${e.slug}`
                  : `/diary/${e.slug}-en`;
              const title = lang === 'ja' ? e.titleJa : e.titleEn;
              return (
                <li key={e.slug}>
                  <a
                    href={href}
                    className="text-base text-gray-300 transition-opacity hover:opacity-70"
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
