"use client";

import { createContext, useEffect, type ReactNode } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface PointerFieldValue {
  /** Normalized 0–1 horizontal pointer position across the viewport. */
  x: MotionValue<number>;
  /** Normalized 0–1 vertical pointer position across the viewport. */
  y: MotionValue<number>;
  /** False for touch-primary devices and prefers-reduced-motion — consumers should no-op. */
  enabled: boolean;
}

export const PointerFieldContext = createContext<PointerFieldValue | null>(null);

/**
 * Scopes a single shared pointermove listener to whatever tree it wraps
 * (the landing page only — this is deliberately not mounted at the app
 * root, since the app shell has no use for ambient parallax). Every
 * Parallax / FocusLight layer reads the same two motion values instead
 * of each attaching its own listener.
 */
export function PointerFieldProvider({ children }: { children: ReactNode }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const enabled = !reducedMotion && !coarsePointer;

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  return (
    <PointerFieldContext.Provider value={{ x, y, enabled }}>
      {children}
    </PointerFieldContext.Provider>
  );
}
