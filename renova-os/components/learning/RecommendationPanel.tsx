"use client";

import { Sparkles, TrendingUp, RotateCcw } from "lucide-react";
import type { LearningRecommendation, RecommendationKind } from "@/types/learning";

const KIND_ICON: Record<RecommendationKind, typeof Sparkles> = {
  next: Sparkles,
  practice: TrendingUp,
  review: RotateCcw,
};
const KIND_LABEL: Record<RecommendationKind, string> = {
  next: "Next",
  practice: "Practice",
  review: "Review",
};

/** RecommendationPanel — "Recommended for you" (brief §34). */
export function RecommendationPanel({ recommendations }: { recommendations: LearningRecommendation[] }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Recommended for you
      </p>
      <ul className="mt-5 space-y-3">
        {recommendations.map((r) => {
          const Icon = KIND_ICON[r.kind];
          return (
            <li key={r.id} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-raised)] text-[var(--accent-primary)]">
                <Icon size={14} />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{KIND_LABEL[r.kind]}</span>
                </div>
                <p className="mt-0.5 text-[13px] font-medium text-[var(--text-primary)]">{r.title}</p>
                <p className="mt-0.5 text-[11.5px] text-[var(--text-secondary)]">{r.reason}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
