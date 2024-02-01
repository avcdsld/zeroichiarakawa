import React from 'react';

const title = 'CV';

export const metadata = {
  title,
  openGraph: {
    title,
    // images: [`/api/og?title=${title}`],
    images: [`/images/og.jpg`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
