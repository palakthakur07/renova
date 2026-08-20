"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { pulse } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Pulse — opacity + scale breathing loop, for status dots and "live" indicators. */
export function Pulse({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <motion.div animate={reducedMotion ? undefined : pulse.animate} className={className}>
      {children}
    </motion.div>
  );
}
