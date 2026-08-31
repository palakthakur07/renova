"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { PlanGoal, GoalPriority, GoalHorizon } from "@/types/planner";

const PRIORITY_TONE: Record<GoalPriority, "achievement" | "structure" | "neutral"> = {
  high: "achievement",
  medium: "structure",
  low: "neutral",
};
const HORIZON_LABEL: Record<GoalHorizon, string> = { short: "Short term", medium: "Medium term", long: "Long term" };

/**
 * GoalsStage (03) — the AI does not set goals (brief §13); staff and
 * the individual do. `personalGoal` is the individual's own words,
 * kept verbatim and separate from the structured goal list (brief §15).
 */
export function GoalsStage({
  goals,
  personalGoal,
  onAddGoal,
  onRemoveGoal,
  onNext,
  onBack,
}: {
  goals: PlanGoal[];
  personalGoal: string;
  onAddGoal: (title: string) => void;
  onRemoveGoal: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [newGoal, setNewGoal] = useState("");

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Current goals
        </p>

        <ul className="mt-4 space-y-2">
          {goals.map((g) => (
            <li
              key={g.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span className={cn("text-[13px]", g.priority === "high" ? "font-medium" : "")} style={{ color: "var(--text-primary)" }}>
                  {g.title}
                </span>
                <Badge tone={PRIORITY_TONE[g.priority]}>{g.priority}</Badge>
                <Badge tone="neutral">{HORIZON_LABEL[g.horizon]}</Badge>
              </div>
              <button
                onClick={() => onRemoveGoal(g.id)}
                aria-label={`Remove goal: ${g.title}`}
                className="shrink-0 text-[var(--text-muted)] transition-colors hover:text-[var(--accent-critical)]"
              >
                <Trash2 size={14} />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-2">
          <input
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newGoal.trim()) {
                onAddGoal(newGoal.trim());
                setNewGoal("");
              }
            }}
            placeholder="Add a goal…"
            className="flex-1 rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] bg-[var(--bg-canvas)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)]"
          />
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              if (newGoal.trim()) {
                onAddGoal(newGoal.trim());
                setNewGoal("");
              }
            }}
          >
            <Plus size={14} />
          </Button>
        </div>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Personal goal
        </p>
        <div className="mt-3 flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-4">
          <Quote size={16} className="mt-0.5 shrink-0 text-[var(--text-muted)]" />
          <p className="text-[14px] italic leading-relaxed text-[var(--text-secondary)]">&ldquo;{personalGoal}&rdquo;</p>
        </div>
        <p className="mt-2 text-[11px] text-[var(--text-muted)]">
          Stated by the individual, in their own words. Kept alongside the structured plan, not replaced by it.
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button onClick={onNext} disabled={goals.length === 0}>Generate rehabilitation plan</Button>
      </div>
    </motion.div>
  );
}
