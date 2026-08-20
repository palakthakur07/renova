"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * BrandReveal — the ReNova OS identity. Per the brief this isn't a
 * simple fade: blur resolves to sharp, letter-spacing tightens down
 * to its resting value, a single light sweep crosses the title once,
 * then everything stabilizes. Subtitle stays deliberately small.
 */
export function BrandReveal({ show }: { show: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)", letterSpacing: "0.12em" }}
          animate={
            show
              ? { opacity: 1, y: 0, filter: "blur(0px)", letterSpacing: "-0.02em" }
              : { opacity: 0, y: 20, filter: "blur(10px)", letterSpacing: "0.12em" }
          }
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] text-[var(--text-primary)]"
        >
          ReNova&nbsp;OS
        </motion.h1>

        {!reducedMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ x: "-120%" }}
            animate={{ x: show ? "120%" : "-120%" }}
            transition={{ duration: 1.3, delay: show ? 0.9 : 0, ease: [0.65, 0, 0.35, 1] }}
            style={{
              background:
                "linear-gradient(100deg, transparent 40%, color-mix(in srgb, var(--color-off-white) 55%, transparent) 50%, transparent 60%)",
              mixBlendMode: "overlay",
            }}
          />
        )}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-md text-balance text-[14px] leading-relaxed text-[var(--text-secondary)] md:text-[15px]"
      >
        The intelligent operating system for rehabilitation &amp; reintegration.
      </motion.p>
    </div>
  );
}
