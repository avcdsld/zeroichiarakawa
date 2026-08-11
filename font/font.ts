import { Roboto_Mono, Noto_Serif_JP } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// Only the regular weight is used; the Japanese subsets are split into ~100
// files per weight, so every extra weight is a large build/CDN cost.
// preload is off because those subsets cannot meaningfully be preloaded.
const notoSerifJP = Noto_Serif_JP({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  variable: '--font-noto-serif-jp',
});

export { robotoMono, notoSerifJP };
