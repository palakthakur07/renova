"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn } from "@/lib/animations";

/**
 * FadeIn — the simplest entrance: opacity only, no movement. For
 * elements where any positional shift would compete with a bigger
 * motion happening nearby (e.g. status text next to a moving core).
 */
export function FadeIn({
  children,
  show = true,
  delay = 0,
  className,
}: {
  children: ReactNode;
  show?: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
