"use client";

import { Drawer } from "@/components/common/Drawer";
import { Badge } from "@/components/ui/Badge";
import type { ProgressCategory, SupportArea, NextAction } from "@/types/progress";

/**
 * ReportPreviewDrawer — "Generate Progress Report" (brief §56–57). A
 * document-like preview, not a dashboard: summary, progress,
 * achievements, current activities, support areas, and next steps.
 * AI-generated sections are clearly marked, per brief §58.
 */
export function ReportPreviewDrawer({
  open,
  onClose,
  personName,
  overallPct,
  categories,
  supportAreas,
  nextActions,
}: {
  open: boolean;
  onClose: () => void;
  personName: string;
  overallPct: number;
  categories: ProgressCategory[];
  supportAreas: SupportArea[];
  nextActions: NextAction[];
}) {
  return (
    <Drawer open={open} onClose={onClose} eyebrow="Rehabilitation progress report" title="Report preview">
      <div className="space-y-6 font-[family-name:var(--font-body)]">
        <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-4">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Period</p>
          <p className="mt-1 text-[13px] text-[var(--text-primary)]">1 July – 16 August 2026</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Subject</p>
          <p className="mt-1 text-[13px] text-[var(--text-primary)]">{personName}</p>
        </div>

        <Section title="Summary">
          <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
            Overall rehabilitation progress is {overallPct}%, reflecting activity across education, skills,
            program participation, learning, and milestone completion.
          </p>
        </Section>

        <Section title="Progress by category">
          <ul className="space-y-1.5">
            {categories.map((c) => (
              <li key={c.key} className="flex items-center justify-between text-[13px] text-[var(--text-secondary)]">
                <span>{c.label}</span>
                <span className="font-medium text-[var(--text-primary)]">{c.valuePct}%</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Areas requiring support">
          <ul className="space-y-1.5">
            {supportAreas.map((a) => (
              <li key={a.id} className="text-[13px] text-[var(--text-secondary)]">
                {a.area} — {a.completionPct}% complete
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Next steps">
          <ul className="space-y-1.5">
            {nextActions.slice(0, 3).map((a) => (
              <li key={a.id} className="text-[13px] text-[var(--text-secondary)]">
                {a.title}
              </li>
            ))}
          </ul>
        </Section>

        <div className="flex items-center gap-2">
          <Badge tone="structure">AI-generated summary</Badge>
          <span className="text-[11px] text-[var(--text-muted)]">Human review required before distribution</span>
        </div>
      </div>
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
