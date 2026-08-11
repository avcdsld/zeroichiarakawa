import '#/styles/globals.css';
import { Metadata } from 'next';
import { notoSerifJP, robotoMono } from '#/font/font';
import { LANGUAGE_INIT_SCRIPT } from '#/lib/language';
import { LayoutWrapper } from '#/ui/layout-wrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://zeroichiarakawa.com'),
  title: {
    default: 'Zeroichi Arakawa',
    template: '%s | Zeroichi Arakawa',
  },
  description:
    'Code poet exploring program code as a medium that is read, tested, and executed. PhD candidate at IAMAS, Japan.',
  openGraph: {
    title: 'Zeroichi Arakawa',
    description:
      'Code poet exploring program code as a medium that is read, tested, and executed. PhD candidate at IAMAS, Japan.',
    // images: [`/api/og?title=Zeroichi Arakawa`],
    images: [`https://zeroichiarakawa.com/images/og.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeroichi Arakawa',
    description:
      'Code poet exploring program code as a medium that is read, tested, and executed. PhD candidate at IAMAS, Japan.',
    // images: [`/api/og?title=Zeroichi Arakawa`],
    images: [`https://zeroichiarakawa.com/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`[color-scheme:dark] ${notoSerifJP.variable} ${robotoMono.variable}`}
    >
      <body
        className={`${notoSerifJP.className} bg-gray-1100 overflow-y-scroll`}
      >
        {/* First thing in the body: the language has to be settled before any
            of the page below is painted. */}
        <script dangerouslySetInnerHTML={{ __html: LANGUAGE_INIT_SCRIPT }} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
