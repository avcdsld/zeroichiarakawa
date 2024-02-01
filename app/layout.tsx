import '#/styles/globals.css';
import { Metadata } from 'next';
import { GlobalNav } from '#/ui/global-nav';
import { notoSerifJP } from '#/font/font';

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
    images: [`/images/og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeroichi Arakawa',
    description:
      'A smart contract engineer and code poet who started developing blockchain and decentralized applications in 2017. In 2019, developed miime, an NFT marketplace on Ethereum. Since 2021, has been working at Mercari Inc., developing NFT-related products. From 2022, they have been intensifying their artistic endeavors, exploring the structural and poetic beauty of code through the use of blockchain and smart contracts.',
    // images: [`/api/og?title=Zeroichi Arakawa`],
    images: [`/images/og.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      {/* <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36"> */}
      <body
        className={`${notoSerifJP.className} bg-gray-1100 overflow-y-scroll pb-36`}
      >
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
