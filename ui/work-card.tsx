import Image from 'next/image';
import Link from 'next/link';

export const WorkCard = ({ item, href }: { item: any; href: string }) => {
  const isExternal = !item.slug;
  const slug = item.slug?.replace('works/', '') || '';
  const image = item.image || (slug ? `/images/${slug}.jpg` : null);

  const content = (
    <div className="group block py-4 transition-all">
      {image && (
        <div className="mb-3 aspect-video w-full overflow-hidden rounded-lg opacity-90 transition-all group-hover:opacity-100 group-hover:shadow-lg">
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
          {item.name}
        </span>
        <span className="text-sm text-gray-600">{item.year}</span>
      </div>
    </div>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href}>{content}</Link>
  );
};
