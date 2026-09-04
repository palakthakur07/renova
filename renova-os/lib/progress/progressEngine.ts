import type {
  ProgressCategory,
  SkillProgress,
  LearningProgressSnapshot,
  MilestoneProgress,
  ProgressSnapshot,
} from "@/types/progress";

/**
 * PROGRESS ENGINE
 * ------------------------------------------------------------------
 * The single, centralized place Rehabilitation Progress Intelligence
 * is calculated. UI components never compute a percentage inline —
 * they call one of these pure functions and render the result. That
 * boundary is what keeps the system explainable (brief §6–7): every
 * number on /progress can be traced back to a function here, and the
 * same weights shown in the UI are the weights actually used.
 *
 * This is a prototype progress model, not a validated psychometric
 * instrument — the weights below are illustrative and easy to retune
 * in one place as the underlying program data model matures.
 * ------------------------------------------------------------------
 */

export interface WeightedContribution {
  key: ProgressCategory["key"];
  label: string;
  valuePct: number;
  weightPct: number;
  contribution: number;
}

/** Combines the five weighted categories into a single overall percentage. Weights are expected to sum to 100. */
export function calculateOverallProgress(categories: ProgressCategory[]): number {
  const total = categories.reduce((sum, c) => sum + c.valuePct * (c.weightPct / 100), 0);
  return Math.round(total);
}

/** Returns each category's raw value × weight contribution, for the explainability drawer. */
export function calculateCategoryProgress(categories: ProgressCategory[]): WeightedContribution[] {
  return categories.map((c) => ({
    key: c.key,
    label: c.label,
    valuePct: c.valuePct,
    weightPct: c.weightPct,
    contribution: Math.round(c.valuePct * (c.weightPct / 100)),
  }));
}

/** Signed change between a skill's previous and current score. */
export function calculateSkillChange(previousScore: number, currentScore: number): number {
  return Math.round(currentScore - previousScore);
}

/** Average completion across skill entries — used to derive the "Skills" category value. */
export function calculateAverageSkillProgress(skills: SkillProgress[]): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, s) => sum + s.currentScore, 0);
  return Math.round(total / skills.length);
}

/** Weighted milestone completion (complete = full weight, in-progress = partial, upcoming = none). */
export function calculateMilestoneCompletion(milestones: MilestoneProgress[]): number {
  if (milestones.length === 0) return 0;
  const total = milestones.reduce((sum, m) => sum + m.completionPct, 0);
  return Math.round(total / milestones.length);
}

/**
 * Blends a static demo baseline with live values from
 * useLearningProgress() (Phase 6) into a single 0–100 learning
 * progress figure, so the "Learning" category reflects Phase 6
 * activity as it happens rather than a frozen snapshot.
 */
export function calculateLearningProgress(
  baseline: LearningProgressSnapshot,
  live: { lessonsCompleted: number; averageAssessmentScorePct: number }
): number {
  const lessonCompletionPct = (Math.max(live.lessonsCompleted, baseline.lessonsCompleted) / baseline.lessonsTotal) * 100;
  const courseCompletionPct = (baseline.coursesCompleted / baseline.coursesTotal) * 100;
  const blended = lessonCompletionPct * 0.5 + courseCompletionPct * 0.25 + live.averageAssessmentScorePct * 0.25;
  return Math.round(Math.min(100, blended));
}

export type TrendDirection = "up" | "down" | "flat";

export interface TrendResult {
  direction: TrendDirection;
  deltaPct: number;
  /** Deliberately neutral language — see brief §31: never "declined," never "improved" as a value judgment. */
  summary: string;
}

/** Compares the two most recent progress snapshots. Never implies progress "should" always increase. */
export function calculateTrend(history: ProgressSnapshot[]): TrendResult {
  if (history.length < 2) {
    return { direction: "flat", deltaPct: 0, summary: "Not enough history to show a trend yet." };
  }
  const [latest, previous] = history;
  const delta = latest.overallPct - previous.overallPct;
  if (delta === 0) {
    return { direction: "flat", deltaPct: 0, summary: "Progress held steady since the last update." };
  }
  const direction: TrendDirection = delta > 0 ? "up" : "down";
  const summary =
    direction === "up"
      ? `Progress changed by +${delta} since ${previous.date}.`
      : `Progress changed by ${delta} since ${previous.date}.${previous.note ? ` ${previous.note}` : ""}`;
  return { direction, deltaPct: delta, summary };
}
