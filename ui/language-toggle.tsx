'use client';

import { useLanguage } from '#/lib/language-context';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed right-6 top-6 z-50 flex gap-2 text-xs md:right-12 md:top-12">
      <button
        onClick={() => setLang('en')}
        className={`transition-opacity ${
          lang === 'en' ? 'text-white/90' : 'text-gray-400 hover:opacity-70'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => setLang('ja')}
        className={`transition-opacity ${
          lang === 'ja' ? 'text-white/90' : 'text-gray-400 hover:opacity-70'
        }`}
      >
        JA
      </button>
    </div>
  );
}
