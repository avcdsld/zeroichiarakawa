import type { ReactNode } from 'react';

export type Language = 'en' | 'ja';

export const LANGUAGES: Language[] = ['en', 'ja'];

/**
 * Both languages are rendered into the HTML and one is hidden with CSS
 * (see styles/globals.css), rather than picking one at render time.
 *
 * It keeps a single URL for both languages — what gets shared on social media
 * works for either reader — while staying statically generated. It also means
 * crawlers and language models that do not run JavaScript can read the Japanese
 * at all, which was not true when it only appeared after mount. As a side
 * effect the reader's language is settled before the first paint, so no text
 * swaps or reflows under them.
 *
 * The trade-off: <title> and <meta description> can only hold one language.
 * They stay English.
 */
export function T({ en, ja }: { en: ReactNode; ja: ReactNode }) {
  return (
    <>
      <span data-t="en">{en}</span>
      <span data-t="ja" lang="ja">
        {ja}
      </span>
    </>
  );
}

/** T for block-level content, which cannot live inside a <span>. */
export function TBlock({ en, ja }: { en: ReactNode; ja: ReactNode }) {
  return (
    <>
      <div data-t="en">{en}</div>
      <div data-t="ja" lang="ja">
        {ja}
      </div>
    </>
  );
}

/** Reads as a translation call, but emits both languages. */
export function t(en: ReactNode, ja: ReactNode) {
  return <T en={en} ja={ja} />;
}
