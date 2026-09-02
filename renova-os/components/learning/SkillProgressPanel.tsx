"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types/learning";

/** SkillProgressPanel — skills being developed, mapped from lessons (brief §28). */
export function SkillProgressPanel({ skills }: { skills: Skill[] }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Skills being developed
      </p>
      <ul className="mt-5 space-y-3">
        {skills.map((s, i) => (
          <li key={s.id}>
            <div className="mb-1.5 flex items-center justify-between text-[13px]">
              <span className="text-[var(--text-secondary)]">{s.label}</span>
              <span className="font-mono text-[var(--text-primary)]">{s.scorePct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
              <motion.div
                className="h-full rounded-full bg-[var(--accent-primary)]"
                initial={{ width: 0 }}
                animate={{ width: `${s.scorePct}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
