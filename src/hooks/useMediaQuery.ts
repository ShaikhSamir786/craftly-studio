"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that matches a CSS media query and tracks its status.
 * Safe for Next.js Server-Side Rendering (SSR).
 * 
 * @param query The media query to match (e.g. '(min-width: 768px)')
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    
    // Set the initial value
    setMatches(media.matches);

    // Define listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Attach listener
    media.addEventListener("change", listener);
    
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
