import fs from 'fs';
import path from 'path';
import { DiaryIndex, type DiaryEntry } from '#/ui/diary-index';

export const metadata = {
  title: 'Diary',
};

// Everything the list needs from one piece, read from its HTML in a single
// pass. `lang` comes from <html lang>, so a file's language is a property of its
// content, not a guess from its name — either language may hold the bare slug.
function readMeta(file: string): { title: string; date: string; lang: string } {
  let html = '';
  try {
    html = fs.readFileSync(file, 'utf8');
  } catch {
    return { title: '', date: '', lang: '' };
  }
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1].trim() ?? '';
  const date =
    html.match(/<meta\s+name="date"\s+content="([^"]*)"/i)?.[1].trim() ?? '';
  const lang = html.match(/<html[^>]*\blang="([^"]*)"/i)?.[1].trim() ?? '';
  return { title, date, lang };
}

type Edition = { slug: string; title: string; date: string; mtime: number };

// Adding a piece is still just dropping HTML into public/diary/. A piece may
// have two language editions sharing a base slug: one bare, one suffixed -en or
// -ja. Which language sits at the bare slug is decided per piece by <html lang>
// (the dictionaries put English there, e.g. dictionary-46 + dictionary-46-ja).
// Order comes from an optional <meta name="date">, newest first; undated pieces
// trail behind by file mtime — mtime alone is not dependable because a git
// checkout (as on Vercel) resets it to the build time.
function getEntries(): DiaryEntry[] {
  const dir = path.join(process.cwd(), 'public', 'diary');
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const pieces = new Map<string, { en?: Edition; ja?: Edition }>();
  for (const f of files) {
    if (!f.endsWith('.html')) continue;
    const slug = f.replace(/\.html$/, '');
    const base = slug.replace(/-(en|ja)$/, '');
    const full = path.join(dir, f);
    const meta = readMeta(full);
    const isEn = meta.lang
      ? meta.lang.toLowerCase().startsWith('en')
      : slug.endsWith('-en');
    const edition: Edition = {
      slug,
      title: meta.title,
      date: meta.date,
      mtime: fs.statSync(full).mtimeMs,
    };
    const piece = pieces.get(base) ?? {};
    if (isEn) piece.en = edition;
    else piece.ja = edition;
    pieces.set(base, piece);
  }

  return Array.from(pieces.values())
    .map((p) => {
      const ja = (p.ja ?? p.en)!;
      const en = (p.en ?? p.ja)!;
      return {
        slugJa: ja.slug,
        slugEn: en.slug,
        titleJa: ja.title,
        titleEn: en.title,
        date: ja.date || en.date,
        mtime: Math.max(ja.mtime, en.mtime),
      };
    })
    .sort((a, b) => {
      if (a.date && b.date)
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
      if (a.date) return -1;
      if (b.date) return 1;
      return b.mtime - a.mtime;
    })
    .map(({ mtime, date, ...e }) => e);
}

export default function Page() {
  return <DiaryIndex entries={getEntries()} />;
}
