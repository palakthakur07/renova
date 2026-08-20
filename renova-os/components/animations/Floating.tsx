"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { floating } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Floating — a gentle infinite vertical drift, for elements that should feel alive at rest. */
export function Floating({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <motion.div animate={reducedMotion ? undefined : floating.animate} className={className}>
      {children}
    </motion.div>
  );
}
