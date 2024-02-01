import { dinero, type DineroSnapshot } from 'dinero.js';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({
  product,
  href,
}: {
  product: any;
  href: string;
}) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          {product.isBestSeller ? (
            <div className="absolute left-2 top-2 z-10 flex">
              ProductBestSeller
            </div>
          ) : null}
          <Image
            src={`/${product.image}`}
            width={400}
            height={400}
            className="rounded-xl grayscale group-hover:opacity-80"
            alt={product.name}
            placeholder="blur"
            blurDataURL={product.imageBlur}
          />
        </div>

        <div className="group-hover:text-vercel-cyan truncate text-sm font-medium text-white">
          {product.name}
        </div>
      </div>
    </Link>
  );
};
