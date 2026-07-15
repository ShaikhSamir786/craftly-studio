"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that tracks whether the window is scrolled past a certain threshold.
 * Uses requestAnimationFrame throttling for optimal performance.
 * 
 * @param threshold The scroll position threshold in pixels (default: 60)
 * @returns boolean indicating if the window is scrolled past the threshold
 */
export function useScrollNavbar(threshold = 60): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run once on mount to capture initial scroll position (e.g. on page refresh)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
