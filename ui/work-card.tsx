import Image from 'next/image';
import Link from 'next/link';

export const WorkCard = ({ item, href }: { item: any; href: string }) => {
  const slug = item.slug.replace('works/', '');
  const image = `/images/${slug}.jpg`;
  const imageBlur = `/images/${slug}.jpg`; // TODO:
  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative h-full w-full pt-4">
          {' '}
          {/* ここで上部のパディングを追加 */}
          <div
            style={{
              width: '100%',
              height: '0',
              paddingBottom: '80%',
              position: 'relative',
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
      </div>
    </Link>
  );
};
