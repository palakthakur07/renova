"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ProgramPerformance } from "@/types/dashboard";

/**
 * ProgramParticipation — brief §8. Reuses lib/demo-data/programs.ts
 * (the same data Mission Control's ProgramPerformance table reads)
 * rather than a duplicate dataset — brief §26 asks to reuse existing
 * demo data where equivalent data already exists. Presented as plain
 * completion bars here, distinct from Mission Control's fuller table,
 * to answer one question: which programs have strong participation?
 */
export function ProgramParticipation({
  programs,
  show,
}: {
  programs: ProgramPerformance[];
  show: boolean;
}) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const sorted = [...programs].sort((a, b) => b.completionPct - a.completionPct);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Program participation
      </p>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">Which programs have strong participation?</p>

      <div className="mt-5 space-y-3.5">
        {sorted.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => router.push("/learning")}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : -8 }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="block w-full text-left"
          >
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-[var(--text-primary)]">{p.name}</span>
              <span className="font-mono text-[var(--text-muted)]">
                {p.completionPct}% · {p.enrollment} enrolled
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
              <motion.div
                className="h-full rounded-full bg-[var(--accent-primary)]"
                initial={{ width: 0 }}
                animate={{ width: show ? `${p.completionPct}%` : 0 }}
                transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
