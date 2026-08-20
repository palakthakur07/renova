"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { resolveIn } from "@/lib/motion";

/**
 * BlurReveal — the cinematic "resolves into focus" entrance: blur +
 * opacity + a touch of scale settling in. Reserved for moments that
 * should feel like the system is bringing something into clarity —
 * the brand title, the holographic core — not general UI content.
 */
export function BlurReveal({
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
      variants={resolveIn}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
