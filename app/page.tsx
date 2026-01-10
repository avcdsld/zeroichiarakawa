'use client';

import { menuData } from '#/lib/menu-data';
import { useLanguage } from '#/lib/language-context';
import Image from 'next/image';
import { FadeLink } from '#/ui/fade-link';

export default function Page() {
  const { t } = useLanguage();
  const links = menuData.find((s) => s.name === 'Links')?.items || [];
  const works = menuData.find((s) => s.name === 'Works')?.items || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-2xl tracking-wide text-white/90 md:text-3xl">
          {t('Zeroichi Arakawa', '荒川 零一')}
        </h1>
        <p className="mt-6 text-sm tracking-[0.3em] text-gray-600">
          {t('code poet', 'コード詩人')}
        </p>
      </section>

      {/* Works Section */}
      <section id="works" className="mx-auto max-w-5xl px-6 pb-32">
        <h2 className="mb-12 text-xs tracking-[0.3em] text-gray-600">
          {t('WORKS', '作品')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((item: any, idx: number) => {
            const slug = item.slug?.replace('works/', '') || '';
            const image = item.image || (slug ? `/images/${slug}.jpg` : null);
            const href = item.slug ? `/${item.slug}` : item.externalUrls?.[0];
            const isExternal = !item.slug;

            const content = (
              <div className="group block w-full py-6 text-left transition-all">
                {image && (
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg opacity-90 transition-all group-hover:opacity-100 group-hover:shadow-lg">
                    <Image
                      src={image}
                      alt={item.name}
                      width={640}
                      height={360}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <span className="text-base text-gray-300 transition-opacity group-hover:opacity-70">
                    {item.nameJa ? t(item.name, item.nameJa) : item.name}
                  </span>
                  <span className="text-sm text-gray-600">{item.year}</span>
                </div>
              </div>
            );

            return isExternal ? (
              <a key={idx} href={href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <FadeLink key={idx} href={href}>
                {content}
              </FadeLink>
            );
          })}
        </div>
      </section>

      {/* Bio Section */}
      <section className="mx-auto max-w-2xl px-6 pb-32">
        <h2 className="mb-12 text-xs tracking-[0.3em] text-gray-600">
          {t('BIO', 'BIO')}
        </h2>
        <p className="text-sm leading-loose text-gray-400">
          {t(
            'Zeroichi Arakawa explores program code as a medium that is read, tested, and executed. His practice examines the literary and structural beauty of code while foregrounding the experiences produced through verification and runtime environments.',
            'プログラムコードを「読まれ、テストされ、実行される」媒体として捉え、その文学的・構造的な美しさと、検証や実行環境が生む経験を主題に探索と実験を続けている。'
          )}
        </p>
        <p className="mt-6 text-sm leading-loose text-gray-400">
          {t(
            'PhD candidate at IAMAS (Institute of Advanced Media Arts and Sciences), Japan.',
            '情報科学芸術大学院大学（IAMAS）博士後期課程在籍。'
          )}
        </p>
        <FadeLink
          href="/cv"
          className="mt-8 inline-block text-sm text-gray-500 transition-opacity hover:opacity-50"
        >
          {t('Full CV →', 'Full CV →')}
        </FadeLink>
      </section>

      {/* Links Section */}
      <section className="mx-auto max-w-2xl px-6 pb-32">
        <h2 className="mb-12 text-xs tracking-[0.3em] text-gray-600">LINKS</h2>
        <div className="flex gap-8">
          {links.map((item: any) => (
            <a
              key={item.name}
              href={item.externalUrls?.[0]}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 transition-opacity hover:opacity-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <p className="text-xs text-gray-500">
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50"
          >
            Copyleft
          </a>{' '}
          © {new Date().getFullYear()} Zeroichi Arakawa.
        </p>
      </footer>
    </div>
  );
}
