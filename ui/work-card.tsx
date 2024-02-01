import Image from 'next/image';
import Link from 'next/link';
import { notoSansJP } from '#/font/font';

export const WorkCard = ({ item, href }: { item: any; href: string }) => {
  const slug = item.slug.replace('works/', '');
  const image = item.image || `/images/${slug}.jpg`;
  const imageBlur = `/images/${slug}.jpg`; // TODO:
  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative h-full w-full pt-8">
          <div
            style={{
              width: '100%',
              height: '0',
              paddingBottom: '100%',
              position: 'relative',
              boxShadow: '0px 0px 1px rgba(255, 255, 255, 0.5)',
            }}
          >
            <Image
              src={image}
              layout="fill"
              className="rounded-sm object-cover group-hover:opacity-80"
              alt={item.name}
              placeholder="blur"
              blurDataURL={imageBlur}
            />
          </div>
        </div>

        <div className="group-hover:text-vercel-cyan truncate text-sm font-medium text-white">
          {item.name}
        </div>
        <div
          className={`${notoSansJP.className} group-hover:text-vercel-cyan truncate text-xs text-gray-200`}
        >
          {item.year}
        </div>
      </div>
    </Link>
  );
};
