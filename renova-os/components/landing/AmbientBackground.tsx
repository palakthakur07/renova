"use client";

import { motion } from "framer-motion";
import { Parallax } from "@/components/animations/Parallax";

/**
 * AmbientBackground — the deepest layer of the cinematic stage.
 * Obsidian base, three independent blurred light sources on
 * deliberately non-matching durations (23s / 29s / 19s — mutually
 * prime-ish so their phases never line up in any short window),
 * grain, and a center vignette. Only `opacity` animates continuously;
 * everything else is a one-time entrance driven by `stage`.
 */
export function AmbientBackground({ active }: { active: boolean }) {
  const litUp = active;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--bg-stage)]">
      {/* Light A — drifts horizontally */}
      <Parallax strength={18} className="absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-[42%] h-[65vh] w-[65vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 13%, transparent) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: litUp ? [0.45, 0.85, 0.45] : 0,
            x: ["-4%", "4%", "-4%"],
          }}
          transition={{
            opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 23, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </Parallax>

      {/* Light B — drifts vertically */}
      <Parallax strength={14} invert className="absolute inset-0">
        <motion.div
          className="absolute left-[32%] top-[55%] h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-cyan-500) 10%, transparent) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: litUp ? [0.3, 0.6, 0.3] : 0,
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{
            opacity: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
            y: { duration: 29, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </Parallax>

      {/* Light C — slowly changes intensity only, doesn't move */}
      <motion.div
        className="absolute right-[26%] top-[38%] h-[36vh] w-[36vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-emerald-500) 7%, transparent) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: litUp ? [0.2, 0.45, 0.2] : 0 }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      />

      <div className="absolute inset-0 bg-noise" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 60% at 50% 44%, transparent 35%, var(--bg-stage) 100%)",
        }}
      />
    </div>
  );
}
