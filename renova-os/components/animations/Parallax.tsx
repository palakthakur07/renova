"use client";

import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { usePointerField } from "@/hooks/usePointerField";

/**
 * Parallax — shifts children a few pixels against the shared pointer
 * field from PointerFieldProvider. `strength` is the maximum travel in
 * pixels in either direction; keep small (4–24px) — depth should read
 * as "spatial," not as the layer chasing the cursor. No-ops entirely
 * when the pointer field is disabled (touch devices, reduced motion).
 */
export function Parallax({
  children,
  strength = 12,
  invert = false,
  className,
}: {
  children: ReactNode;
  strength?: number;
  invert?: boolean;
  className?: string;
}) {
  const { x, y, enabled } = usePointerField();
  const range = invert ? [strength, -strength] : [-strength, strength];
  const tx = useTransform(x, [0, 1], range);
  const ty = useTransform(y, [0, 1], range);

  return (
    <motion.div
      style={enabled ? { x: tx, y: ty } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
