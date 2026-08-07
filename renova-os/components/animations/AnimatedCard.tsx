"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cardReveal } from "@/lib/animations";
import { durations, easeStandard } from "@/lib/motion";

/**
 * AnimatedCard — the motion-enabled counterpart to the static `Card`
 * primitive in components/ui. Reveals once on scroll into view, lifts
 * on hover. Use plain `Card` when a screen doesn't need entrance
 * motion (e.g. inside a modal that already animates itself).
 */
export function AnimatedCard({
  children,
  className,
  glass = false,
}: {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}) {
  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3, boxShadow: "var(--shadow-3)" }}
      transition={{ duration: durations.fast, ease: easeStandard }}
      className={cn(
        "rounded-[var(--radius-lg)] p-6",
        glass
          ? "glass-panel"
          : "bg-[var(--bg-surface)] border border-[var(--border-hairline)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
