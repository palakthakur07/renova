"use client";

import { useSyncExternalStore, useCallback } from "react";

/**
 * Subscribes to a CSS media query and returns whether it currently
 * matches. Built on useSyncExternalStore so the browser's matchMedia
 * API is the single source of truth — no setState-in-effect cascade,
 * and the server snapshot is a stable `false` to avoid a hydration
 * mismatch.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Convenience breakpoint hooks, aligned to Tailwind's default scale. */
export const useIsTablet = () => useMediaQuery("(max-width: 1024px)");
export const useIsMobile = () => useMediaQuery("(max-width: 640px)");
