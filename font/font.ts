import { Roboto_Mono, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
});

export { robotoMono, notoSansJP, notoSerifJP };
