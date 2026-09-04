"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLearningProgress } from "@/components/providers/LearningProgressProvider";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { calculateOverallProgress } from "@/lib/progress/progressEngine";
import type { ProgressCategory, ActivityEvent } from "@/types/progress";

const DEMO_LESSON_ID = "lesson-spreadsheets";
const DEMO_SKILL_ID = "productivity";
const DEMO_SKILL_DELTA = 4;

/**
 * CompleteLessonDemo — the strongest cross-module demonstration in
 * Phase 7 (brief §53–54). Triggering "Complete current lesson" calls
 * the same completeLesson() the Learning Companion itself uses
 * (components/providers/LearningProgressProvider.tsx), so this isn't
 * a simulated update — it's the real Phase 6 store, reflected live in
 * Phase 7's Learning category, milestone progress, and activity feed.
 */
export function CompleteLessonDemo({
  categories,
  onCategoriesChange,
  onActivityAdded,
}: {
  categories: ProgressCategory[];
  onCategoriesChange: (next: ProgressCategory[]) => void;
  onActivityAdded: (activity: ActivityEvent) => void;
}) {
  const { progress, completeLesson } = useLearningProgress();
  const { pushToast } = useNotifications();
  const [beforeAfter, setBeforeAfter] = useState<{ before: number; after: number } | null>(null);

  const alreadyCompleted = progress.lessonsCompleted.includes(DEMO_LESSON_ID);
  const before = calculateOverallProgress(categories);

  const handleComplete = () => {
    if (alreadyCompleted) return;
    completeLesson(DEMO_LESSON_ID, DEMO_SKILL_ID, DEMO_SKILL_DELTA);

    const next = categories.map((c) =>
      c.key === "learning" ? { ...c, valuePct: Math.min(100, c.valuePct + 2) } : c
    );
    onCategoriesChange(next);

    onActivityAdded({
      id: `act-demo-${Date.now()}`,
      date: "Today",
      category: "education",
      activity: "Completed Spreadsheet Essentials lesson",
      impact: "Learning +2",
      relatedSkill: "Productivity",
      relatedGoal: "Technology Employment",
    });

    const after = calculateOverallProgress(next);
    setBeforeAfter({ before, after });
    pushToast({
      title: "Progress updated",
      detail: `Overall rehabilitation progress: ${before}% → ${after}%.`,
      tone: "growth",
    });
  };

  return (
    <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Live demo</p>
          <p className="mt-1 text-[13px] font-medium text-[var(--text-primary)]">
            Complete a lesson in the Learning Companion and watch progress recalculate here.
          </p>
        </div>
        <Button size="md" onClick={handleComplete} disabled={alreadyCompleted}>
          <PlayCircle size={15} className="mr-1.5" />
          {alreadyCompleted ? "Lesson completed" : "Complete current lesson"}
        </Button>
      </div>

      <AnimatePresence>
        {beforeAfter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex items-center gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-3.5"
          >
            <span className="font-mono text-[13px] text-[var(--text-muted)]">{beforeAfter.before}%</span>
            <ArrowRight size={14} className="text-[var(--accent-primary)]" />
            <span className="font-mono text-[13px] font-semibold text-[var(--accent-growth)]">
              {beforeAfter.after}%
            </span>
            <span className="ml-auto text-[12px] text-[var(--text-secondary)]">
              +{beforeAfter.after - beforeAfter.before} · Spreadsheet Essentials lesson completed
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
