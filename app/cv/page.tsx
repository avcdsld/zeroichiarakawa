import { notoSerifJP } from '#/font/font';

export default function Page() {
  const lastUpdated = new Date('2026-01-09');

  return (
    <div
      className={`${notoSerifJP.className} max-w-none text-gray-200 space-y-8 text-sm leading-relaxed`}
    >
      {/* English Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Zeroichi Arakawa (Ara)</h1>
          <p className="text-sm text-gray-400">
            code poet, smart contract engineer
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Bio</h2>
          <p className="text-sm leading-relaxed">
            Zeroichi Arakawa explores program code as a medium that is{' '}
            <em>read, tested, and executed</em>. His practice examines the
            literary and structural beauty of code while foregrounding the
            experiences—and tensions—produced through verification and runtime
            environments. He is currently pursuing a PhD at the Institute of
            Advanced Media Arts and Sciences (IAMAS), Japan.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Selected Works</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <strong>BUGCAT</strong> — Smart-contract sculptures embodying
              historic vulnerabilities.
            </li>
            <li>
              <strong>Executed Poetry</strong> — Poems that run on physical
              devices; execution as inscription and display.
            </li>
            <li>
              <strong>CodeTEI</strong> — A TEI extension and PoC system for
              archiving executable poetry.
            </li>
            <li>
              <strong>DeepSea</strong> — A code-poem that explores a system&apos;s
              internal states through testing frameworks.
            </li>
            <li>
              <strong>inside window</strong> — Excavating poetic spaces hidden
              within the browser runtime environment.
            </li>
            <li>
              <strong>Lost Language</strong> — A generative work expressing
              undecipherable language wandering in digital space.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Selected Exhibitions</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2025.09</span> —{' '}
        <a
          href="https://two.neort.io/ja/exhibitions/computational_poetry"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                Computational Poetry Exhibition
              </a>{' '}
              (NEORT++, Tokyo, Japan) — [BUGCAT] [Executed Poetry] [CodeTEI]
            </li>
            <li>
              <span className="text-gray-400">2025.02</span> —{' '}
              <a
                href="https://byod.neort.io/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                BYOD² (Bring Your Own Data & Display)
              </a>{' '}
              (MIYASHITA PARK, Tokyo, Japan) — [Lost Language] [inside window]{' '}
              [DeepSea]
            </li>
            <li>
              <span className="text-gray-400">2024.11</span> —{' '}
        <a
          href="https://www.ycam.jp/events/2024/exhibition-of-award-winning-works/"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          1st Japan Generative Art Award Exhibition
              </a>{' '}
              (YCAM, Yamaguchi, Japan) — [DeepSea]
            </li>
            <li>
              <span className="text-gray-400">2024.04</span> —{' '}
        <a
          href="https://www.fxhash.xyz/generative/30729"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                Visual Poetry
              </a>{' '}
              (curated by Atelier, fxhash, Online) — [inside window]
            </li>
            <li>
              <span className="text-gray-400">2024.01</span> —{' '}
              <a
                href="https://proofofx.art/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                DIG SHIBUYA – Proof of X: Decoding PFP Culture
        </a>{' '}
              (GALLERY X BY PARCO, Tokyo, Japan) — [Async to Sync]
            </li>
            <li>
              <span className="text-gray-400">2023.09</span> —{' '}
        <a
          href="https://www.artstageosaka.com/artists"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
                art stage OSAKA 2023 – Proof of X
        </a>{' '}
              (Grand Cube Osaka, Osaka, Japan) — [Digital Native Art]
            </li>
            <li>
              <span className="text-gray-400">2023.06</span> —{' '}
              <a
                href="https://proofofx.art/2023"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
          Proof of X 2023
        </a>{' '}
              (THE FACE DAIKANYAMA, Tokyo, Japan) — [Digital Native Art]
            </li>
            <li>
              <span className="text-gray-400">2022.09</span> —{' '}
        <a
          href="https://cryptoart.tokyo/cawatokyo2022/"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          Crypto Art Week Asia Tokyo 2022
        </a>{' '}
              (DMM Azabu Satellite, Tokyo, Japan) — [Lost Language]
            </li>
            <li>
              <span className="text-gray-400">2022.07</span> —{' '}
        <a
          href="https://conata.world/caf/2022"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          Crypto Art Fes 2022
        </a>{' '}
              (Shibuya Space Edge, Tokyo, Japan) — [Sakutaro Poems NFTs]
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">
            Conference Presentations
          </h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2025.09</span> — The 14th
              Conference of the Japanese Association for Digital Humanities
              (JADH 2025): &ldquo;CodeTEI: A TEI Extension and PoC System for
              Executable Poetry&rdquo;
            </li>
            <li>
              <span className="text-gray-400">2025.07</span> — The 45th Annual
              Conference of the Japan Society of Semiotics: &ldquo;Applying
              Peircean Semiotics to Code Poetry: Semiotic Transposition and
              Sign Classification&rdquo;
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Publications (Books)</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2023.11</span> —{' '}
              <a
                href="/works/code-poetry-collection"
                className="text-gray-200 hover:text-white underline"
              >
                Code Poetry Collection
              </a>{' '}
              (self-published, Tech Book Fest)
            </li>
            <li>
              <span className="text-gray-400">2023.11</span> —{' '}
              <a
                href="/works/crypto-modern-poetry"
                className="text-gray-200 hover:text-white underline"
              >
                Modern Cryptopoetry — Mnemonic Poems by GPT-4
              </a>{' '}
              (self-published, Tech Book Fest)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Awards</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2024.09</span> — 1st Japan
              Generative Art Award — Selected Work
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">
            Education & Professional Experience
          </h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2024.04–present</span> — PhD
              Program, IAMAS (Institute of Advanced Media Arts and Sciences),
              Japan
            </li>
            <li>
              <span className="text-gray-400">2021.08–present</span> —
              Blockchain Engineer, Mercari, Inc. / Mercoin, Inc.
            </li>
            <li>
              <span className="text-gray-400">2019.05–2021.08</span> —
              Blockchain Engineer, Metaps Inc.
            </li>
            <li>
              <span className="text-gray-400">2013.04–2019.05</span> — Software
              Developer, Fuji Xerox Co., Ltd.
            </li>
            <li>
              <span className="text-gray-400">2011.04–2013.03</span> — M.S.,
              Biological Sciences, Osaka University
            </li>
            <li>
              <span className="text-gray-400">2009.04–2011.03</span> — B.CS.,
              Kyushu Institute of Technology
            </li>
            <li>
              <span className="text-gray-400">2004.04–2009.04</span> — National
              Institute of Technology, Kagoshima College
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 pt-4 border-t border-gray-700">
        Last updated:{' '}
        {lastUpdated.toLocaleDateString('en-US', {
          year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
          <br />
          <a
            href="https://zeroichiarakawa.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            zeroichiarakawa.com
          </a>{' '}
          / Email:{' '}
          <a
            href="mailto:codeartstudies@gmail.com"
            className="text-gray-400 hover:text-gray-200"
          >
            codeartstudies@gmail.com
          </a>{' '}
          / GitHub:{' '}
          <a
            href="https://github.com/avcdsld"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            @avcdsld
          </a>{' '}
          / X:{' '}
          <a
            href="https://x.com/arandoros"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            @arandoros
          </a>
        </p>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Japanese Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">荒川零一（Zeroichi Arakawa / Ara）</h1>
          <p className="text-sm text-gray-400">
            コード詩人／スマートコントラクトエンジニア
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">略歴</h2>
          <p className="text-sm leading-relaxed">
            プログラムコードを「読まれ、テストされ、実行される」媒体として捉え、その文学的・構造的な美しさと、検証や実行環境が生む経験を主題に探索と実験を続けている。情報科学芸術大学院大学（IAMAS）博士後期課程在籍。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">主要作品</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <strong>《BUGCAT》</strong> — 歴史的脆弱性を宿すスマートコントラクト彫刻。
            </li>
            <li>
              <strong>《Executed Poetry》</strong> — 物理デバイス上で実行される詩。実行が刻印と表示となる。
            </li>
            <li>
              <strong>《CodeTEI》</strong> — 実行可能な詩のためのTEI拡張とPoCシステム。
            </li>
            <li>
              <strong>《DeepSea》</strong> — テストフレームワークを通じてシステムの内部状態を探求するコード詩。
            </li>
            <li>
              <strong>《inside window》</strong> — ブラウザ実行環境に潜む詩的空間の発掘。
            </li>
            <li>
              <strong>《Lost Language》</strong> — デジタル空間を彷徨う解読不能な言語を表現した生成作品。
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">主な展覧会</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2025.09</span> —{' '}
        <a
          href="https://two.neort.io/ja/exhibitions/computational_poetry"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          展覧会「計算する詩 / Computational Poetry」
              </a>{' '}
              （NEORT++, 東京） [BUGCAT][Executed Poetry][CodeTEI]
            </li>
            <li>
              <span className="text-gray-400">2025.02</span> —{' '}
              <a
                href="https://byod.neort.io/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                BYOD²
              </a>{' '}
              （MIYASHITA PARK, 東京） [Lost Language][inside window][DeepSea]
            </li>
            <li>
              <span className="text-gray-400">2024.11</span> —{' '}
        <a
          href="https://www.ycam.jp/events/2024/exhibition-of-award-winning-works/"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          第一回ジェネラティブアート・アワード受賞作品展
              </a>{' '}
              （YCAM, 山口） [DeepSea]
            </li>
            <li>
              <span className="text-gray-400">2024.04</span> —{' '}
        <a
          href="https://www.fxhash.xyz/generative/30729"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                Visual Poetry
              </a>{' '}
              （fxhash, オンライン／curated by Atelier） [inside window]
            </li>
            <li>
              <span className="text-gray-400">2024.01</span> —{' '}
              <a
                href="https://proofofx.art/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
                DIG SHIBUYA – Proof of X
              </a>{' '}
              （PARCO, 東京） [Async to Sync]
            </li>
            <li>
              <span className="text-gray-400">2023.09</span> —{' '}
        <a
          href="https://www.artstageosaka.com/artists"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
                art stage OSAKA 2023 – Proof of X
              </a>{' '}
        （グランキューブ大阪, 大阪） [Digital Native Art]
            </li>
            <li>
              <span className="text-gray-400">2023.06</span> —{' '}
              <a
                href="https://proofofx.art/2023"
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
              >
          Proof of X 2023
              </a>{' '}
        （THE FACE DAIKANYAMA, 東京） [Digital Native Art]
            </li>
            <li>
              <span className="text-gray-400">2022.09</span> —{' '}
        <a
          href="https://cryptoart.tokyo/cawatokyo2022/"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          Crypto Art Week Asia Tokyo 2022
              </a>{' '}
        （DMM 麻布サテライト, 東京） [Lost Language]
            </li>
            <li>
              <span className="text-gray-400">2022.07</span> —{' '}
        <a
          href="https://conata.world/caf/2022"
          target="_blank"
          rel="noreferrer"
                className="text-gray-200 hover:text-white underline"
        >
          Crypto Art Fes 2022
              </a>{' '}
        （渋谷SPACE EDGE, 東京） [萩原朔太郎 詩のNFT]
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">学会発表</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2025.09</span> — JADH2025「CodeTEI: A TEI Extension and PoC System for Executable Poetry」
            </li>
            <li>
              <span className="text-gray-400">2025.07</span> — 日本記号学会第45回大会「コードポエトリーにおける記号転位とパース記号分類の応用」
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">著作</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2023.11</span> —{' '}
              <a
                href="/works/code-poetry-collection"
                className="text-gray-200 hover:text-white underline"
              >
                『コード詩集』
              </a>{' '}
              （自主出版、技術書典）
            </li>
            <li>
              <span className="text-gray-400">2023.11</span> —{' '}
              <a
                href="/works/crypto-modern-poetry"
                className="text-gray-200 hover:text-white underline"
              >
                『現代暗号詩 ― GPT-4 によるニーモニックの詩』
              </a>{' '}
              （自主出版、技術書典）
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">受賞</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2024.09</span> — 第一回ジェネラティブアート・アワード 入賞
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">学歴・職歴</h2>
          <ul className="space-y-2 text-sm list-none pl-0">
            <li>
              <span className="text-gray-400">2024.04–現在</span> — 情報科学芸術大学院大学（IAMAS）メディア表現研究科 博士後期課程
            </li>
            <li>
              <span className="text-gray-400">2021.08–現在</span> — 株式会社メルカリ/株式会社メルコイン ブロックチェーン・エンジニア
            </li>
            <li>
              <span className="text-gray-400">2019.05–2021.08</span> — 株式会社メタップス ブロックチェーン・エンジニア
            </li>
            <li>
              <span className="text-gray-400">2013.04–2019.05</span> — 富士ゼロックス株式会社 ソフトウェア開発者
            </li>
            <li>
              <span className="text-gray-400">2011.04–2013.03</span> — 大阪大学大学院 理学研究科生物科学専攻 修士（理学）
            </li>
            <li>
              <span className="text-gray-400">2009.04–2011.03</span> — 九州工業大学 情報工学部生命情報工学科 学士（情報工学）
            </li>
            <li>
              <span className="text-gray-400">2004.04–2009.04</span> — 鹿児島高専 情報工学科
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 pt-4 border-t border-gray-700">
          最終更新日: {lastUpdated.toLocaleDateString('ja-JP')}
        <br />
          <a
            href="https://zeroichiarakawa.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            zeroichiarakawa.com
          </a>{' '}
          / Email:{' '}
          <a
            href="mailto:codeartstudies@gmail.com"
            className="text-gray-400 hover:text-gray-200"
          >
            codeartstudies@gmail.com
          </a>{' '}
          / GitHub:{' '}
          <a
            href="https://github.com/avcdsld"
          target="_blank"
          rel="noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            @avcdsld
          </a>{' '}
          / X:{' '}
          <a
            href="https://x.com/arandoros"
          target="_blank"
          rel="noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            @arandoros
          </a>
        </p>
      </div>
    </div>
  );
}
