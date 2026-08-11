// Flat config: `next lint` was removed in Next 16, so ESLint is run directly.
import next from 'eslint-config-next/core-web-vitals';

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'public/**', 'next-env.d.ts'] },
  ...next,
];

export default config;
