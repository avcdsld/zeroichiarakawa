import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-6">
      <h1 className="text-lg text-white/90">Not Found</h1>
      <p className="mt-4 text-sm text-gray-400">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="mt-8 text-sm text-gray-400 transition-opacity hover:opacity-50"
      >
        ← Home
      </Link>
    </div>
  );
}
