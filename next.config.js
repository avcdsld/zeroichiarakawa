/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Clean URLs for self-contained static HTML pieces in public/diary/.
      // The [^.]+ guard skips paths with an extension (e.g. .png) so co-located
      // assets like OG images are served directly.
      { source: '/diary/:slug([^.]+)', destination: '/diary/:slug.html' },
    ];
  },
};

module.exports = nextConfig;
