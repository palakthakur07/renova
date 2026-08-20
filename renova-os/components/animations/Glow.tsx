"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { glow } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Glow — a slow breathing box-shadow loop. Reserved for achievement /
 * "this earned attention" moments per the Phase 0 rule that gold-toned
 * emphasis is earned, not decorative — used sparingly.
 */
export function Glow({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <motion.div animate={reducedMotion ? undefined : glow.animate} className={className}>
      {children}
    </motion.div>
  );
}
