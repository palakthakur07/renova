"use client";

import { CircleAlert } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { ProgressInsight } from "@/types/progress";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

const SIGNALS_CONSIDERED = ["Learning activity", "Course completion", "Skill assessments", "Program participation"];

/**
 * AIInsightDrawer — "Why this insight?" (brief §25). Shows the
 * signals considered and the evidence behind the observation, but
 * never exposes hidden chain-of-thought — only concise, structured
 * factors, same discipline as InsightDrawer in Mission Control/Profile.
 */
export function AIInsightDrawer({ insight, onClose }: { insight: ProgressInsight | null; onClose: () => void }) {
  return (
    <Drawer open={!!insight} onClose={onClose} eyebrow="ReNova intelligence" title="Why this insight?">
      {insight && (
        <div className="space-y-6">
          <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[12px] text-[var(--text-secondary)]">
            <CircleAlert size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
            AI generated this observation from rehabilitation activity data. Review required before acting.
          </div>

          <Section title="Observation">
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{insight.observation}</p>
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
