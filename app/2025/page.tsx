'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

type Activity = {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  images: string[];
  links?: { label: string; url: string }[];
};

const activities: Activity[] = [
  {
    id: 'computational-poetry',
    title: '展覧会「計算する詩」',
    titleEn: 'Computational Poetry Exhibition',
    description: 'キュレーションと作品出展',
    images: [
      '/images/2025/exhibition-1.webp',
      '/images/2025/exhibition-2.jpg',
      '/images/2025/exhibition-3.jpg',
    ],
    links: [
      {
        label: '展覧会サイト',
        url: 'https://two.neort.io/ja/exhibitions/computational_poetry',
      },
      { label: '記事', url: 'https://themassage.jp/archives/26979' },
      { label: 'ウォークスルー動画', url: 'https://youtu.be/N0srN6Re7ac' },
    ],
  },
  {
    id: 'artworks',
    title: '作品制作',
    titleEn: 'Works',
    description: 'BUGCAT / Executed Poetry / CodeTEI',
    images: [
      '/images/2025/work-1.jpg',
      '/images/2025/work-2.jpg',
      '/images/2025/work-3.jpg',
      '/images/2025/work-4.jpg',
      '/images/2025/work-5.jpg',
      '/images/2025/work-6.jpg',
    ],
    links: [
      { label: 'BUGCAT', url: 'https://bugcat.org' },
      { label: 'Executed Poetry', url: 'https://executed-poetry.poesy.run' },
      { label: 'CodeTEI', url: 'https://github.com/CodeArtStudies/CodeTEI' },
    ],
  },
  {
    id: 'jadh-2025',
    title: 'The 14th Conference of Japanese Association for Digital Humanities',
    titleEn:
      'The 14th Conference of Japanese Association for Digital Humanities',
    description: 'ポスター発表',
    images: [
      '/images/2025/jadh-1.jpg',
      '/images/2025/jadh-2.jpg',
      '/images/2025/jadh-3.jpg',
    ],
    links: [{ label: 'JADH 2025', url: 'https://jadh2025.hmt.osaka-u.ac.jp/' }],
  },
  {
    id: 'jass-45',
    title: '日本記号学会第45回大会',
    titleEn: 'JASS 45th Annual Conference',
    description: '口頭発表',
    images: ['/images/2025/jass-1.jpg', '/images/2025/jass-2.png'],
    links: [{ label: 'JASS 45', url: 'https://www.jassweb.jp/45taikai' }],
  },
  {
    id: 'byod2',
    title: 'BYOD² 展',
    titleEn: 'Bring Your Own Data & Display',
    description: '3作品を出展',
    images: [
      '/images/2025/exhibition-byod2-1.jpg',
      '/images/2025/exhibition-byod2-2.jpg',
    ],
    links: [
      { label: 'BYOD²', url: 'https://byod.neort.io/' },
      {
        label: 'DeepSea',
        url: 'https://byod.neort.io/ja/art/rotpjh57o41o0z25saf4zgqy',
      },
      {
        label: 'inside window',
        url: 'https://byod.neort.io/ja/art/u4i73g0yxycbajsenynj1zzi',
      },
      {
        label: 'Lost Language',
        url: 'https://byod.neort.io/ja/art/el1qwuoqmef22rn4n6cajrgk',
      },
    ],
  },
  {
    id: 'mercari-nft',
    title: 'メルカリNFT',
    description: '開発・運営に尽力しています',
    images: ['/images/2025/mnft-1.png', '/images/2025/mnft-2.png'],
    links: [
      {
        label: 'プレスリリース',
        url: 'https://about.mercari.com/press/news/articles/20250128_mercarinft/',
      },
      {
        label: '記事',
        url: 'https://jp-news.mercari.com/articles/2025/08/08/nft_guide4_mike/',
      },
      {
        label: 'オリジナルNFT',
        url: 'https://opensea.io/ja/collection/happymike',
      },
    ],
  },
  {
    id: 'code-art-study',
    title: 'コードアート研究会',
    titleEn: 'Code Art Study Group',
    description: '主催・運営',
    images: [
      '/images/2025/code-art-studies-1.jpg',
      '/images/2025/code-art-studies-2.png',
    ],
    links: [
      { label: 'ウェブサイト', url: 'https://code-studies.art/' },
      { label: 'YouTube', url: 'https://www.youtube.com/@CodeArtStudies' },
      {
        label: '記事',
        url: 'https://note.com/zeroichiarakawa/n/nc1ab0d348d92',
      },
    ],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative aspect-[3/2] w-full overflow-hidden bg-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`${title}${images.length > 1 ? ` - ${idx + 1}` : ''}`}
          fill
          className="object-cover transition-all duration-1000 ease-out"
          style={{
            opacity: idx === activeIndex ? 1 : 0,
            transform: `scale(${isHovered ? 1.02 : 1})`,
          }}
        />
      ))}

      {/* Minimal dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ActivityItem({
  activity,
  index,
}: {
  activity: Activity;
  index: number;
}) {
  const { ref, isInView } = useInView(0.15);

  return (
    <article
      ref={ref}
      className="group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(32px)',
        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
      }}
    >
      <div className="mb-5">
        <ImageGallery images={activity.images} title={activity.title} />
      </div>

      <div className="space-y-2">
        <h2 className="text-base font-normal text-white/90 transition-colors duration-300 group-hover:text-white">
          {activity.title}
        </h2>

        {activity.titleEn && (
          <p className="text-xs text-white/30">{activity.titleEn}</p>
        )}

        <p className="text-sm leading-relaxed text-white/50">
          {activity.description}
        </p>

        {activity.links && activity.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-1">
            {activity.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 underline decoration-white/20 underline-offset-2 transition-colors duration-200 hover:text-white/80 hover:decoration-white/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="mb-16">
      <p
        className="text-[10px] uppercase tracking-[0.25em] text-white/25"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      >
        Highlights
      </p>

      <h1
        className="mt-3 text-3xl font-light tracking-wider text-white md:text-4xl"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
        }}
      >
        2025年ふりかえり
      </h1>

      <div
        className="mt-6 h-px w-12 bg-white/20"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'all 0.8s ease-out 0.4s',
        }}
      />
    </header>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-px w-full bg-white/5">
      <div
        className="h-full bg-white/40 transition-all duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

const fortunes: Record<string, { level: string; poem: string[] }> = {
  '🦅': {
    level: '大吉',
    poem: ['高く飛べ', 'どこまでも高く', '空に終わりはない'],
  },
  '🐴': {
    level: '大吉',
    poem: ['駆けだす朝', '追い風がふく', '今年はあなたの年'],
  },
  '🗻': {
    level: '吉',
    poem: ['動かない山が', '静かに教える', '揺るがない強さを'],
  },
  '🌅': {
    level: '吉',
    poem: ['昨日は沈んだ', '今日はまた昇る', 'それだけでいい'],
  },
  '🧧': {
    level: '中吉',
    poem: ['届いたものを', '開けてみるまで', '中身はわからない'],
  },
  '🎯': {
    level: '中吉',
    poem: ['狙いを定めて', '静かに放つ', 'あとは待つだけ'],
  },
  '⛩️': {
    level: '小吉',
    poem: ['くぐるたび', '少しだけ変わる', '気づかないほど'],
  },
  '🎍': {
    level: '小吉',
    poem: ['まっすぐ立つこと', 'それだけでいい', '今年もそれでいい'],
  },
  '🍊': {
    level: '末吉',
    poem: ['手のひらの温度', '小さな甘さ', 'それで足りる'],
  },
  '🐢': {
    level: '末吉',
    poem: ['急がなくていい', '止まらなければ', 'いつか届く'],
  },
  '💮': { level: '凶', poem: ['咲くには早い', '根を張る季節', '土の中で待て'] },
  '🍆': {
    level: '凶',
    poem: ['夢に関係なく', '地味に続けろ', '土は覚えている'],
  },
  '🍶': {
    level: '大凶',
    poem: ['空っぽの器', 'そこから始まる', '満たすのはこれから'],
  },
  '🪭': { level: '大凶', poem: ['風を起こすな', '風を待て', 'じっとしていろ'] },
};

const emojis = [
  '🗻',
  '🌅',
  '⛩️',
  '🎍',
  '🦅',
  '🐴',
  '🍊',
  '🐢',
  '💮',
  '🍆',
  '🍶',
  '🪭',
  '🧧',
  '🎯',
];

function Omikuji() {
  const { ref, isInView } = useInView(0.1);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showPoem, setShowPoem] = useState<boolean[]>([]);

  const handleSelect = (emoji: string) => {
    setSelected(emoji);
    setShowPoem([]);
    setTimeout(() => {
      setRevealed(true);
      const fortune = fortunes[emoji];
      fortune.poem.forEach((_, i) => {
        setTimeout(() => {
          setShowPoem((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 400 + i * 350);
      });
    }, 100);
  };

  const handleReset = () => {
    setRevealed(false);
    setTimeout(() => {
      setSelected(null);
      setShowPoem([]);
    }, 500);
  };

  const fortune = selected ? fortunes[selected] : null;
  const isBad = fortune?.level === '凶' || fortune?.level === '大凶';

  return (
    <section
      ref={ref}
      className="mt-24 border-t border-white/10 pt-16"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Thank you message */}
      <div className="mb-12 text-center">
        <p className="text-sm text-white/40">
          ここまで見ていただき、ありがとうございます
        </p>
        <p className="mt-2 text-xs text-white/25">
          2026年の運勢を占ってみてください
        </p>
      </div>

      {/* Omikuji */}
      <div className="text-center">
        <h2 className="text-2xl font-light tracking-[0.4em] text-white/70 md:text-3xl">
          おみくじ
        </h2>
        <p className="mt-2 text-xs tracking-[0.3em] text-white/30">
          OMIKUJI 2026
        </p>

        {/* Selection / Result container */}
        <div className="relative mt-10">
          {/* Selection */}
          <div
            className={`transition-all duration-500 ${
              selected
                ? 'pointer-events-none invisible opacity-0'
                : 'visible opacity-100'
            }`}
          >
            <p className="mb-8 text-sm tracking-[0.2em] text-white/40">
              ひとつ選んでください
            </p>
            <div className="mx-auto grid max-w-md grid-cols-7 gap-3">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleSelect(emoji)}
                  className="flex aspect-square items-center justify-center rounded-lg border border-white/10 text-3xl transition-all hover:scale-110 hover:border-white/30 hover:bg-white/5 active:scale-95"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          {selected && (
            <div
              className={`absolute inset-x-0 top-0 mx-auto max-w-sm transition-all duration-700 ${
                revealed
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="relative px-8 py-12">
                {/* Corner decorations */}
                <div className="absolute left-0 top-0 h-10 w-10 border-l border-t border-white/20" />
                <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/20" />

                <div className="text-5xl">{selected}</div>
                <div
                  className={`mt-5 text-4xl font-light tracking-[0.25em] ${
                    isBad ? 'text-white/50' : 'text-white'
                  }`}
                >
                  {fortune?.level}
                </div>
                <div className="mt-8 space-y-3">
                  {fortune?.poem.map((line, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-white/60 transition-all duration-500"
                      style={{
                        opacity: showPoem[i] ? 1 : 0,
                        transform: showPoem[i]
                          ? 'translateY(0)'
                          : 'translateY(8px)',
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <button
                  onClick={handleReset}
                  className="mt-10 border border-white/20 px-8 py-2.5 text-xs tracking-[0.3em] text-white/40 transition-all hover:border-white/40 hover:text-white/60"
                >
                  もういちど
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />

      <div className="space-y-16">
        {activities.map((activity, index) => (
          <ActivityItem key={activity.id} activity={activity} index={index} />
        ))}
      </div>

      <Omikuji />

      <footer className="mt-20 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-white/30 transition-colors duration-200 hover:text-white/60"
        >
          <span>←</span>
          <span>Back</span>
        </Link>
      </footer>
    </div>
  );
}
