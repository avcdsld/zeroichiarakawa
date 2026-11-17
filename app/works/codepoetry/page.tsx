import type { Metadata } from 'next';
import { CodePoetryGallery } from './gallery';

export const metadata: Metadata = {
  title: 'Code Poetry on X',
  description:
    'An ongoing series of code poems posted on X with the hashtag #CodePoetry.',
  openGraph: {
    title: 'Code Poetry on X',
    description:
      'An ongoing series of code poems posted on X with the hashtag #CodePoetry.',
  },
};

export default function Page() {
  return <CodePoetryGallery />;
}
