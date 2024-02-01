import { notFound } from 'next/navigation';
import Image from 'next/image';
import { menuData } from '#/lib/menu-data';
import { notoSansJP } from '#/font/font';

export default function Page({ params }: { params: { slug: string } }) {
  const menuItem = menuData
    .map((section) => section.items)
    .flat()
    .find((item) => item.slug === 'works/' + params.slug);
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

      {menuItem.externalUrl ? (
        <p>
          <a
            href={menuItem.externalUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            {menuItem.externalUrl}
          </a>
        </p>
      ) : null}
    </div>
  );
}
