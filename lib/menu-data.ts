export type Item = {
  name: string;
  slug: string;
  description?: string;
  externalUrls?: string[];
};

export const menuData: any[] = [
  {
    items: [
      {
        name: 'CV',
        slug: 'cv',
      },
    ],
  },
  {
    name: 'Works',
    items: [
      {
        name: 'Code Poetry on X ↗',
        slug: '',
        externalUrls: [
          'https://twitter.com/search?q=from%3Aarandoros%20%23CodePoetry&src=typed_query&f=live',
        ],
        image: '/images/code-poetry-on-x.png',
        year: '2023―',
      },
      {
        name: 'inside window',
        slug: 'works/inside-window',
        description:
          "‘inside window’ is part of the ‘Visual Poetry’ group show curated by Atelier. This work merges code poetry and generative art. When executed, it searches for all the functions within the browser's ‘window’ object, selects one, and calls it. The return from this function call reveals words of an error message that lie deep within the code, unveiling an unimaginably vast horizon. This is an introspective piece where generative art reflects upon itself, representing a completely new form of generative poetry.",
        externalUrls: [
          'https://www.fxhash.xyz/generative/30729',
          'https://www.atelierart.io/post/code-as-poetry-a-dialogue-with-ara-on-inside-window',
        ],
        year: '2024',
      },
      {
        name: 'コード詩集',
        slug: 'works/code-poetry-collection',
        description:
          'コード詩とは、プログラムのコードで書かれた詩のことである。コード詩には様々なものがある。⼀般的な詩のように⽂章として読ませるもの、アルゴリズムを読ませるもの、実⾏結果が⼤事なもの、実⾏プロセスが⼤事なもの、インタラクションできるもの、などなど。この詩集では、私がつくった数⼗篇のコード詩を紹介している。特定のプログラミング言語の知識がなくてもわかるように、簡単な図とともに解説を書いた。これらの作品は、コードでないと表現できないものだ。コードは新しい表現媒体である。そして、コードはとても楽しい。この本を通して、コードの持つ⾯⽩さや可能性を少しでも感じてもらえたら幸いである。',
        externalUrls: [
          'https://techbookfest.org/product/7dDePxSf3JnzJJrrbPvwnC',
        ],
        year: '2023',
      },
      {
        name: '暗号現代詩',
        slug: 'works/crypto-modern-poetry',
        description:
          '暗号技術と現代詩が交差する点、それがこの詩集『暗号現代詩 – GPT-4 によるニーモニックの詩』です。これは、技術とアート、暗号と⾔葉が融合し、新しい⽂学の形を創り出す試みです。暗号通貨の世界では、BIP-39 ニーモニックは⼈々の資産を保護する鍵となる⾔葉の集まりです。しかし、これらの⾔葉たちも、詩的な要素を持つことを忘れてはいけません。それぞれの⾔葉には背景や意味、響きや韻があります。この詩集では、GPT-4 の能⼒を駆使して、これらのニーモニックをベースに詩を⽣成しました。',
        externalUrls: [
          'https://techbookfest.org/product/fSnqiYMuRa8stmuYMXJhS',
        ],
        year: '2023',
      },
      {
        name: 'Digital Native Art [Replica]',
        slug: 'works/digital-native-art',
        description: `Code is executable literature. Blockchain creates a completely new digital world where code exists and continues to run. We can create digital-native entities that exist only in this environment. "Digital Native Art" is a smart contract designed with a resource-oriented approach to generate such entities. Anyone can interact with this code and create and destroy things called "art" in the digital world. Please try tapping the button displayed on the tablet. After a few seconds, the state of the digital world will change. While everyone can create art, this artwork also demonstrates the fragility of the connection between the physical and digital worlds by making it difficult to prove who the operator is. The stainless steel plate bears the code of this smart contract. The adjacent monitor displays the real-time duration of the code's execution in the digital world and the number of artworks created or destroyed as a result. The stainless steel plate and the monitor serve as physical replicas of “Digital Native Art”. How many years will the stainless steel plate last? How many years have passed since the code was engraved? How many people have been influenced by it? Please experience the differences between the nature of the digital and physical worlds.`,
        externalUrls: ['https://proofofx.art/2023/works/ara'],
        year: '2023',
      },
      {
        name: 'Replicable',
        slug: 'works/replicable',
        description: `This is a special smart contract code that, when executed, replicates a smart contract of the same code as itself. These kinds of programs are known as 'Quines'. This represents one of the earliest Quines written as a smart contract, and is also a work of concrete poetry. Experience a new form of poetry that blends tangible beauty with conceptual elegance.`,
        externalUrls: [
          'https://twitter.com/flowverse_/status/1696877694007509466',
        ],
        year: '2023',
      },
      {
        name: 'Async to Sync',
        slug: 'works/async-to-sync',
        description: `The question that I've been trying to answer is "What does it really mean to create art on the blockchain?". And smart contract art provides the answer. Like the randomness in music and generative art, smart contracts also generate contingencies born out of the blockchain. When retrieving the metadata, 12 messages are randomly selected from the thousands of messages logged in the most oldest smart contract “Terra nullius” and given to the generative art code. This is the people's voices and the chain's unique memories. The onchain cutup changing with each metadata refresh forms the fundamental meaning of the existence of the artwork in the visual expression.`,
        externalUrls: ['https://cryptorecord.kumaleon.com'],
        year: '2023',
      },
      {
        name: 'Lost Language',
        slug: 'works/lost-language',
        description:
          'The world is full of letters and data that can no longer be deciphered, and these are growing in number. The same is true in the digital world. In this work, by loading my original font into p5.js, I expressed the lost language wandering in the digital space.',
        externalUrls: ['https://lost-language.web.app'],
        year: '2022',
      },
      {
        name: 'Sakutaro Poems NFTs',
        slug: 'works/sakutaro-poems-nfts',
        description: `Thirty-nine poems from Sakutaro Hagiwara's late self-selected collection "Shukumei" have been inscribed on the blockchain as full-on-chain NFTs. These NFTs have a little mysterious property in that their contents change depending on the owner. These NFTs will be issued on multiple blockchains. NFTs can be issued on chains such as Ethereum, Polygon, BSC, Arbitrum, Optimism, Shiden, Avalanche C-Chain, Flow, Tezos, Sui, Aptos, etc. Up to 39 NFTs can be issued for each chain. I like the literary works of Sakutaro Hagiwara. What can we do to add value to this and keep it in the digital space for a long time? How enduring are the NFT standards and SVG data? Which chains should be used to ensure that they remain in place for a long time? This is an experiment that will be conducted many years into the future.`,
        externalUrls: ['https://sakutaro-poem-nft.web.app'],
        year: '2022',
      },
      {
        name: 'Smart Contract Art Collection ↗',
        slug: '',
        externalUrls: ['https://ara721.art/'],
        image: '/images/smart-contract-art-collection.png',
        year: '2023',
      },
    ],
  },
  {
    name: 'Activities',
    items: [
      {
        name: 'Interview by Flowverse',
        slug: 'activities/interview-by-flowverse',
      },
      {
        name: 'Proof of X Exhibition',
        slug: 'activities/proof-of-x-exhibition',
      },
      {
        name: 'CAWA Tokyo 2022 Exhibition',
        slug: 'activities/cawa-tokyo-2022-exhibition',
      },
      {
        name: 'Crypto Art Fes 2022 Exhibition',
        slug: 'activities/crypto-art-fes-2022-exhibition',
      },
    ],
  },
  {
    name: 'Links',
    items: [
      {
        name: 'X',
        slug: '',
        externalUrls: ['https://twitter.com/arandoros'],
      },
      {
        name: 'fxhash',
        slug: '',
        externalUrls: ['https://www.fxhash.xyz/u/Ara%20Zeroichi'],
      },
      {
        name: 'GitHub',
        slug: '',
        externalUrls: ['https://github.com/avcdsld'],
      },
      {
        name: 'Medium',
        slug: '',
        externalUrls: ['https://medium.com/@avcdsld'],
      },
      {
        name: 'Qiita',
        slug: '',
        externalUrls: ['https://qiita.com/avcdsld'],
      },
      {
        name: 'Speaker Deck',
        slug: '',
        externalUrls: ['https://speakerdeck.com/avcdsld'],
      },
      {
        name: 'Instagram',
        slug: '',
        externalUrls: ['https://www.instagram.com/ara721_'],
      },
    ],
  },
];
