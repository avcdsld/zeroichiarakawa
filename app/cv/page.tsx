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
        className="fixed left-6 top-6 text-xs text-gray-600 transition-opacity hover:opacity-50 md:left-12 md:top-12"
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
          <WorkItem title="BUGCAT" desc={t('Smart-contract sculptures embodying historic vulnerabilities', '歴史的な脆弱性を体現するスマートコントラクト彫刻')} />
          <WorkItem title="Executed Poetry" desc={t('Poems that run on physical devices', '物理デバイス上で実行される詩')} />
          <WorkItem title="CodeTEI" desc={t('A TEI extension for archiving executable poetry', '実行可能詩のアーカイブのためのTEI拡張')} />
          <WorkItem title="DeepSea" desc={t('A code-poem exploring system states through testing', 'テストによりシステム状態を探索するコード詩')} />
          <WorkItem title="inside window" desc={t('Excavating poetic spaces in browser runtime', 'ブラウザ実行環境における詩的空間の発掘')} />
        </Section>

        {/* Exhibitions */}
        <Section title={t('Exhibitions', '展示')}>
          <CVItem year="2025" text={t('Computational Poetry Exhibition, NEORT++, Tokyo', '計算機詩展、NEORT++、東京')} />
          <CVItem year="2025" text="BYOD², MIYASHITA PARK, Tokyo" />
          <CVItem year="2024" text={t('1st Japan Generative Art Award Exhibition, YCAM', '第1回 日本ジェネラティブアート大賞展、YCAM')} />
          <CVItem year="2024" text="Visual Poetry, fxhash (curated by Atelier)" />
          <CVItem year="2024" text="DIG SHIBUYA – Proof of X, PARCO, Tokyo" />
          <CVItem year="2023" text="art stage OSAKA 2023 – Proof of X" />
          <CVItem year="2023" text="Proof of X 2023, THE FACE DAIKANYAMA, Tokyo" />
          <CVItem year="2022" text="Crypto Art Week Asia Tokyo 2022" />
          <CVItem year="2022" text="Crypto Art Fes 2022, Tokyo" />
        </Section>

        {/* Presentations */}
        <Section title={t('Presentations', '発表')}>
          <CVItem year="2025" text={t('JADH 2025 — CodeTEI: A TEI Extension for Executable Poetry', 'JADH 2025 — CodeTEI: 実行可能詩のためのTEI拡張')} />
          <CVItem year="2025" text={t('Japan Society of Semiotics — Code Poetry and Peircean Semiotics', '日本記号学会 — コード詩とパースの記号論')} />
        </Section>

        {/* Awards */}
        <Section title={t('Awards', '受賞')}>
          <CVItem year="2024" text={t('1st Japan Generative Art Award — Selected Work', '第1回 日本ジェネラティブアート大賞 — 入選')} />
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

function WorkItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-sm">
      <span className="text-gray-300">{title}</span>
      <span className="text-gray-600"> — {desc}</span>
    </div>
  );
}
