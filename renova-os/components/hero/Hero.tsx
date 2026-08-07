"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundEngine } from "./BackgroundEngine";
import { FocusEngine } from "./FocusEngine";
import { InstrumentAssembly } from "./InstrumentAssembly";
import { Button } from "@/components/ui/Button";

/**
 * Hero — the cinematic entry point. The OS "waking up," not loading.
 * Sequence: stage fades in -> instrument assembles -> title resolves
 * with a single light sweep -> subtitle -> CTA. Each beat waits for
 * the last one to settle; nothing arrives simultaneously.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
      <BackgroundEngine />
      <FocusEngine />

      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <InstrumentAssembly size={620} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2 rounded-full border border-[var(--border-hairline-strong)] bg-[color-mix(in_srgb,var(--bg-stage)_60%,transparent)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-secondary)] backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
          System initialized
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)]"
          >
            ReNova&nbsp;OS
          </motion.h1>
          {/* Single horizontal light sweep across the title */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 1.4, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
            style={{
              background:
                "linear-gradient(100deg, transparent 40%, color-mix(in srgb, var(--color-off-white) 55%, transparent) 50%, transparent 60%)",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance font-[family-name:var(--font-body)] text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]"
        >
          AI-Powered Rehabilitation &amp; Reintegration Platform — structure and
          precision in service of people, not in place of them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="group">
            Enter the console
            <ArrowRight
              size={16}
              className="ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Button>
          <Button size="lg" variant="ghost">
            View the design system
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5, ease: "easeOut" }}
        className="absolute bottom-9 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--text-muted)]"
      >
        <span>Scroll</span>
        <motion.span
          className="h-8 w-px bg-[var(--border-hairline-strong)]"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
