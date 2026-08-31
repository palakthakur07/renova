"use client";

import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { Recommendation, AlternativePath } from "@/types/planner";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

export function RecommendationDrawer({
  recommendation,
  alternatives,
  onClose,
}: {
  recommendation: Recommendation | null;
  alternatives: AlternativePath[];
  onClose: () => void;
}) {
  return (
    <Drawer open={!!recommendation} onClose={onClose} eyebrow="Recommendation detail" title={recommendation?.title ?? ""}>
      {recommendation && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge tone="neutral">{recommendation.durationWeeks} weeks</Badge>
            <Badge tone={CONFIDENCE_TONE[recommendation.confidence]}>{recommendation.confidence} confidence</Badge>
          </div>

          <Section title="Why recommended">
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{recommendation.reason}</p>
          </Section>

          <Section title="Evidence">
            <ul className="space-y-2">
              {recommendation.evidence.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">{e.label}</span> — {e.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Expected outcome">
            <p className="text-[13px] text-[var(--text-secondary)]">{recommendation.expectedOutcome}</p>
          </Section>

          <Section title="Prerequisites">
            {recommendation.prerequisites.length === 0 ? (
              <p className="text-[13px] text-[var(--text-muted)]">None</p>
            ) : (
              <ul className="space-y-1">
                {recommendation.prerequisites.map((p) => (
                  <li key={p} className="text-[13px] text-[var(--text-secondary)]">· {p}</li>
                ))}
              </ul>
            )}
          </Section>

          <Section title="Success criteria">
            <ul className="space-y-1">
              {recommendation.successCriteria.map((c, i) => (
                <li key={i} className="text-[13px] text-[var(--text-secondary)]">· {c}</li>
              ))}
            </ul>
          </Section>

          {alternatives.length > 0 && (
            <Section title="Alternatives">
              <div className="space-y-2">
                {alternatives.filter((a) => a.type !== "primary").map((a) => (
                  <div key={a.id} className="rounded-[var(--radius-sm)] border border-[var(--border-hairline)] p-3">
                    <p className="text-[12.5px] font-medium text-[var(--text-primary)]">{a.label}</p>
                    <p className="mt-0.5 text-[11.5px] text-[var(--text-secondary)]">{a.description}</p>
                    <Badge tone={CONFIDENCE_TONE[a.confidence]} className="mt-2">{a.confidence}</Badge>
                  </div>
                ))}
              </div>
            </Section>
          )}
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
