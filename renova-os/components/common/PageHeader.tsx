"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { slideUp, staggerContainer } from "@/lib/animations";

/**
 * PageHeader — the large animated title used at the top of every
 * placeholder route. Title and description stagger in on mount;
 * this is the "large animated title" the Phase 1 brief asks every
 * placeholder page to open with.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between gap-6 border-b border-[var(--border-hairline)] pb-10 sm:flex-row sm:items-end"
    >
      <div>
        <motion.p
          variants={slideUp}
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-primary)]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={slideUp}
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={slideUp}
          className="mt-3 max-w-xl text-[14px] leading-relaxed text-[var(--text-secondary)]"
        >
          {description}
        </motion.p>
      </div>
      {action && (
        <motion.div variants={slideUp} className="shrink-0">
          {action}
        </motion.div>
      )}
    </motion.div>
  );
}
