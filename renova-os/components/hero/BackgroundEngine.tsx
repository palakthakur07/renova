"use client";

import { motion } from "framer-motion";

/**
 * BackgroundEngine — depth without a flat fill.
 * Layers: obsidian base -> precision grid -> two slow radial glows
 * -> grain. Everything moves on multi-second cycles so it reads as
 * ambient, not animated.
 */
export function BackgroundEngine() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--bg-stage)]">
      <div className="absolute inset-0 bg-precision-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[38%] h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 14%, transparent) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute left-[30%] top-[60%] h-[45vh] w-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-cyan-500) 10%, transparent) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="absolute inset-0 bg-noise" />

      {/* Vignette — keeps focus in the center stage */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, transparent 40%, var(--bg-stage) 100%)",
        }}
      />
    </div>
  );
}
