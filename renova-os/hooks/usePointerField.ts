"use client";

import { useContext } from "react";
import { PointerFieldContext } from "@/components/providers/PointerFieldProvider";

/**
 * Normalized (0–1) pointer position across the nearest PointerFieldProvider,
 * plus whether ambient pointer-reactive effects should run at all (off for
 * touch-primary devices and prefers-reduced-motion). Backed by Framer Motion
 * motion values, not React state — reading `x`/`y` in a component never
 * causes that component to re-render; only components that explicitly
 * derive a transform from them (via useTransform) repaint, and only via
 * direct style writes.
 */
export function usePointerField() {
  const ctx = useContext(PointerFieldContext);
  if (!ctx) {
    throw new Error("usePointerField must be used within a PointerFieldProvider");
  }
  return ctx;
}
