"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sprout, LayoutGrid, Crosshair, Wind } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion";

const principles = [
  { icon: HeartHandshake, label: "Hope", detail: "Every screen assumes forward motion is possible." },
  { icon: ShieldCheck, label: "Trust", detail: "Nothing hidden, nothing overstated. Data reads plainly." },
  { icon: Sprout, label: "Growth", detail: "Progress is shown as a path, never a verdict." },
  { icon: LayoutGrid, label: "Structure", detail: "Consistent systems reduce cognitive load for staff and residents alike." },
  { icon: Crosshair, label: "Precision", detail: "Instrument-grade clarity — nothing ambiguous, nothing decorative." },
  { icon: Wind, label: "Calm", detail: "Motion is slow and purposeful. The interface never demands urgency." },
];

export function Principles() {
  return (
    <section id="how-it-works" className="relative bg-[var(--bg-canvas)] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-primary)]"
        >
          Design philosophy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]"
        >
          Technology that assists rehabilitation — never replaces the people doing it.
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--border-hairline)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map(({ icon: Icon, label, detail }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group bg-[var(--bg-canvas)] p-7 transition-colors duration-300 hover:bg-[var(--bg-surface)]"
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                className="mb-5 text-[var(--accent-primary)] transition-transform duration-500 group-hover:scale-110"
              />
              <p className="mb-1.5 font-[family-name:var(--font-display)] text-[15px] font-semibold text-[var(--text-primary)]">
                {label}
              </p>
              <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
                {detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
