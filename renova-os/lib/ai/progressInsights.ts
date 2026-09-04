import type { ProgressInsight } from "@/types/progress";

/**
 * MOCK AI ENGINE
 * ------------------------------------------------------------------
 * Same pattern as lib/ai/rehabilitationPlanner.ts and
 * lib/ai/learningCompanion.ts: a pure, deterministic function
 * standing in for a future model call. The swap-in boundary is the
 * function signature — (context) => Promise<ProgressInsight[]> — a
 * real implementation replaces the body with a model call plus a
 * mapping step into this same shape. Nothing above the service layer
 * (lib/services/progressInsightsService.ts) needs to change.
 *
 * Every insight stays in decision-support register and is explicitly
 * marked for human review — this module never outputs a risk score,
 * a behavior prediction, or a judgment about the person.
 * ------------------------------------------------------------------
 */

export interface ProgressInsightContext {
  personName: string;
  learningActivityChangePct: number;
  strongestImprovement: { label: string; from: number; to: number };
  lowestParticipationArea: { label: string; completionPct: number };
}

export async function generateProgressInsights(context: ProgressInsightContext): Promise<ProgressInsight[]> {
  return [
    {
      id: "pi-1",
      observation: `Recent learning activity suggests strong engagement with digital skills. ${context.lowestParticipationArea.label} currently has lower completion than education activities and may benefit from additional structured support.`,
      evidence: [
        `Learning activity +${context.learningActivityChangePct}%`,
        `${context.strongestImprovement.label} +${context.strongestImprovement.to - context.strongestImprovement.from} points`,
        `${context.lowestParticipationArea.label} ${context.lowestParticipationArea.completionPct}%`,
      ],
      category: "learning",
      confidence: "medium",
      suggestedAction: `Consider scheduling structured ${context.lowestParticipationArea.label.toLowerCase()} support.`,
      requiresHumanReview: true,
    },
  ];
}
