'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

type Language = 'en' | 'ja';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, ja: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
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

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (en: string, ja: string) => (lang === 'ja' ? ja : en);

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
