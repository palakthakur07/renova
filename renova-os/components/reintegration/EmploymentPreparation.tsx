"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { EmploymentSkill, EmploymentAction, PreparationActionState } from "@/types/reintegration";

const ACTION_STATE_LABEL: Record<PreparationActionState, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

const ACTION_STATE_TONE = {
  "not-started": "neutral",
  "in-progress": "structure",
  completed: "growth",
} as const;

/**
 * EmploymentPreparation — current skills, skills to develop, and
 * actionable preparation cards (brief §6–7). Skills link back to the
 * Learning Companion (Phase 6) course that developed them, keeping
 * the "one system" thread visible rather than restating Phase 6 data.
 */
export function EmploymentPreparation({
  skills,
  actions,
  show,
  onStartAction,
}: {
  skills: EmploymentSkill[];
  actions: EmploymentAction[];
  show: boolean;
  onStartAction: (action: EmploymentAction) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const current = skills.filter((s) => s.readiness === "developed");
  const developing = skills.filter((s) => s.readiness === "developing");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Employment preparation
      </p>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <p className="text-[12px] font-medium text-[var(--text-primary)]">Current skills</p>
          <ul className="mt-2.5 space-y-2">
            {current.map((s) => (
              <li key={s.id} className="flex items-start gap-2 text-[12px] text-[var(--text-secondary)]">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--color-teal-400)]" />
                <span>
                  {s.name}
                  {s.linkedCourse && <span className="text-[var(--text-muted)]"> — {s.linkedCourse}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-medium text-[var(--text-primary)]">Skills to develop</p>
          <ul className="mt-2.5 space-y-2">
            {developing.map((s) => (
              <li key={s.id} className="flex items-start gap-2 text-[12px] text-[var(--text-secondary)]">
                <Circle size={14} className="mt-0.5 shrink-0 text-[var(--text-muted)]" />
                <span>
                  {s.name}
                  {s.linkedCourse && <span className="text-[var(--text-muted)]"> — {s.linkedCourse}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 border-t border-[var(--border-hairline)] pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        Preparation actions
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action, i) => (
          <motion.div
            key={action.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[13px] font-medium text-[var(--text-primary)]">{action.title}</p>
              <Badge tone={ACTION_STATE_TONE[action.state]}>{ACTION_STATE_LABEL[action.state]}</Badge>
            </div>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">{action.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[11px] text-[var(--text-muted)]">
                {action.linkedSkill} · {action.estimatedEffort}
              </span>
              {action.state !== "completed" && (
                <button
                  onClick={() => onStartAction(action)}
                  className="text-[12px] font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {action.state === "in-progress" ? "Continue" : "Start"} →
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
