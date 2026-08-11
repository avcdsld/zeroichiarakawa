import type { Language } from '#/lib/i18n';

export const LANGUAGE_STORAGE_KEY = 'lang';

/**
 * Runs before the body is painted, so the reader never sees the other language
 * first. Kept as a string because it has to be inlined into the document: an
 * external or hydrated script would already be too late.
 *
 * Order of preference: an explicit ?lang= in the URL, then a previous choice,
 * then the browser's own language.
 */
export const LANGUAGE_INIT_SCRIPT = `(function(){try{
var p=new URLSearchParams(location.search).get('lang');
var l=(p==='ja'||p==='en')?p:(localStorage.getItem('${LANGUAGE_STORAGE_KEY}')||((navigator.language||'').toLowerCase().indexOf('ja')===0?'ja':'en'));
if(l!=='ja'){l='en'}
document.documentElement.dataset.lang=l;
document.documentElement.lang=l;
}catch(e){}})()`;

export function currentLanguage(): Language {
  return document.documentElement.dataset.lang === 'ja' ? 'ja' : 'en';
}

/**
 * Switching is a DOM attribute change rather than a re-render: nothing reflows,
 * so the reader keeps their place on the page.
 */
export function setLanguage(lang: Language) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Private mode; the choice just will not outlive the tab.
  }

  // Keep ?lang= in the URL only once it has been chosen deliberately, so that a
  // shared link carries that choice. Links shared without it adapt to whoever
  // opens them. history.state carries scroll bookkeeping — preserve it.
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState(window.history.state, '', url);
}
