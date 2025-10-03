export default function Page() {
  const lastUpdated = new Date('2025-10-03');

  return (
    // <div className="text-gray-200 space-y-4">
    <div className="prose prose-sm prose-invert max-w-none text-gray-200">
      <h1 className="text-2xl font-bold">CV</h1>

      <h2 className="text-xl font-bold">荒川零一 Zeroichi Arakawa / Ara</h2>

      <p>
        Born in 1988. Smart contract engineer and code poet based in Japan. He
        continuously explore and experiment with the literary and structural
        beauty of program code, focusing on the theme of updating the senses
        created by digital data.
      </p>

      <h3 className="text-base font-normal">
        Education and Professional Experience
      </h3>
      <p>
        2024.4 ―　Institute of Advanced Media Arts and Sciences (IAMAS), Dept.
        of Media Creation, Doctoral Program
        <br />
        2021.8 ―　Mercari, Inc. / Mercoin, Inc. Blockchain Engineer
        <br />
        2019.5 ― 2021.8　Metaps Inc. Blockchain Engineer
        <br />
        2013.4 ― 2019.5　Fuji Xerox Co., Ltd. Software Developer
        <br />
        2011.4 ― 2013.3　Osaka Univ., Grad. School of Science, Dept. of
        Biological Sciences / Master of Science
        <br />
        2009.4 ― 2011.3　Kyutech, School of CS & Systems Eng., Dept. of Biosci.
        and Bioinf. / Bachelor of Computer Science
        <br />
        2004.4 ― 2009.4　National Institute of Technology, Kagoshima College,
        Dept. of Inf. Eng.
        <br />
      </p>

      <h3 className="text-base font-normal">Exhibitions</h3>
      <p>
        2025.9　
        <a
          href="https://two.neort.io/ja/exhibitions/computational_poetry"
          target="_blank"
          rel="noreferrer"
        >
          &ldquo;Computational Poetry&rdquo; Exhibition
        </a>
        （NEORT++, Tokyo） [BUGCAT] [Executed Poetry] [CodeTEI]
        <br />
        2024.11　
        <a
          href="https://www.ycam.jp/events/2024/exhibition-of-award-winning-works/"
          target="_blank"
          rel="noreferrer"
        >
          1st Japan Generative Art Award Exhibition
        </a>
        （Yamaguchi Center for Arts and Media [YCAM]） [DeepSea]
        <br />
        2024.4　
        <a
          href="https://www.fxhash.xyz/generative/30729"
          target="_blank"
          rel="noreferrer"
        >
          ‘Visual Poetry’ group show curated by Atelier
        </a>
        （fxhash, Online） [inside window]
        <br />
        2024.1　
        <a href="https://proofofx.art/" target="_blank" rel="noreferrer">
          DIG SHIBUYA - Proof of X: Decoding PFP Culture
        </a>{' '}
        (GALLERY X BY PARCO, Tokyo) [Async to Sync]
        <br />
        2023.9　
        <a
          href="https://www.artstageosaka.com/artists"
          target="_blank"
          rel="noreferrer"
        >
          art stage OSAKA 2023 - Proof of X
        </a>{' '}
        (Grand Cube Osaka, Osaka) [Digital Native Art]
        <br />
        2023.6　
        <a href="https://proofofx.art/2023" target="_blank" rel="noreferrer">
          Proof of X 2023
        </a>{' '}
        (THE FACE DAIKANYAMA, Tokyo) [Digital Native Art]
        <br />
        2022.9　
        <a
          href="https://cryptoart.tokyo/cawatokyo2022/"
          target="_blank"
          rel="noreferrer"
        >
          Crypto Art Week Asia Tokyo 2022
        </a>{' '}
        (DMM Azabu Satellite, Tokyo) [Lost Language]
        <br />
        2022.7　
        <a
          href="https://conata.world/caf/2022"
          target="_blank"
          rel="noreferrer"
        >
          Crypto Art Fes 2022
        </a>{' '}
        (Shibuya Space Edge, Tokyo) [Sakutaro Poems NFTs]
        <br />
      </p>

      <h3 className="text-base font-normal">Conference Presentations</h3>
      <p>
        2025.9　
        <a
          href="https://jadh2025.hmt.osaka-u.ac.jp/program"
          target="_blank"
          rel="noreferrer"
        >
          The 14th Conference of Japanese Association for Digital Humanities
          (JADH2025)
        </a>
        　&ldquo;CodeTEI: A TEI Extension and PoC System for Executable
        Poetry&rdquo;
        <br />
        2025.7　
        <a
          href="https://www.jassweb.jp/?page_id=4814"
          target="_blank"
          rel="noreferrer"
        >
          日本記号学会第45回大会
        </a>
        &ldquo;コードポエトリーにおける記号転位とパース記号分類の応用&rdquo;
        <br />
      </p>

      <h3 className="text-base font-normal">Books</h3>
      <p>
        2024.09　&ldquo;<a href="/works/code-poetry-collection">コード詩集</a>
        &rdquo; (A collection of poems self-published at 技術書典 15)
        <br />
        2023.11　&ldquo;
        <a href="/works/crypto-modern-poetry">
          現代暗号詩 ― GPT-4 によるニーモニックの詩
        </a>
        &rdquo; (A collection of poems self-published at 技術書典 15)
        <br />
      </p>

      <h3 className="text-base font-normal">Award</h3>
      <p>
        2024.9　
        <a href="https://generativeart.or.jp/generative-art-award/generative-art-award-winner-2024">
          1st Japan Generative Art Award ― Selected Work
        </a>
        <br />
      </p>

      <p className="mt-8">
        Last updated:{' '}
        {lastUpdated.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>

      <hr />

      <p>
        1988年生まれ。スマートコントラクトエンジニア、コード詩人。
        プログラムのコードに文学的・構造的な美しさを見出し、デジタルデータがつくる感覚のアップデートをテーマに探索と実験を続けている。
      </p>

      <h3 className="text-base font-normal">学歴/職歴</h3>
      <p>
        2024.4 ―　情報科学芸術大学院大学（IAMAS）メディア表現研究科 博士後期課程
        <br />
        2021.8
        ―　株式会社メルカリ/株式会社メルコイン　ブロックチェーン・エンジニア
        <br />
        2019.5 ― 2021.8　株式会社メタップス　ブロックチェーン・エンジニア
        <br />
        2013.4 ― 2019.5　富士ゼロックス株式会社　ソフトウェア開発者
        <br />
        2011.4 ― 2013.3　大阪大学大学院 理学研究科生物科学専攻 / 修士（理学）
        <br />
        2009.4 ― 2011.3　九州工業大学 情報工学部生命情報工学科 /
        学士（情報工学）
        <br />
        2004.4 ― 2009.4　鹿児島高専 情報工学科
        <br />
      </p>

      <h3 className="text-base font-normal">展覧会</h3>
      <p>
        2025.9　
        <a
          href="https://two.neort.io/ja/exhibitions/computational_poetry"
          target="_blank"
          rel="noreferrer"
        >
          展覧会「計算する詩 / Computational Poetry」
        </a>
        （NEORT++, 東京） [BUGCAT] [Executed Poetry] [CodeTEI]
        <br />
        2024.11　
        <a
          href="https://www.ycam.jp/events/2024/exhibition-of-award-winning-works/"
          target="_blank"
          rel="noreferrer"
        >
          第一回ジェネラティブアート・アワード受賞作品展
        </a>
        （山口情報芸術センター [YCAM], 山口） [DeepSea]
        <br />
        2024.4　
        <a
          href="https://www.fxhash.xyz/generative/30729"
          target="_blank"
          rel="noreferrer"
        >
          ‘Visual Poetry’ グループ展 curated by Atelier
        </a>
        （fxhash, オンライン） [inside window]
        <br />
        2024.1　
        <a href="https://proofofx.art/2023" target="_blank" rel="noreferrer">
          DIG SHIBUYA - Proof of X: Decoding PFP Culture
        </a>
        （GALLERY X BY PARCO, 東京） [Async to Sync]
        <br />
        2023.9　
        <a
          href="https://www.artstageosaka.com/artists"
          target="_blank"
          rel="noreferrer"
        >
          art stage OSAKA 2023 - Proof of X
        </a>
        （グランキューブ大阪, 大阪） [Digital Native Art]
        <br />
        2023.6　
        <a href="https://proofofx.art/2023" target="_blank" rel="noreferrer">
          Proof of X 2023
        </a>
        （THE FACE DAIKANYAMA, 東京） [Digital Native Art]
        <br />
        2022.9　
        <a
          href="https://cryptoart.tokyo/cawatokyo2022/"
          target="_blank"
          rel="noreferrer"
        >
          Crypto Art Week Asia Tokyo 2022
        </a>
        （DMM 麻布サテライト, 東京） [Lost Language]
        <br />
        2022.7　
        <a
          href="https://conata.world/caf/2022"
          target="_blank"
          rel="noreferrer"
        >
          Crypto Art Fes 2022
        </a>
        （渋谷SPACE EDGE, 東京） [萩原朔太郎 詩のNFT]
        <br />
      </p>

      <h3 className="text-base font-normal">学会発表</h3>
      <p>
        2025.9　
        <a
          href="https://jadh2025.hmt.osaka-u.ac.jp/program"
          target="_blank"
          rel="noreferrer"
        >
          The 14th Conference of Japanese Association for Digital Humanities
          (JADH2025)
        </a>
        　「CodeTEI: A TEI Extension and PoC System for Executable Poetry」
        <br />
        2025.7　
        <a
          href="https://www.jassweb.jp/?page_id=4814"
          target="_blank"
          rel="noreferrer"
        >
          日本記号学会第45回大会
        </a>
        「コードポエトリーにおける記号転位とパース記号分類の応用」
        <br />
      </p>

      <h3 className="text-base font-normal">著作</h3>
      <p>
        2023.11　『<a href="/works/code-poetry-collection">コード詩集</a>
        』（技術書典 15 にて自主出版した詩集）
        <br />
        2023.11　『
        <a href="/works/crypto-modern-poetry">
          現代暗号詩 ― GPT-4 によるニーモニックの詩
        </a>
        』（技術書典 15 にて自主出版した詩集）
        <br />
      </p>

      <h3 className="text-base font-normal">受賞</h3>
      <p>
        2024.9　
        <a href="https://generativeart.or.jp/generative-art-award/generative-art-award-winner-2024">
          第一回ジェネラティブアート・アワード 入賞
        </a>
        <br />
      </p>

      <p className="mt-8">
        最終更新日: {lastUpdated.toLocaleDateString('ja-JP')}
      </p>
    </div>
  );
}
