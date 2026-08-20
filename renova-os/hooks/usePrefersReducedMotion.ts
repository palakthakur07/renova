"use client";

import { useMediaQuery } from "./useMediaQuery";

/** True if the user's OS/browser has requested reduced motion. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
