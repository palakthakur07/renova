"use client";

import { CircleAlert } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { AIInsight } from "@/types/dashboard";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

/**
 * InsightDrawer — Observation / Data signals / Recommendation /
 * Confidence, per brief §20. The "AI-generated insight. Review
 * required." line is not optional copy — it's the module's core
 * ethical requirement (brief §41), so it's fixed, not passed in.
 */
export function InsightDrawer({ insight, onClose }: { insight: AIInsight | null; onClose: () => void }) {
  return (
    <Drawer open={!!insight} onClose={onClose} eyebrow="ReNova intelligence" title={insight?.title ?? ""}>
      {insight && (
        <div className="space-y-6">
          <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[12px] text-[var(--text-secondary)]">
            <CircleAlert size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
            AI-generated insight. Review required before acting.
          </div>

          <Section title="Observation">
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{insight.observation}</p>
          </Section>

          <Section title="Data signals">
            <ul className="space-y-2">
              {insight.dataSignals.map((signal, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {signal}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Recommendation">
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{insight.recommendation}</p>
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
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {title}
      </p>
      {children}
    </div>
  );
}
