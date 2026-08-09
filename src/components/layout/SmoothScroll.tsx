'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

const isSmoothScrollEnabled = process.env.NEXT_PUBLIC_ENABLE_SMOOTH_SCROLL !== 'false';

export default function SmoothScroll() {
  useEffect(() => {
    if (!isSmoothScrollEnabled) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
