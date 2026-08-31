"use client";

import { motion } from "framer-motion";
import type { RoadmapNode as RoadmapNodeType, ReviewDecision } from "@/types/planner";
import { cn } from "@/lib/utils";

const CATEGORY_COLOR: Record<string, string> = {
  education: "var(--color-teal-400)",
  "skill-development": "var(--color-cyan-400)",
  counseling: "var(--color-teal-300)",
  "employment-prep": "var(--color-emerald-500)",
  "life-skills": "var(--color-gold-500)",
  reintegration: "var(--color-cyan-500)",
};

export function RoadmapNodeCard({
  node,
  decision,
  index,
  show,
  onSelect,
}: {
  node: RoadmapNodeType;
  decision: ReviewDecision;
  index: number;
  show: boolean;
  onSelect: () => void;
}) {
  const color = CATEGORY_COLOR[node.category] ?? "var(--color-teal-400)";
  const removed = decision === "removed";

  return (
    <motion.button
      onClick={onSelect}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: show ? (removed ? 0.45 : 1) : 0, scale: show ? 1 : 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className={cn(
        "w-full min-w-[168px] rounded-[var(--radius-lg)] border bg-[var(--bg-surface)] p-4 text-left transition-colors duration-200",
        removed ? "border-dashed border-[var(--border-hairline)]" : "border-[var(--border-hairline)] hover:border-[var(--accent-primary)]"
      )}
    >
      <span className="mb-2 inline-block h-2 w-2 rounded-full" style={{ background: color }} />
      <p className={cn("text-[13px] font-medium", removed ? "text-[var(--text-muted)] line-through" : "text-[var(--text-primary)]")}>
        {node.title}
      </p>
      <p className="mt-1 text-[11px] text-[var(--text-muted)]">{node.durationWeeks} weeks</p>
      {decision === "modified" && (
        <span className="mt-2 inline-block rounded-full border border-[var(--border-hairline-strong)] px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-[var(--accent-structure)]">
          Modified
        </span>
      )}
    </motion.button>
  );
}
