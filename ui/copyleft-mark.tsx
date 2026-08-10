'use client';

import { useEffect, useRef, useState } from 'react';

const COPYLEFT = '\u{1F12F}'; // 🄯 CIRCLED CC
const FALLBACK = 'Ↄ'; // Ↄ ROMAN NUMERAL REVERSED ONE HUNDRED
const NOTDEF = '\u{10FFFF}'; // noncharacter — always renders as tofu

// 🄯 is missing from many Windows and Linux font stacks, where it renders as
// a tofu box. CSS font fallback cannot swap one character for another, so
// measure the glyph and fall back to Ↄ when the box is what we would get.
export function CopyleftMark() {
  const ref = useRef<HTMLSpanElement>(null);
  const [mark, setMark] = useState(COPYLEFT);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return;

    const { fontStyle, fontWeight, fontSize, fontFamily } =
      getComputedStyle(el);
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;

    const width = ctx.measureText(COPYLEFT).width;
    if (!width || width === ctx.measureText(NOTDEF).width) {
      setMark(FALLBACK);
    }
  }, []);

  return (
    <span ref={ref} aria-hidden="true">
      {mark}
    </span>
  );
}
