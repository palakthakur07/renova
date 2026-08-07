"use client";

import { motion } from "framer-motion";

/**
 * BackgroundLayer — the app-shell ambient background (as distinct
 * from the more theatrical hero/BackgroundEngine used only on the
 * marketing landing page). Same visual language, dialed down:
 * grid + two slow glows + grain, fixed behind the entire shell so
 * it never repaints on navigation. GPU-friendly (opacity/transform
 * only — no filter animation on this layer).
 */
export function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-canvas)]" aria-hidden>
      <div className="absolute inset-0 bg-precision-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />

      <motion.div
        className="absolute left-[15%] top-[-10%] h-[50vh] w-[50vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-teal-500) 8%, transparent) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[20%] h-[40vh] w-[40vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-cyan-500) 6%, transparent) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
