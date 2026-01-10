'use client';

import { FadeLink } from '#/ui/fade-link';
import { useLanguage } from '#/lib/language-context';

export default function Page() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Back link */}
      <FadeLink
        href="/"
        className="fixed left-6 top-6 text-xs text-gray-500 transition-opacity hover:opacity-50 md:left-12 md:top-12"
      >
        {t('← back', '← 戻る')}
      </FadeLink>

      <div className="mx-auto max-w-2xl px-6 py-24 md:px-8">
        {/* Header */}
        <header className="mb-24">
          <h1 className="text-xl text-white">{t('Zeroichi Arakawa', '荒川 零一')}</h1>
          <p className="mt-2 text-sm text-gray-600">{t('code poet', 'コード詩人')}</p>
        </header>

        {/* Bio */}
        <Section title={t('Bio', '略歴')}>
          <p className="text-sm leading-loose text-gray-400">
            {t(
              'Zeroichi Arakawa explores program code as a medium that is read, tested, and executed. His practice examines the literary and structural beauty of code while foregrounding the experiences produced through verification and runtime environments.',
              'プログラムコードを「読まれ、テストされ、実行される」媒体として捉え、その文学的・構造的な美しさと、検証や実行環境が生む経験を主題に探索と実験を続けている。'
            )}
          </p>
          <p className="mt-4 text-sm leading-loose text-gray-400">
            {t('PhD candidate at IAMAS, Japan.', '情報科学芸術大学院大学（IAMAS）博士後期課程在籍。')}
          </p>
        </Section>

        {/* Selected Works */}
        <Section title={t('Selected Works', '主要作品')}>
          <WorkItem title="BUGCAT" href="/works/bugcat" desc={t('Smart-contract sculptures embodying historic vulnerabilities', '歴史的な脆弱性を体現するスマートコントラクト彫刻')} />
          <WorkItem title="Executed Poetry" href="/works/executed-poetry" desc={t('Poems that run on physical devices', '物理デバイス上で実行される詩')} />
          <WorkItem title="CodeTEI" href="/works/code-tei" desc={t('A TEI extension for archiving executable poetry', '実行可能詩のアーカイブのためのTEI拡張')} />
          <WorkItem title="DeepSea" href="/works/deepsea" desc={t('A code-poem exploring system states through testing', 'テストによりシステム状態を探索するコード詩')} />
          <WorkItem title="inside window" href="/works/inside-window" desc={t('Excavating poetic spaces in browser runtime', 'ブラウザ実行環境における詩的空間の発掘')} />
        </Section>

        {/* Exhibitions */}
        <Section title={t('Exhibitions', '展示')}>
          <CVItemLink
            year="2025.9"
            text={t('Computational Poetry Exhibition', '展覧会「計算する詩 / Computational Poetry」')}
            venue={t('NEORT++, Tokyo', 'NEORT++, 東京')}
            works="[BUGCAT] [Executed Poetry] [CodeTEI]"
            href="https://two.neort.io/ja/exhibitions/computational_poetry"
          />
          <CVItemLink
            year="2025.2"
            text="BYOD² (Bring Your Own Data & Display) Exhibition"
            venue={t('MIYASHITA PARK, Tokyo', 'MIYASHITA PARK, 東京')}
            works="[Lost Language] [inside window] [DeepSea]"
            href="https://byod.neort.io/"
          />
          <CVItemLink
            year="2024.11"
            text={t('1st Japan Generative Art Award Exhibition', '第一回ジェネラティブアート・アワード受賞作品展')}
            venue={t('Yamaguchi Center for Arts and Media [YCAM]', '山口情報芸術センター [YCAM], 山口')}
            works="[DeepSea]"
            href="https://www.ycam.jp/events/2024/exhibition-of-award-winning-works/"
          />
          <CVItemLink
            year="2024.4"
            text={t("'Visual Poetry' group show curated by Atelier", "'Visual Poetry' グループ展 curated by Atelier")}
            venue={t('fxhash, Online', 'fxhash, オンライン')}
            works="[inside window]"
            href="https://www.fxhash.xyz/generative/30729"
          />
          <CVItemLink
            year="2024.1"
            text="DIG SHIBUYA - Proof of X: Decoding PFP Culture"
            venue={t('GALLERY X BY PARCO, Tokyo', 'GALLERY X BY PARCO, 東京')}
            works="[Async to Sync]"
            href="https://proofofx.art/"
          />
          <CVItemLink
            year="2023.9"
            text="art stage OSAKA 2023 - Proof of X"
            venue={t('Grand Cube Osaka, Osaka', 'グランキューブ大阪, 大阪')}
            works="[Digital Native Art]"
            href="https://www.artstageosaka.com/archives/2023"
          />
          <CVItemLink
            year="2023.6"
            text="Proof of X 2023"
            venue={t('THE FACE DAIKANYAMA, Tokyo', 'THE FACE DAIKANYAMA, 東京')}
            works="[Digital Native Art]"
            href="https://proofofx.art/2023"
          />
          <CVItemLink
            year="2022.9"
            text="Crypto Art Week Asia Tokyo 2022"
            venue={t('DMM Azabu Satellite, Tokyo', 'DMM 麻布サテライト, 東京')}
            works="[Lost Language]"
            href="https://web.archive.org/web/20240301045832/http://cryptoart.tokyo/cawatokyo2022/"
          />
          <CVItemLink
            year="2022.7"
            text="Crypto Art Fes 2022"
            venue={t('Shibuya Space Edge, Tokyo', '渋谷SPACE EDGE, 東京')}
            works={t('[Sakutaro Poems NFTs]', '[萩原朔太郎 詩のNFT]')}
            href="https://conata.world/caf/2022"
          />
        </Section>

        {/* Presentations */}
        <Section title={t('Presentations', '発表')}>
          <CVItemWithLink
            year="2025.9"
            linkText={t('The 14th Conference of Japanese Association for Digital Humanities (JADH2025)', 'The 14th Conference of Japanese Association for Digital Humanities (JADH2025)')}
            href="https://jadh2025.hmt.osaka-u.ac.jp/program"
            desc={t('"CodeTEI: A TEI Extension and PoC System for Executable Poetry"', '「CodeTEI: A TEI Extension and PoC System for Executable Poetry」')}
          />
          <CVItemWithLink
            year="2025.7"
            linkText={t('Japanese Association for Semiotic Studies 45th Annual Conference', '日本記号学会第45回大会')}
            href="https://www.jassweb.jp/?page_id=4814"
            desc={t('"Sign Transposition in Code Poetry and the Application of Peircean Sign Classification"', '「コードポエトリーにおける記号転位とパース記号分類の応用」')}
          />
        </Section>

        {/* Awards */}
        <Section title={t('Awards', '受賞')}>
          <CVItemWithLink
            year="2024.9"
            linkText={t('1st Japan Generative Art Award — Selected Work', '第一回ジェネラティブアート・アワード — 入賞')}
            href="https://generativeart.or.jp/generative-art-award/generative-art-award-winner-2024"
          />
        </Section>

        {/* Education */}
        <Section title={t('Education', '学歴')}>
          <CVItem year="2024–" text={t('PhD Program, IAMAS, Japan', '博士後期課程　情報科学芸術大学院大学（IAMAS）')} />
          <CVItem year="2013" text={t('M.S., Biological Sciences — Osaka University', '修士（理学） 大阪大学')} />
          <CVItem year="2011" text={t('B.S., Computer Science — Kyushu Institute of Technology', '学士（情報工学） 九州工業大学')} />
          <CVItem year="2009" text={t('National Institute of Technology, Kagoshima College — Information Engineering', '鹿児島高専 情報工学科')} />
        </Section>

        {/* Contact */}
        <section className="mt-24 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a href="mailto:codeartstudies@gmail.com" className="transition-opacity hover:opacity-50">
              Email
            </a>
            <a href="https://github.com/avcdsld" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-50">
              GitHub
            </a>
            <a href="https://x.com/arandoros" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-50">
              X
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-xs tracking-[0.3em] text-gray-600">{title.toUpperCase()}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function CVItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="w-16 flex-shrink-0 text-gray-600">{year}</span>
      <span className="text-gray-400">{text}</span>
    </div>
  );
}

function WorkItem({ title, href, desc }: { title: string; href?: string; desc: string }) {
  return (
    <div className="text-sm">
      {href ? (
        <a href={href} className="text-gray-300 transition-opacity hover:opacity-50">{title}</a>
      ) : (
        <span className="text-gray-300">{title}</span>
      )}
      <span className="text-gray-600"> — {desc}</span>
    </div>
  );
}

function CVItemLink({ year, text, venue, works, href }: { year: string; text: string; venue: string; works: string; href: string }) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="w-16 flex-shrink-0 text-gray-600">{year}</span>
      <span className="text-gray-400">
        <a href={href} target="_blank" rel="noreferrer" className="text-gray-300 transition-opacity hover:opacity-50">
          {text}
        </a>
        <span className="text-gray-600">（{venue}）</span>
        <span className="text-gray-600"> {works}</span>
      </span>
    </div>
  );
}

function CVItemWithLink({ year, linkText, href, desc }: { year: string; linkText: string; href: string; desc?: string }) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="w-16 flex-shrink-0 text-gray-600">{year}</span>
      <span className="text-gray-400">
        <a href={href} target="_blank" rel="noreferrer" className="text-gray-300 transition-opacity hover:opacity-50">
          {linkText}
        </a>
        {desc && <span className="text-gray-500">　{desc}</span>}
      </span>
    </div>
  );
}
