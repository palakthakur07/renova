"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type PlannerStep = "context" | "assessment" | "goals" | "generate" | "review" | "plan";

const STEPS: { key: PlannerStep; number: string; label: string }[] = [
  { key: "context", number: "01", label: "Context" },
  { key: "assessment", number: "02", label: "Assessment" },
  { key: "goals", number: "03", label: "Goals" },
  { key: "generate", number: "04", label: "Generate" },
  { key: "review", number: "05", label: "Review" },
  { key: "plan", number: "06", label: "Plan" },
];

/**
 * PlannerStepper — a process running inside the OS, not a form
 * wizard. Completed steps are illuminated and clickable (to revisit);
 * the current step carries a breathing indicator; future steps stay
 * muted and inert until reached.
 */
export function PlannerStepper({
  current,
  furthestReached,
  onNavigate,
}: {
  current: PlannerStep;
  furthestReached: number;
  onNavigate: (step: PlannerStep) => void;
}) {
  const currentIndex = STEPS.findIndex((s) => s.key === current);

  return (
    <nav aria-label="Planning workflow" className="relative">
      <div className="flex items-center">
        {STEPS.map((step, i) => {
          const isCompleted = i < furthestReached;
          const isCurrent = i === currentIndex;
          const isReachable = i <= furthestReached;
          const isLast = i === STEPS.length - 1;

          return (
            <div key={step.key} className={cn("flex items-center", !isLast && "flex-1")}>
              <button
                onClick={() => isReachable && onNavigate(step.key)}
                disabled={!isReachable}
                className="group flex flex-col items-center gap-2 disabled:cursor-not-allowed"
              >
                <motion.span
                  className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-[12px]"
                  style={{
                    borderColor: isCompleted || isCurrent ? "var(--color-teal-400)" : "var(--border-hairline-strong)",
                    background: isCompleted ? "var(--color-teal-400)" : "var(--bg-surface)",
                    color: isCompleted ? "var(--color-graphite-950)" : isCurrent ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                >
                  {isCompleted ? <Check size={14} /> : step.number}
                  {isCurrent && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-[var(--color-teal-400)]"
                      animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.35, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </motion.span>
                <span
                  className={cn(
                    "whitespace-nowrap text-[11px] transition-colors duration-200",
                    isCurrent ? "text-[var(--text-primary)]" : isCompleted ? "text-[var(--text-secondary)]" : "text-[var(--text-muted)]",
                    isReachable && !isCurrent && "group-hover:text-[var(--text-primary)]"
                  )}
                >
                  {step.label}
                </span>
              </button>
              {!isLast && (
                <div className="mx-1.5 h-px flex-1" style={{ background: isCompleted ? "var(--color-teal-400)" : "var(--border-hairline)" }} />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
