import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { menuData } from '#/lib/menu-data';

const BASE_URL = 'https://zeroichiarakawa.com';

function diarySlugs(): string[] {
  const dir = path.join(process.cwd(), 'public', 'diary');
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.html'))
      .map((f) => f.replace(/\.html$/, ''));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/cv', '/diary'];

  const itemPages = menuData
    .filter((section) => section.name === 'Works')
    .flatMap((section) => section.items)
    .filter((item) => item.slug)
    .map((item) => `/${item.slug}`);

  const diaryPages = diarySlugs().map((slug) => `/diary/${slug}`);

  return [...staticPages, ...itemPages, ...diaryPages].map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
