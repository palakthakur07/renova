"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import type { Certificate } from "@/types/learning";

/** CertificatePreview — brief §43. Demo-only, explicitly labeled as such. */
export function CertificatePreview({ certificate }: { certificate: Certificate }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,var(--accent-achievement)_35%,transparent)] bg-[var(--bg-surface)] p-8 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--color-gold-500) 12%, transparent), transparent 60%)" }}
      />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-achievement)_16%,transparent)] text-[var(--accent-achievement)] mx-auto">
        <Award size={20} />
      </span>
      <p className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
        Certificate of completion — demo only
      </p>
      <h3 className="relative mt-2 font-[family-name:var(--font-display)] text-[22px] font-semibold text-[var(--text-primary)]">
        {certificate.courseTitle}
      </h3>
      <p className="relative mt-3 text-[13px] text-[var(--text-secondary)]">
        Awarded to <span className="text-[var(--text-primary)]">{certificate.awardedTo}</span>
      </p>
      <p className="relative text-[12px] text-[var(--text-muted)]">{certificate.date}</p>
      <div className="relative mt-4 flex flex-wrap justify-center gap-2">
        {certificate.skillsDemonstrated.map((s) => (
          <span key={s} className="rounded-full border border-[var(--border-hairline-strong)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)]">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
