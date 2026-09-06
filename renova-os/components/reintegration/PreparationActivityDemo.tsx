"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { calculateOverallPreparation } from "@/lib/reintegration/reintegrationEngine";
import type { ReintegrationCategory, ReintegrationActivityEvent } from "@/types/reintegration";

const DEMO_ACTIVITY_ID = "resume-communication-module";

/**
 * PreparationActivityDemo — the strongest end-to-end demonstration in
 * Phase 8 (brief §14). Completing "Resume & Professional
 * Communication" recalculates Employment Preparation and, through it,
 * Overall Reintegration Preparation — proving this is one connected
 * system (Learning → Skill → Employment Preparation → Overall
 * Preparation), the same closed loop Phase 7's CompleteLessonDemo
 * demonstrates one phase earlier.
 */
export function PreparationActivityDemo({
  categories,
  onCategoriesChange,
  onActivityAdded,
  onEmploymentActionCompleted,
}: {
  categories: ReintegrationCategory[];
  onCategoriesChange: (next: ReintegrationCategory[]) => void;
  onActivityAdded: (activity: ReintegrationActivityEvent) => void;
  onEmploymentActionCompleted: () => void;
}) {
  const { pushToast } = useNotifications();
  const [completed, setCompleted] = useState(false);
  const [beforeAfter, setBeforeAfter] = useState<{
    before: number;
    after: number;
    employmentBefore: number;
    employmentAfter: number;
  } | null>(null);

  const before = calculateOverallPreparation(categories);

  const handleComplete = () => {
    if (completed) return;

    const next = categories.map((c) =>
      c.id === "employment" ? { ...c, progress: Math.min(100, c.progress + 10), completedItems: c.completedItems + 1 } : c
    );
    onCategoriesChange(next);
    onEmploymentActionCompleted();

    onActivityAdded({
      id: `ra-demo-${Date.now()}`,
      date: "Today",
      title: "Completed professional communication module",
      category: "employment",
      impact: "Employment preparation +10",
    });

    const after = calculateOverallPreparation(next);
    const employmentBefore = categories.find((c) => c.id === "employment")?.progress ?? 0;
    const employmentAfter = next.find((c) => c.id === "employment")?.progress ?? 0;
    setBeforeAfter({ before, after, employmentBefore, employmentAfter });
    setCompleted(true);
    pushToast({
      title: "Preparation updated",
      detail: `Overall reintegration preparation: ${before}% → ${after}%.`,
      tone: "growth",
    });
  };

  return (
    <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Live demo</p>
          <p className="mt-1 text-[13px] font-medium text-[var(--text-primary)]">
            Complete &quot;Resume &amp; Professional Communication&quot; and watch preparation recalculate below.
          </p>
        </div>
        <Button size="md" onClick={handleComplete} disabled={completed}>
          <PlayCircle size={15} className="mr-1.5" />
          {completed ? "Activity completed" : "Complete activity"}
        </Button>
      </div>

      <AnimatePresence>
        {beforeAfter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 space-y-2 overflow-hidden"
            data-testid={DEMO_ACTIVITY_ID}
          >
            <div className="flex flex-wrap items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-3.5">
              <span className="font-mono text-[11px] text-[var(--text-muted)]">Employment prep</span>
              <span className="font-mono text-[13px] text-[var(--text-muted)]">{beforeAfter.employmentBefore}%</span>
              <ArrowRight size={13} className="text-[var(--accent-primary)]" />
              <span className="font-mono text-[13px] font-semibold text-[var(--accent-growth)]">
                {beforeAfter.employmentAfter}%
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-3.5">
              <span className="font-mono text-[11px] text-[var(--text-muted)]">Overall preparation</span>
              <span className="font-mono text-[13px] text-[var(--text-muted)]">{beforeAfter.before}%</span>
              <ArrowRight size={13} className="text-[var(--accent-primary)]" />
              <span className="font-mono text-[13px] font-semibold text-[var(--accent-growth)]">
                {beforeAfter.after}%
              </span>
              <span className="ml-auto text-[12px] text-[var(--text-secondary)]">
                +{beforeAfter.after - beforeAfter.before} · Communication module completed
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
