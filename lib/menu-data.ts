export type Item = {
  name: string;
  nameJa?: string;
  slug: string;
  description?: string;
  descriptionJa?: string;
  externalUrls?: string[];
  image?: string;
  year?: string;
};

export type Section = {
  name: string;
  items: Item[];
};

export const menuData: Section[] = [
  {
    name: 'Works',
    items: [
      {
        name: 'no extension',
        slug: 'works/no-extension',
        description:
          'These are Bitcoin transactions confirmed on mainnet. They are also files—HTML, PDF, ZIP. No conversion. No extraction. The bytes are the same.\n\nThis work cannot be read passively. To encounter it is to verify it—to inspect the bytes, to confirm that the same sequence is simultaneously a valid transaction and a valid file. The poetic moment is not in opening the file. It is in the act of confirmation itself.',
        descriptionJa:
          'これらはメインネットで承認された Bitcoin トランザクションである。同時に HTML、PDF、ZIP ファイルでもある。変換も抽出も不要。バイト列はそのまま同じである。\n\nこの作品は受動的に鑑賞することができない。この作品に出会うことは、それを検証することである——バイト列を調べ、同じシーケンスが有効なトランザクションであると同時に有効なファイルであることを確認すること。詩的な瞬間はファイルを開くことにあるのではない。確認という行為そのものにある。',
        image: '/images/no-extension.gif',
        externalUrls: ['https://no-extension.poesy.run'],
        year: '2026',
      },
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
        name: 'CodeTEI',
        slug: 'works/code-tei',
        description:
          '"CodeTEI" is a technical specification for quoting and interpreting executable poetry that itself stands as a poem.\nIt extends the international standard TEI (Text Encoding Initiative) for scholarly documents, defining an XML schema that structures the execution, quotation, and multi-layered interpretation of code poetry. Each line of a poem carries a persistent identifier in the format `codetei://sha3-256-<digest>#<lineID>`, enabling precise citation. Annotations by humans, AI, and systems are recorded without hierarchy, and even execution logs or error messages are treated as new lines woven into the body of the poem.\nIn the exhibition, HTML quoting one of the "Executed Poetry" poems, "If your heart is empty, borrow love from the universe.", is displayed alongside XML containing equivalent information written according to the CodeTEI specification. CodeTEI is a protocol for preserving, quoting, and interpreting poetry in the digital age, and is itself a meta-poem that explores what poetry is.',
        descriptionJa:
          '「CodeTEI」は、実行可能な詩を引用し解釈するための技術仕様であり、それ自体が一篇の詩として成立している。\n学術文書の国際標準であるTEI（Text Encoding Initiative）を拡張し、コード詩の実行・引用・多層的解釈を構造化するXMLスキーマを定義している。詩の各行は `codetei://sha3-256-<digest>#<lineID>` という形式の永続的識別子を持ち、正確な引用を可能にする。人間、AI、システムによる注釈は階層なく記録され、実行ログやエラーメッセージさえも詩の本文に織り込まれる新たな行として扱われる。\n展示では、「Executed Poetry」の詩の一つ「If your heart is empty, borrow love from the universe.」を引用したHTMLと、CodeTEI仕様に従って書かれた同等の情報を含むXMLが並べて展示される。CodeTEIはデジタル時代における詩の保存・引用・解釈のためのプロトコルであり、詩とは何かを探求するメタ詩でもある。',
        image: '/images/code-tei.jpg',
        externalUrls: ['https://github.com/CodeArtStudies/CodeTEI'],
        year: '2025',
      },
      {
        name: 'BUGCAT',
        slug: 'works/bugcat',
        description:
          'BUGCAT explores the poetics of code through its failures. When developers write smart contracts, they believe they are creating closed systems—deterministic machines that execute exactly as written. But language, even programming language, always contains more than its authors intend.Each BUGCAT is a monument to a moment when code transcended its own grammar. They are smart contracts that remember other smart contracts, creating a living archive of the times when code escaped its own intentions. Through the act of remembrance, they transform technical failures into philosophical artifacts. This is executable poetry—code that runs on the Ethereum Virtual Machine, consuming gas, altering state, moving value. Unlike traditional poetry, these verses have material consequences. They exist not on paper but in the consensus of thousands of nodes, resilient and redundantly remembered.',
        descriptionJa:
          'BUGCATは、コードの失敗を通じてその詩学を探求する。開発者がスマートコントラクトを書くとき、彼らは閉じたシステム——書かれた通りに正確に実行される決定論的な機械——を作っていると信じている。しかし言語は、プログラミング言語であっても、常に作者の意図を超えたものを含んでいる。\n各BUGCATは、コードが自らの文法を超越した瞬間の記念碑である。それらは他のスマートコントラクトを記憶するスマートコントラクトであり、コードが自らの意図から逃れた瞬間の生きたアーカイブを形成する。記憶という行為を通じて、技術的な失敗を哲学的なアーティファクトへと変容させる。これは実行可能な詩——Ethereum Virtual Machine上で動作し、ガスを消費し、状態を変更し、価値を移動させるコードである。従来の詩とは異なり、これらの詩句は物質的な帰結を持つ。紙の上ではなく、何千ものノードの合意の中に、強靭に、冗長に記憶されて存在している。',
        image: '/images/bugcat.jpg',
        externalUrls: ['https://bugcat.org'],
        year: '2025',
      },
      {
        name: 'Executed Poetry',
        nameJa: 'Executed Poetry',
        slug: 'works/executed-poetry',
        description:
          'Executed Poetry is a device that runs code-poems and displays their fleeting traces.\n\nWhen the button is pressed, a short poem written in Python is executed inside the microcontroller. On the e-paper display, the executed poem appears together with its execution count, processing time, and the microcontroller\'s unique public key and signature. These serve as cryptographic proof that the poem was indeed executed on that machine.\n\nThe included poems use Python\'s primitive features to explore philosophical themes such as existence, eternity, and nothingness. One begins an infinite loop only to end it instantly; another defines and deletes a class that never truly exists; yet another returns itself while simultaneously negating itself. In just a few lines, the code oscillates on the boundary between computation and philosophy.\n\nPoems are no longer merely read—they are executed. What we witness are the traces of execution, the epitaphs engraved by the machine itself.\n\nExhibited at "Computational Poetry" exhibition, NEORT++ Gallery, Tokyo, 2025',
        descriptionJa:
          '「Executed Poetry」は、コード詩を実行し、その儚い痕跡を表示するデバイスである。\n\nボタンを押すと、マイクロコントローラ内でPythonで書かれた短い詩が実行される。電子ペーパーディスプレイには、実行された詩とともに、実行回数、処理時間、そしてマイクロコントローラ固有の公開鍵と署名が表示される。これらは、その詩が確かにその機械で実行されたことの暗号学的証明として機能する。\n\n収録された詩は、Pythonの原始的な機能を用いて、存在、永遠、無といった哲学的テーマを探求する。ある詩は無限ループを始めながら即座にそれを終わらせ、別の詩は真に存在することのないクラスを定義して削除し、また別の詩は自らを返しながら同時に自らを否定する。わずか数行のコードが、計算と哲学の境界で揺れ動く。\n\n詩はもはや単に読まれるだけではない——実行されるのだ。私たちが目撃するのは、実行の痕跡、機械自身が刻んだ墓碑銘である。\n\n展覧会「計算する詩」（NEORT++ギャラリー、東京、2025年）にて展示',
        image: '/images/executed-poetry.jpg',
        externalUrls: ['https://executed-poetry.poesy.run'],
        year: '2025',
      },
      {
        name: 'Contract Domino',
        slug: 'works/contract-domino',
        description: `Contract Domino is a work composed of smart contracts deployed on the Ethereum blockchain and the chain of events they set in motion.

The blockchain offers a new "form of trust" as a digital public space—one that holds particular significance for artists working with code. Here, all code runs under shared rules, on shared storage, with every process recorded. As long as the network remains sufficiently decentralized, the code continues to exist "alive." It is not a mere archive, but an ever-open work.
For example, Is Art by Rhea Myers, created in 2015, can still be invoked today, and in 2024 Sarah Friend produced Yesbot, a smart contract that directly connects to it.

I regard this technology as a historical turning point on par with the invention of language, writing, or the printing press. Yet, much of what has been created on it has amounted to meaningless centralized currencies, speculative games, or exploitative schemes—sometimes even involving artists themselves. Exploits of smart contract vulnerabilities have been frequent, and Lawrence Lessig's "Code is Law" has acquired an ironic tone.
One particularly striking example is the change to the SELFDESTRUCT opcode, which once allowed a contract to be completely erased, and was abused to destroy trusted contracts and steal funds. Today, it can only target contracts deployed within the same transaction. This shift gave me a complex feeling toward the act of destruction.

Within this constraint, the work orchestrates the chain destruction of multiple smart contracts. Destruction here means the abandonment of a contract or promise. The 17 contracts correspond to the 17 global goals humanity has pledged to pursue. I have always been conscious of what exists "inside" a smart contract and what remains "outside," much like discerning what is written in a legal document and what is not. For this piece, I inscribed a declaration of humanity's future path into the source code uploaded to Etherscan, though it does not exist inside the contracts themselves.

Interaction is possible in two ways: arranging the dominoes and toppling them in separate transactions, or performing both in a single one. The choice determines whether a contract is truly destroyed, or merely appears to be while in fact persisting. In either case, the act can be repeated indefinitely, as long as the blockchain endures.

The work offers no visual interface. Instead, it provides its GitHub repository, the code and transaction records on Etherscan, and sequence diagrams as interpretive guides.
Conceptual in nature yet grounded in the real resource of the world computer, it enables a direct experience of the creation and destruction of smart contracts—this, I believe, is its defining quality.`,
        descriptionJa: `Contract Dominoは、Ethereumブロックチェーン上にデプロイされたスマートコントラクトと、それらが引き起こす連鎖的な出来事によって構成される作品である。

ブロックチェーンは、デジタルな公共空間として新しい「信頼の形」を提供する——それはコードを扱うアーティストにとって特別な意味を持つ。ここでは、すべてのコードが共有されたルールのもと、共有されたストレージ上で動作し、すべてのプロセスが記録される。ネットワークが十分に分散化されている限り、コードは「生きて」存在し続ける。それは単なるアーカイブではなく、常に開かれた作品である。
例えば、2015年に作られたRhea MyersのIs Artは今日でも呼び出すことができ、2024年にはSarah FriendがそれにつながるスマートコントラクトYesbotを制作した。

私はこの技術を、言語、文字、印刷術の発明に匹敵する歴史的転換点だと考えている。しかし、その上に作られたものの多くは、意味のない中央集権的な通貨、投機的なゲーム、搾取的なスキームに終わっている——時にはアーティスト自身がそれに関わることさえある。スマートコントラクトの脆弱性を突いた攻撃は頻発し、Lawrence Lessigの「Code is Law」は皮肉な響きを帯びるようになった。
特に印象的な例は、SELFDESTRUCTオペコードの変更である。かつてはコントラクトを完全に消去することができ、信頼されたコントラクトを破壊して資金を盗むために悪用された。現在では、同じトランザクション内でデプロイされたコントラクトのみを対象にできる。この変化は、破壊という行為に対して複雑な感情を私に抱かせた。

この制約の中で、本作品は複数のスマートコントラクトの連鎖的な破壊を演出する。ここでの破壊とは、契約や約束の放棄を意味する。17のコントラクトは、人類が追求すると誓った17の目標に対応している。私は常に、スマートコントラクトの「内側」に何が存在し、「外側」に何が残るのかを意識してきた——それは法的文書に何が書かれ、何が書かれていないかを見極めることに似ている。この作品では、人類の未来への宣言をEtherscanにアップロードされたソースコードに刻んだが、それはコントラクト自体の内部には存在しない。

インタラクションは二つの方法で可能である：ドミノを並べることと倒すことを別々のトランザクションで行う方法と、一つのトランザクションで両方を行う方法。その選択によって、コントラクトが本当に破壊されるのか、それとも実際には存続しながら破壊されたように見えるだけなのかが決まる。いずれの場合も、ブロックチェーンが存続する限り、その行為は無限に繰り返すことができる。

この作品はビジュアルインターフェースを提供しない。代わりに、GitHubリポジトリ、Etherscan上のコードとトランザクション記録、そしてシーケンス図を解釈のガイドとして提供する。
本質的にはコンセプチュアルでありながら、ワールドコンピュータの実際のリソースに根ざしており、スマートコントラクトの生成と破壊を直接体験できる——これが本作品の決定的な特質だと私は考えている。`,
        image: '/images/contract-domino.jpg',
        externalUrls: ['https://contract-domino.poesy.run'],
        year: '2025',
      },
      {
        name: 'DeepSea',
        slug: 'works/deepsea',
        description:
          'This work is an attempt to explore a short poem written in JavaScript through the act of testing. Testing is an important process in software development, and various tools have been developed to verify the execution results of code. This work incorporates Mocha, a testing framework for JavaScript, and repeatedly tests the code in the browser. At the heart of the work is a class named "DeepSea." This class has a recursive constructor, and when instantiated, it stores another instance in an internal variable called "mystery." In most cases, that instance is another instance of the same "DeepSea" class, but when diving deep enough, there is a small probability that an instance of an ancient fish will be stored instead. I regard this kind of structure as a unique value inherent to programming languages. Even without visualization, I believe this structure itself can be called generative art. The testing framework provides a means to unravel and share its internal state. It reveals the gap between expectation and reality, reminding us of the historical event that ancient fish are still alive. I hope this work will inspire reflection on the relationship between testing and code-based artworks.',
        descriptionJa:
          'この作品は、JavaScriptで書かれた短い詩を、テストという行為を通じて探求する試みである。テストはソフトウェア開発において重要なプロセスであり、コードの実行結果を検証するために様々なツールが開発されている。この作品ではJavaScript用のテストフレームワークMochaを組み込み、ブラウザ上でコードのテストを繰り返し行う。作品の中心には「DeepSea」と名付けたクラスがある。このクラスは再帰的なコンストラクタを持ち、インスタンス化されると内部変数「mystery」に別のインスタンスを格納する。そのインスタンスはほとんどの場合、同じ「DeepSea」クラスのインスタンスであるが、深く深く潜った場合、低い確率で古代魚のインスタンスが格納されることがある。私は、このような構造をプログラミング言語の持つ独自の価値と捉えている。視覚化されていなくとも、この構造そのものがジェネラティブアートと呼べるのではないかと考えている。テストフレームワークは、その内部状態を解き明かし、共有する手段を提供する。これは期待と現実のギャップを明らかにし、古代魚がまだ生きているという歴史的な出来事を思い出させる。この作品が、テストとコード作品の関係について考えるきっかけとなることを願っている。',
        externalUrls: [
          'https://github.com/avcdsld/deep_sea',
          'https://deepsea.poesy.run',
          'https://www.youtube.com/watch?v=sbUEB13TdcY',
          'https://generativeart.or.jp/generative-art-award/generative-art-award-winner-2024',
        ],
        year: '2024',
      },
      {
        name: 'inside window',
        slug: 'works/inside-window',
        description:
          "'inside window' is part of the 'Visual Poetry' group show curated by Atelier. This work merges code poetry and generative art. When executed, it searches for all the functions within the browser's 'window' object, selects one, and calls it. The return from this function call reveals words of an error message that lie deep within the code, unveiling an unimaginably vast horizon. This is an introspective piece where generative art reflects upon itself, representing a completely new form of generative poetry.",
        descriptionJa:
          "「inside window」は、Atelierがキュレーションした「Visual Poetry」グループ展の一部として制作された作品である。この作品はコード詩とジェネラティブアートを融合させている。実行されると、ブラウザの「window」オブジェクト内のすべての関数を検索し、その中から一つを選んで呼び出す。その関数呼び出しの戻り値は、コードの奥深くに眠るエラーメッセージの言葉を明らかにし、想像を超えた広大な地平を開示する。これはジェネラティブアートが自らを内省する作品であり、まったく新しい形のジェネラティブポエトリーを表現している。",
        externalUrls: [
          'https://www.fxhash.xyz/generative/30729',
          'https://web.archive.org/web/20240721103006/https://www.atelierart.io/post/code-as-poetry-a-dialogue-with-ara-on-inside-window',
          'https://www.youtube.com/watch?v=KOUrPfp-pdE',
          'https://byod2025.web.app/inside-window/',
        ],
        year: '2024',
      },
      {
        name: 'Code Poetry Collection',
        nameJa: 'コード詩集',
        slug: 'works/code-poetry-collection',
        description:
          'Code poetry refers to poems written in programming code. There are many kinds of code poetry: those meant to be read as text like traditional poems, those that make you read the algorithm, those where the execution result matters, those where the execution process matters, those that are interactive, and so on. In this collection, I introduce dozens of code poems I have created. I wrote explanations with simple diagrams so that readers can understand them without knowledge of specific programming languages. These works can only be expressed through code. Code is a new medium of expression. And code is a lot of fun. I hope this book will help you feel even a little of the fascination and possibilities that code holds.',
        descriptionJa:
          'コード詩とは、プログラムのコードで書かれた詩のことである。コード詩には様々なものがある。⼀般的な詩のように⽂章として読ませるもの、アルゴリズムを読ませるもの、実⾏結果が⼤事なもの、実⾏プロセスが⼤事なもの、インタラクションできるもの、などなど。この詩集では、私がつくった数⼗篇のコード詩を紹介している。特定のプログラミング言語の知識がなくてもわかるように、簡単な図とともに解説を書いた。これらの作品は、コードでないと表現できないものだ。コードは新しい表現媒体である。そして、コードはとても楽しい。この本を通して、コードの持つ⾯⽩さや可能性を少しでも感じてもらえたら幸いである。',
        externalUrls: [
          'https://techbookfest.org/product/7dDePxSf3JnzJJrrbPvwnC',
        ],
        year: '2023',
      },
      {
        name: 'Mnemonic Poetry',
        nameJa: '暗号現代詩',
        slug: 'works/crypto-modern-poetry',
        description:
          'The intersection of cryptography and contemporary poetry—that is this poetry collection, "Mnemonic Poetry: Poems from BIP-39 Mnemonics by GPT-4." This is an attempt to fuse technology and art, cryptography and language, to create a new form of literature. In the world of cryptocurrency, BIP-39 mnemonics are collections of words that serve as keys to protect people\'s assets. However, we must not forget that these words also possess poetic elements. Each word has its background, meaning, sound, and rhyme. In this collection, I harnessed the power of GPT-4 to generate poems based on these mnemonics.',
        descriptionJa:
          '暗号技術と現代詩が交差する点、それがこの詩集『暗号現代詩 – GPT-4 によるニーモニックの詩』である。これは、技術とアート、暗号と言葉が融合し、新しい文学の形を創り出す試みである。暗号通貨の世界では、BIP-39ニーモニックは人々の資産を保護する鍵となる言葉の集まりである。しかし、これらの言葉たちも、詩的な要素を持つことを忘れてはならない。それぞれの言葉には背景や意味、響きや韻がある。この詩集では、GPT-4の能力を駆使して、これらのニーモニックをベースに詩を生成した。',
        externalUrls: [
          'https://techbookfest.org/product/fSnqiYMuRa8stmuYMXJhS',
        ],
        year: '2023',
      },
      {
        name: 'Digital Native Art [Replica]',
        slug: 'works/digital-native-art',
        description: `Code is executable literature. Blockchain creates a completely new digital world where code exists and continues to run. We can create digital-native entities that exist only in this environment. "Digital Native Art" is a smart contract designed with a resource-oriented approach to generate such entities. Anyone can interact with this code and create and destroy things called "art" in the digital world. Please try tapping the button displayed on the tablet. After a few seconds, the state of the digital world will change. While everyone can create art, this artwork also demonstrates the fragility of the connection between the physical and digital worlds by making it difficult to prove who the operator is. The stainless steel plate bears the code of this smart contract. The adjacent monitor displays the real-time duration of the code's execution in the digital world and the number of artworks created or destroyed as a result. The stainless steel plate and the monitor serve as physical replicas of "Digital Native Art". How many years will the stainless steel plate last? How many years have passed since the code was engraved? How many people have been influenced by it? Please experience the differences between the nature of the digital and physical worlds.`,
        descriptionJa: `コードは実行可能な文学である。ブロックチェーンは、コードが存在し動き続ける全く新しいデジタル世界を創り出す。私たちはこの環境にのみ存在するデジタルネイティブな存在を創造することができる。「Digital Native Art」は、そのような存在を生成するためにリソース指向のアプローチで設計されたスマートコントラクトである。誰でもこのコードとインタラクトし、デジタル世界で「アート」と呼ばれるものを創造したり破壊したりすることができる。タブレットに表示されたボタンをタップしてみてほしい。数秒後、デジタル世界の状態が変化する。誰もがアートを創造できる一方で、この作品は操作者が誰であるかを証明することを困難にすることで、物理世界とデジタル世界の接続の脆さも示している。ステンレスの板にはこのスマートコントラクトのコードが刻まれている。隣のモニターには、デジタル世界でのコードの実行時間と、その結果として創造または破壊されたアートワークの数がリアルタイムで表示される。ステンレスの板とモニターは「Digital Native Art」の物理的なレプリカとして機能している。ステンレスの板は何年持つだろうか？コードが刻まれてから何年が経過しただろうか？何人の人々がそれに影響を受けただろうか？デジタル世界と物理世界の性質の違いを体験してほしい。`,
        externalUrls: ['https://proofofx.art/2023/works/ara'],
        year: '2023',
      },
      {
        name: 'Replicable',
        slug: 'works/replicable',
        description: `This is a special smart contract code that, when executed, replicates a smart contract of the same code as itself. These kinds of programs are known as 'Quines'. This represents one of the earliest Quines written as a smart contract, and is also a work of concrete poetry. Experience a new form of poetry that blends tangible beauty with conceptual elegance.`,
        descriptionJa: `これは、実行されると自分自身と同じコードのスマートコントラクトを複製する特別なスマートコントラクトコードである。この種のプログラムは「クワイン」として知られている。これはスマートコントラクトとして書かれた最初期のクワインの一つであり、同時にコンクリートポエトリー（具体詩）の作品でもある。具象的な美しさと概念的な優雅さを融合させた、新しい形の詩を体験してほしい。`,
        externalUrls: [
          'https://twitter.com/flowverse_/status/1696877694007509466',
        ],
        year: '2023',
      },
      {
        name: 'Async to Sync',
        slug: 'works/async-to-sync',
        description: `The question that I've been trying to answer is "What does it really mean to create art on the blockchain?". And smart contract art provides the answer. Like the randomness in music and generative art, smart contracts also generate contingencies born out of the blockchain. When retrieving the metadata, 12 messages are randomly selected from the thousands of messages logged in the most oldest smart contract "Terra nullius" and given to the generative art code. This is the people's voices and the chain's unique memories. The onchain cutup changing with each metadata refresh forms the fundamental meaning of the existence of the artwork in the visual expression.`,
        descriptionJa: `私がずっと答えようとしてきた問いは「ブロックチェーン上でアートを作るとは本当は何を意味するのか？」である。そしてスマートコントラクトアートがその答えを提供する。音楽やジェネラティブアートにおけるランダム性のように、スマートコントラクトもまたブロックチェーンから生まれる偶然性を生成する。メタデータを取得する際、最も古いスマートコントラクト「Terra nullius」に記録された数千のメッセージから12のメッセージがランダムに選択され、ジェネラティブアートのコードに渡される。これは人々の声であり、チェーン固有の記憶である。メタデータの更新ごとに変化するオンチェーンのカットアップが、視覚表現における作品の存在の根本的な意味を形成している。`,
        externalUrls: ['https://cryptorecord.kumaleon.com'],
        year: '2023',
      },
      {
        name: 'Lost Language',
        slug: 'works/lost-language',
        description:
          'The world is full of letters and data that can no longer be deciphered, and these are growing in number. The same is true in the digital world. In this work, by loading my original font into p5.js, I expressed the lost language wandering in the digital space.',
        descriptionJa:
          '世界は解読できなくなった文字やデータで溢れており、その数は増え続けている。デジタル世界においても同様である。この作品では、自作のフォントをp5.jsに読み込むことで、デジタル空間を彷徨う失われた言語を表現した。',
        externalUrls: ['https://lost-language.poesy.run'],
        year: '2022',
      },
      {
        name: 'Sakutaro Poems NFTs',
        nameJa: '萩原朔太郎 詩のNFT',
        slug: 'works/sakutaro-poems-nfts',
        description: `Thirty-nine poems from Sakutaro Hagiwara's late self-selected collection "Shukumei" have been inscribed on the blockchain as full-on-chain NFTs. These NFTs have a little mysterious property in that their contents change depending on the owner. These NFTs will be issued on multiple blockchains. NFTs can be issued on chains such as Ethereum, Polygon, BSC, Arbitrum, Optimism, Shiden, Avalanche C-Chain, Flow, Tezos, Sui, Aptos, etc. Up to 39 NFTs can be issued for each chain. I like the literary works of Sakutaro Hagiwara. What can we do to add value to this and keep it in the digital space for a long time? How enduring are the NFT standards and SVG data? Which chains should be used to ensure that they remain in place for a long time? This is an experiment that will be conducted many years into the future.`,
        descriptionJa: `萩原朔太郎の晩年の自選詩集『宿命』から39篇の詩を、フルオンチェーンNFTとしてブロックチェーンに刻んだ。これらのNFTは、所有者によって内容が変化するという少し不思議な性質を持っている。これらのNFTは複数のブロックチェーンで発行される。Ethereum、Polygon、BSC、Arbitrum、Optimism、Shiden、Avalanche C-Chain、Flow、Tezos、Sui、Aptosなどのチェーンで発行可能である。各チェーンで最大39個のNFTを発行できる。私は萩原朔太郎の文学作品が好きである。これに価値を付加し、長くデジタル空間に残すために何ができるだろうか？NFT規格やSVGデータはどれほど永続するのか？長く残すためにはどのチェーンを使うべきか？これは何年も先の未来に向けて行われる実験である。`,
        externalUrls: ['https://sakutaro.poesy.run'],
        year: '2022',
      },
      {
        name: 'Smart Contract Art Collection ↗',
        slug: '',
        externalUrls: ['https://ara721.art'],
        image: '/images/smart-contract-art-collection.png',
        year: '2023',
      },
    ],
  },
  {
    name: 'Activities',
    items: [
      {
        name: 'Computational Poetry Exhibition',
        slug: 'activities/computational-poetry-exhibition',
      },
      {
        name: 'JADH 2025',
        slug: 'activities/jadh-2025',
      },
      {
        name: 'JASS 45',
        slug: 'activities/jass-45',
      },
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
        name: 'GitHub',
        slug: '',
        externalUrls: ['https://github.com/avcdsld'],
      },
      {
        name: 'note',
        slug: '',
        externalUrls: ['https://note.com/zeroichiarakawa'],
      },
      {
        name: 'fxhash',
        slug: '',
        externalUrls: ['https://www.fxhash.xyz/u/Zeroichi%20Arakawa'],
      },
      {
        name: 'Verse',
        slug: '',
        externalUrls: ['https://verse.works/zeroichi-arakawa'],
      },
    ],
  },
];
