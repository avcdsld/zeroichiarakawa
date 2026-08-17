/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      // beforeFiles runs ahead of the /works/[slug] dynamic route, so this
      // self-contained page (public/works/…​.html) wins that path. Unlisted.
      beforeFiles: [
        {
          source: '/works/executed-poetry-js-lounge',
          destination: '/works/executed-poetry-js-lounge.html',
        },
      ],
      // Clean URLs for self-contained static HTML pieces in public/diary/.
      // The [^.]+ guard skips paths with an extension (e.g. .png) so co-located
      // assets like OG images are served directly.
      afterFiles: [
        { source: '/diary/:slug([^.]+)', destination: '/diary/:slug.html' },
      ],
    };
  },
  async redirects() {
    return [
      // The home page is the works index; /activities was a placeholder whose
      // content the CV covers. Keep the old URLs reachable.
      { source: '/works', destination: '/', permanent: true },
      { source: '/activities', destination: '/cv', permanent: true },
      { source: '/activities/:slug', destination: '/cv', permanent: true },
    ];
  },
};

module.exports = nextConfig;
