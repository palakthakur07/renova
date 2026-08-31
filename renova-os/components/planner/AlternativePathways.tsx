"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { AlternativePath } from "@/types/planner";

const TYPE_LABEL: Record<AlternativePath["type"], string> = {
  primary: "Primary path",
  alternative: "Alternative path",
  secondary: "Secondary path",
};
const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

/** AlternativePathways — communicates uncertainty and choice (brief §31), not one predetermined future. */
export function AlternativePathways({ paths, show }: { paths: AlternativePath[]; show: boolean }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Alternative pathways
      </p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {paths.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
              {TYPE_LABEL[p.type]}
            </span>
            <p className="mt-1.5 text-[13px] font-medium text-[var(--text-primary)]">{p.label}</p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">{p.description}</p>
            <Badge tone={CONFIDENCE_TONE[p.confidence]} className="mt-3">
              {p.confidence} confidence
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
