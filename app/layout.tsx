import '#/styles/globals.css';
import { Metadata } from 'next';
import { notoSerifJP } from '#/font/font';
import { LayoutWrapper } from '#/ui/layout-wrapper';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Zeroichi Arakawa',
    template: '%s | Zeroichi Arakawa',
  },
  description:
    'A smart contract engineer and code poet who started developing blockchain and decentralized applications in 2017. In 2019, developed miime, an NFT marketplace on Ethereum. Since 2021, has been working at Mercari Inc., developing NFT-related products. From 2022, they have been intensifying their artistic endeavors, exploring the structural and poetic beauty of code through the use of blockchain and smart contracts.',
  openGraph: {
    title: 'Zeroichi Arakawa',
    description:
      'A smart contract engineer and code poet who started developing blockchain and decentralized applications in 2017. In 2019, developed miime, an NFT marketplace on Ethereum. Since 2021, has been working at Mercari Inc., developing NFT-related products. From 2022, they have been intensifying their artistic endeavors, exploring the structural and poetic beauty of code through the use of blockchain and smart contracts.',
    // images: [`/api/og?title=Zeroichi Arakawa`],
    images: [`https://zeroichiarakawa.com/images/og.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeroichi Arakawa',
    description:
      'A smart contract engineer and code poet who started developing blockchain and decentralized applications in 2017. In 2019, developed miime, an NFT marketplace on Ethereum. Since 2021, has been working at Mercari Inc., developing NFT-related products. From 2022, they have been intensifying their artistic endeavors, exploring the structural and poetic beauty of code through the use of blockchain and smart contracts.',
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
    <html lang="en" className="[color-scheme:dark]">
      <body
        className={`${notoSerifJP.className} bg-gray-1100 overflow-y-scroll pb-36`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
