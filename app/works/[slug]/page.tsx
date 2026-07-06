import { Metadata } from 'next';
import { menuData } from '#/lib/menu-data';
import { WorkDetail } from './work-detail';

const works = menuData.find((s) => s.name === 'Works')?.items ?? [];

function findWork(slug: string) {
  return works.find((item) => item.slug === 'works/' + slug);
}

export function generateStaticParams() {
  return works
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug.replace('works/', '') }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = findWork(params.slug);
  if (!item) {
    return {};
  }

  const title = item.name;
  const description = item.description
    ? item.description.replace(/\s+/g, ' ').slice(0, 160)
    : undefined;
  const image = `/images/${params.slug}.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <WorkDetail slug={params.slug} />;
}
