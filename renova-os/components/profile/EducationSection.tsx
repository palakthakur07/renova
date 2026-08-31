"use client";

import { motion } from "framer-motion";
import { GraduationCap, Check, Clock } from "lucide-react";
import type { EducationRecord } from "@/types/profile";

export function EducationSection({ records, show }: { records: EducationRecord[]; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Education
      </p>

      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {records.map((r, i) => (
          <motion.li
            key={r.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <GraduationCap size={15} className="text-[var(--accent-primary)]" />
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{r.title}</p>
              </div>
              {r.status === "completed" ? (
                <Check size={14} className="shrink-0 text-[var(--accent-growth)]" />
              ) : r.status === "in-progress" ? (
                <Clock size={14} className="shrink-0 text-[var(--accent-structure)]" />
              ) : null}
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--bg-canvas)]">
              <motion.div
                className="h-full rounded-full bg-[var(--accent-primary)]"
                initial={{ width: 0 }}
                animate={{ width: show ? `${r.progressPct}%` : 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.06 }}
              />
            </div>
            <p className="mt-2 text-[11px] text-[var(--text-muted)]">
              {r.status === "completed" ? "Completed" : r.status === "in-progress" ? "In progress" : "Not started"}
              {r.hours > 0 ? ` · ${r.hours} learning hours` : ""}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
