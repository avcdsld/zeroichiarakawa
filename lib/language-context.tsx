'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type Language = 'en' | 'ja';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, ja: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [lang, setLangState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check URL param first, then localStorage
    const urlLang = searchParams.get('lang');
    if (urlLang === 'ja' || urlLang === 'en') {
      setLangState(urlLang);
      localStorage.setItem('lang', urlLang);
    } else {
      const stored = localStorage.getItem('lang') as Language;
      if (stored === 'ja' || stored === 'en') {
        setLangState(stored);
      }
    }
    setMounted(true);
  }, [searchParams]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Keep ?lang= in the URL so shared links preserve the language.
  // English is the default, so its URLs stay clean (no param).
  useEffect(() => {
    if (!mounted) return;
    const url = new URL(window.location.href);
    if (lang === 'ja') {
      if (url.searchParams.get('lang') === 'ja') return;
      url.searchParams.set('lang', 'ja');
    } else {
      if (!url.searchParams.has('lang')) return;
      url.searchParams.delete('lang');
    }
    window.history.replaceState(window.history.state, '', url);
  }, [lang, pathname, mounted]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (en: string, ja: string) => (lang === 'ja' ? ja : en);

  // Before mount the stored language is unknown, so English is rendered — the
  // same output as the server, which is what avoids a hydration mismatch. The
  // provider itself stays in place either way: swapping it in later would
  // change the element type and remount the entire tree below it.
  const value = mounted
    ? { lang, setLang, t }
    : { lang: 'en' as Language, setLang, t: (en: string) => en };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

const defaultContext: LanguageContextType = {
  lang: 'en',
  setLang: () => {},
  t: (en: string, _ja: string) => en,
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  // Return default context during SSG/SSR when provider isn't available
  return context || defaultContext;
}
