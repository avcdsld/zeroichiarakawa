'use client';

import { menuData, type Item } from '#/lib/menu-data';
import { t } from '#/lib/i18n';
import Image from 'next/image';
import { FadeLink } from '#/ui/fade-link';
import { CopyleftMark } from '#/ui/copyleft-mark';
import { workCardImage, WORK_CARD_SIZES } from '#/lib/work-image';

export default function Page() {
  const links = menuData.find((s) => s.name === 'Links')?.items || [];
  const works = menuData.find((s) => s.name === 'Works')?.items || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6">
        <h1 className="text-2xl tracking-wide text-white/90 md:text-3xl">
          {t('Zeroichi Arakawa', '荒川 零一')}
        </h1>
        <p className="mt-6 text-sm tracking-[0.3em] text-gray-400">
          {t('code poet', 'コード詩人')}
        </p>
        <a
          href="#works"
          aria-label="Go to works"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse p-4 text-xs text-gray-400 transition-opacity hover:opacity-50"
        >
          ↓
        </a>
      </section>

      {/* Works Section */}
      <section id="works" className="mx-auto max-w-5xl px-6 pb-32">
        <h2 className="mb-12 text-xs tracking-[0.3em] text-gray-400">
          {t('WORKS', '作品')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((item: Item, idx: number) => {
            const image = workCardImage(item);
            const href = item.slug ? `/${item.slug}` : item.externalUrls?.[0];
            const isExternal = !item.slug;

            const content = (
              <div className="group block w-full py-6 text-left">
                {image && (
                  <div className="bg-gray-1000 mb-4 aspect-video w-full overflow-hidden rounded-lg opacity-90 transition-opacity group-hover:opacity-100">
                    <Image
                      src={image}
                      alt={item.name}
                      width={640}
                      height={360}
                      sizes={WORK_CARD_SIZES}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="text-base text-gray-300 transition-opacity group-hover:opacity-70">
                    {item.nameJa ? t(item.name, item.nameJa) : item.name}
                  </span>
                  <span className="text-sm text-gray-400">{item.year}</span>
                </div>
              </div>
            );

            return isExternal && href ? (
              <a key={idx} href={href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <FadeLink key={idx} href={href ?? '/'}>
                {content}
              </FadeLink>
            );
          })}
        </div>
      </section>

      {/* Diary Section */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
        <FadeLink
          href="/diary"
          className="text-xs tracking-[0.3em] text-gray-400 transition-opacity hover:opacity-50"
        >
          {t('DIARY →', '日記 →')}
        </FadeLink>
      </section>

      {/* Bio Section */}
      <section className="mx-auto max-w-2xl px-6 pb-32">
        <h2 className="mb-12 text-xs tracking-[0.3em] text-gray-400">
          {t('BIO', 'BIO')}
        </h2>
        <p className="text-sm leading-loose text-gray-400">
          {t(
            'Zeroichi Arakawa explores program code as a medium that is read, tested, and executed. His practice examines the literary and structural beauty of code while foregrounding the experiences produced through verification and runtime environments.',
            'プログラムコードを「読まれ、テストされ、実行される」媒体として捉え、その文学的・構造的な美しさと、検証や実行環境が生む経験を主題に探索と実験を続けている。',
          )}
        </p>
        <p className="mt-6 text-sm leading-loose text-gray-400">
          {t(
            'PhD candidate at IAMAS (Institute of Advanced Media Arts and Sciences), Japan. Alongside his artistic practice, he researches and writes on the reading of code.',
            '情報科学芸術大学院大学（IAMAS）博士後期課程在籍。制作と並行して、コードを読むことをめぐる研究・執筆を行っている。',
          )}
        </p>
        <FadeLink
          href="/cv"
          className="mt-8 inline-block text-sm text-gray-400 transition-opacity hover:opacity-50"
        >
          {t('Full CV →', 'Full CV →')}
        </FadeLink>
      </section>

      {/* Links Section */}
      <section className="mx-auto max-w-2xl px-6 pb-32">
        <h2 className="mb-12 text-xs tracking-[0.3em] text-gray-400">LINKS</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {links.map((item: Item) => (
            <a
              key={item.name}
              href={item.externalUrls?.[0]}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 transition-opacity hover:opacity-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <p className="text-xs text-gray-400">
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50"
          >
            Copyleft
          </a>{' '}
          <CopyleftMark /> {new Date().getFullYear()} Zeroichi Arakawa.
        </p>
      </footer>
    </div>
  );
}
