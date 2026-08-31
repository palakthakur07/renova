"use client";

import { CircleAlert } from "lucide-react";
import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { AIProfileInsight } from "@/types/profile";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

export function AISummaryDrawer({
  summary,
  open,
  onClose,
}: {
  summary: AIProfileInsight | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer open={open} onClose={onClose} eyebrow="ReNova intelligence" title={summary?.title ?? ""}>
      {summary && (
        <div className="space-y-6">
          <div className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[12px] text-[var(--text-secondary)]">
            <CircleAlert size={15} className="mt-0.5 shrink-0 text-[var(--accent-structure)]" />
            AI-generated summary. Human review required.
          </div>

          <Section title="Observations">
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{summary.observation}</p>
          </Section>

          <Section title="Supporting signals">
            <BulletList items={summary.supportingSignals} />
          </Section>

          <Section title="Potential opportunities">
            <BulletList items={summary.potentialOpportunities} />
          </Section>

          <Section title="Limitations">
            <BulletList items={summary.limitations} />
          </Section>

          <Section title="Confidence">
            <Badge tone={CONFIDENCE_TONE[summary.confidence]}>
              {summary.confidence[0].toUpperCase() + summary.confidence.slice(1)}
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}
