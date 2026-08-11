'use client';

import { LANGUAGES } from '#/lib/i18n';
import { setLanguage } from '#/lib/language';

// Which one reads as active is decided by CSS from the root attribute, not by
// React state — the toggle is correct on the very first paint, and pressing it
// changes nothing about the layout.
export function LanguageToggle() {
  return (
    <div className="fixed right-6 top-6 z-50 flex gap-2 text-xs md:right-12 md:top-12">
      {LANGUAGES.map((lang, index) => (
        <div key={lang} className="flex gap-2">
          {index > 0 && <span className="text-gray-400">/</span>}
          <button
            onClick={() => setLanguage(lang)}
            data-lang-button={lang}
            className="text-gray-400 transition-opacity hover:opacity-70"
          >
            {lang.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
}
