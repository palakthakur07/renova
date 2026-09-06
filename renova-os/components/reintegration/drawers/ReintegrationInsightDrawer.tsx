"use client";

import { CircleAlert } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { ReintegrationInsight } from "@/types/reintegration";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

const SIGNALS_CONSIDERED = [
  "Rehabilitation plan and goals",
  "Learning and skill progress",
  "Rehabilitation Progress Intelligence",
  "Reintegration preparation checklist",
];

/**
 * ReintegrationInsightDrawer — "Why this suggestion?" (brief §11).
 * Shows the signals considered and the evidence behind the
 * suggestion, but never exposes hidden chain-of-thought — same
 * discipline as Phase 7's AIInsightDrawer.
 */
export function ReintegrationInsightDrawer({
  insight,
  onClose,
}: {
  insight: ReintegrationInsight | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!insight} onClose={onClose} eyebrow="AI reintegration guide" title="Why this suggestion?">
      {insight && (
        <div className="space-y-6">
          <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[12px] text-[var(--text-secondary)]">
            <CircleAlert size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
            AI generated this suggestion from rehabilitation and preparation activity data. Staff review is
            required before it becomes part of any plan.
          </div>

          <Section title="Suggestion">
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{insight.explanation}</p>
          </Section>

          <Section title="Signals considered">
            <ul className="space-y-2">
              {SIGNALS_CONSIDERED.map((s) => (
                <li key={s} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {s}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Evidence">
            <ul className="space-y-2">
              {insight.evidence.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                  {e}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Confidence">
            <Badge tone={CONFIDENCE_TONE[insight.confidence]}>
              {insight.confidence[0].toUpperCase() + insight.confidence.slice(1)}
            </Badge>
          </Section>
        </div>
      )}
    </Drawer>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{title}</p>
      {children}
    </div>
  );
}
