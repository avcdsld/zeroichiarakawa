import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { menuData } from '#/lib/menu-data';
import { WorkDetail } from './work-detail';

const works = menuData.find((s) => s.name === 'Works')?.items ?? [];

function findWork(slug: string) {
  return works.find((item) => item.slug === 'works/' + slug);
}

// The detail page wants the full-size /images/<slug>.jpg; item.image is the
// card teaser and only stands in when there is no jpg. Resolved here, at build
// time, so a missing file degrades to "no image" instead of a broken one.
function resolveImage(slug: string): string | null {
  const item = findWork(slug);
  const candidates = [`/images/${slug}.jpg`, item?.image];
  return (
    candidates.find(
      (candidate) =>
        candidate &&
        fs.existsSync(path.join(process.cwd(), 'public', candidate)),
    ) ?? null
  );
}

export function generateStaticParams() {
  return works
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug.replace('works/', '') }));
}

// Route params are a promise as of Next 15.
type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = findWork(slug);
  if (!item) {
    return {};
  }

  const title = item.name;
  const description = item.description
    ? item.description.replace(/\s+/g, ' ').slice(0, 160)
    : undefined;
  const image = resolveImage(slug);
  const images = image ? [image] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <WorkDetail slug={slug} image={resolveImage(slug)} />;
}
