import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Unlisted foyer/lounge purchase page — reachable by URL, kept out of search.
      disallow: [
        '/works/executed-poetry-js-lounge',
        '/works/executed-poetry-js-lounge.html',
      ],
    },
    sitemap: 'https://zeroichiarakawa.com/sitemap.xml',
  };
}
