"use client";

import { motion } from "framer-motion";
import { Check, Pencil, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Recommendation, ReviewDecision, GoalPriority, ConfidenceLevel } from "@/types/planner";

const PRIORITY_TONE: Record<GoalPriority, "achievement" | "structure" | "neutral"> = {
  high: "achievement",
  medium: "structure",
  low: "neutral",
};
const CONFIDENCE_TONE: Record<ConfidenceLevel, "growth" | "structure" | "neutral"> = {
  high: "growth",
  medium: "structure",
  low: "neutral",
};

const DECISION_STYLE: Record<ReviewDecision, string> = {
  accepted: "border-[var(--border-hairline)]",
  modified: "border-[color-mix(in_srgb,var(--accent-structure)_45%,transparent)]",
  removed: "border-[color-mix(in_srgb,var(--accent-critical)_35%,transparent)] opacity-60",
};

export function RecommendationCard({
  recommendation,
  decision,
  onDecide,
  onOpen,
}: {
  recommendation: Recommendation;
  decision: ReviewDecision;
  onDecide: (decision: ReviewDecision) => void;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layout
      className={cn(
        "rounded-[var(--radius-lg)] border bg-[var(--bg-surface)] p-5 transition-colors duration-200",
        DECISION_STYLE[decision]
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <button onClick={onOpen} className="min-w-0 text-left">
          <p className="text-[14px] font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)]">
            {recommendation.title}
          </p>
          <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--text-secondary)]">{recommendation.reason}</p>
        </button>
        <Badge tone={PRIORITY_TONE[recommendation.priority]}>{recommendation.priority}</Badge>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[var(--text-muted)]">
        <span>{recommendation.durationWeeks} weeks</span>
        <span>Expected: {recommendation.expectedOutcome}</span>
        <Badge tone={CONFIDENCE_TONE[recommendation.confidence]}>{recommendation.confidence} confidence</Badge>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        <DecisionButton active={decision === "accepted"} onClick={() => onDecide("accepted")} icon={Check} label="Accept" />
        <DecisionButton active={decision === "modified"} onClick={() => onDecide("modified")} icon={Pencil} label="Modify" />
        <DecisionButton active={decision === "removed"} onClick={() => onDecide("removed")} icon={X} label="Remove" />
      </div>
    </motion.div>
  );
}

function DecisionButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Check;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center gap-1 rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[11px] transition-colors duration-200",
        active
          ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
          : "text-[var(--text-muted)] hover:bg-[var(--bg-surface-raised)] hover:text-[var(--text-secondary)]"
      )}
    >
      <Icon size={12} />
      {label}
    </button>
  );
}
