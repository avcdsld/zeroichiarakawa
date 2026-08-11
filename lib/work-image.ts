import type { Item } from '#/lib/menu-data';

// Convention: /images/<slug>.jpg is the full-size image for the detail page.
// An item may also name its own file (e.g. a short animated GIF), which is
// meant as the card teaser.
export function workCardImage(item: Item): string | null {
  if (item.image) {
    return item.image;
  }
  const slug = item.slug.replace('works/', '');
  return slug ? `/images/${slug}.jpg` : null;
}

// Cards sit in a 1/2/3-column grid inside max-w-5xl.
export const WORK_CARD_SIZES =
  '(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw';

// The detail image spans the max-w-3xl column.
export const WORK_DETAIL_SIZES = '(min-width: 768px) 720px, 100vw';
