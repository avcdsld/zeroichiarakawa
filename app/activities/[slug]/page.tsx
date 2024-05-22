import { notFound } from 'next/navigation';
import Image from 'next/image';
import { menuData } from '#/lib/menu-data';
import { notoSansJP } from '#/font/font';

export default function Page({ params }: { params: { slug: string } }) {
  const menuItem = menuData
    .map((section) => section.items)
    .flat()
    .find((item) => item.slug === 'activities/' + params.slug);
  if (!menuItem) {
    notFound();
  }

  return (
    <div className="prose prose-sm prose-invert max-w-none text-gray-200">
      <div className="flex justify-center">
        <h1 className={`${notoSansJP.className} text-2xl font-normal`}>
          {menuItem.name}
        </h1>
      </div>

      <div className="flex justify-center">
        <Image
          src={`/images/${params.slug}.jpg`}
          alt={`${params.slug}`}
          width={800}
          height={700}
          sizes="100vw"
          priority={false}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div className="flex justify-center">
        <p>{menuItem.description}</p>
      </div>

      {menuItem.externalUrls &&
        menuItem.externalUrls.length > 0 &&
        menuItem.externalUrls.map((url: string) =>
          url ? (
            <p key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {url}
              </a>
            </p>
          ) : null,
        )}
    </div>
  );
}
