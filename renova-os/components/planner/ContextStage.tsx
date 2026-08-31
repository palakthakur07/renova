"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AlertCircle, Pencil } from "lucide-react";
import { SourceTag } from "./SourceTag";
import { Button } from "@/components/ui/Button";
import type { PlanningContext } from "@/types/planner";

/**
 * ContextStage (01) — shows exactly what the AI will use, with a
 * source tag on every field (brief §7) and an honest completeness
 * indicator rather than pretending the AI has complete knowledge
 * (brief §8). Skills/interests are editable inline; identity fields
 * are not, since they come from the profile record, not this workflow.
 */
export function ContextStage({
  context,
  onUpdateInterest,
  onNext,
}: {
  context: PlanningContext;
  onUpdateInterest: (index: number, value: string) => void;
  onNext: () => void;
}) {
  const [editingInterest, setEditingInterest] = useState<number | null>(null);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Planning context
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-28 overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
              <div className="h-full rounded-full bg-[var(--accent-primary)]" style={{ width: `${context.completenessPct}%` }} />
            </div>
            <span className="font-mono text-[12px] text-[var(--text-secondary)]">{context.completenessPct}% complete</span>
          </div>
        </div>

        {context.missingFields.length > 0 && (
          <div className="mt-4 flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3 text-[12px] text-[var(--text-secondary)]">
            <AlertCircle size={14} className="mt-0.5 shrink-0 text-[var(--accent-achievement)]" />
            <span>
              Missing: {context.missingFields.join(", ")}. Plan quality may improve when additional information is available.
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Section title="Person">
          <Row label="Name" value={context.personName} source="profile" />
          <Row label="Age" value={String(context.personAge)} source="profile" />
          <Row label="Education" value={context.education} source="profile" />
          <Row label="Current status" value={context.currentStatus} source="profile" />
        </Section>

        <Section title="Rehabilitation history">
          <ListRow label="Completed programs" items={context.completedPrograms} source="profile" />
          <ListRow label="Active programs" items={context.activePrograms} source="profile" />
          <ListRow label="Recent milestones" items={context.recentMilestones} source="profile" />
        </Section>

        <Section title="Skills">
          {context.skills.map((s) => (
            <Row key={s.label} label={s.label} value={`${s.value}${/^\d+$/.test(s.value) ? "%" : ""}`} source={s.source} />
          ))}
        </Section>

        <Section title="Interests">
          {context.interests.map((interest, i) => (
            <div key={interest.label} className="flex items-center justify-between gap-3 py-1.5">
              {editingInterest === i ? (
                <input
                  autoFocus
                  defaultValue={interest.value}
                  onBlur={(e) => {
                    onUpdateInterest(i, e.target.value);
                    setEditingInterest(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                  className="w-24 rounded-[var(--radius-xs)] border border-[var(--accent-primary)] bg-[var(--bg-canvas)] px-2 py-1 text-[13px] text-[var(--text-primary)] outline-none"
                />
              ) : (
                <button
                  onClick={() => setEditingInterest(i)}
                  className="group flex items-center gap-1.5 text-[13px] text-[var(--text-primary)]"
                >
                  {interest.label}
                  <span className="text-[var(--text-muted)]">— {interest.value}</span>
                  <Pencil size={11} className="text-[var(--text-muted)] opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              )}
              <SourceTag source={interest.source} />
            </div>
          ))}
          <p className="mt-2 text-[11px] text-[var(--text-muted)]">Click a value to edit non-sensitive planning inputs.</p>
        </Section>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext}>Continue to assessment</Button>
      </div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{title}</p>
      <div className="divide-y divide-[var(--border-hairline)]">{children}</div>
    </div>
  );
}

function Row({ label, value, source }: { label: string; value: string; source: PlanningContext["skills"][number]["source"] }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 text-[13px]">
      <span className="text-[var(--text-secondary)]">{label}</span>
      <span className="flex items-center gap-2">
        <span className="text-[var(--text-primary)]">{value}</span>
        <SourceTag source={source} />
      </span>
    </div>
  );
}

function ListRow({ label, items, source }: { label: string; items: string[]; source: PlanningContext["skills"][number]["source"] }) {
  return (
    <div className="py-2">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[13px] text-[var(--text-secondary)]">{label}</span>
        <SourceTag source={source} />
      </div>
      {items.length === 0 ? (
        <p className="text-[12px] text-[var(--text-muted)]">None</p>
      ) : (
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item} className="text-[12px] text-[var(--text-primary)]">
              · {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
