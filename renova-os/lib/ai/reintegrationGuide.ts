import type { ReintegrationInsight } from "@/types/reintegration";

/**
 * MOCK AI ENGINE
 * ------------------------------------------------------------------
 * Same pattern as lib/ai/progressInsights.ts and
 * lib/ai/rehabilitationPlanner.ts: a pure, deterministic function
 * standing in for a future model call. The swap-in boundary is the
 * function signature — (context) => Promise<ReintegrationInsight[]> —
 * a real implementation replaces the body with a model call plus a
 * mapping step into this same shape. Nothing above the service layer
 * (lib/services/reintegrationGuideService.ts) needs to change.
 *
 * "AI REINTEGRATION GUIDE" (brief §11) — every insight is structured
 * decision support that must reference observable data, is always
 * marked for staff review, and never outputs a risk score, a release
 * recommendation, or a prediction about the person's future.
 * ------------------------------------------------------------------
 */

export interface ReintegrationGuideContext {
  personName: string;
  employmentPreparationPct: number;
  housingPreparationPct: number;
  strongestCategory: { name: string; progress: number };
  weakestCategory: { name: string; progress: number };
  recentlyCompletedActivity?: string;
}

export async function generateReintegrationInsights(
  context: ReintegrationGuideContext
): Promise<ReintegrationInsight[]> {
  const insights: ReintegrationInsight[] = [
    {
      id: "ri-priority",
      type: "priority",
      title: "Employment preparation should be prioritized next",
      explanation: `The current learning pathway has already developed relevant foundational skills, and employment preparation is currently at ${context.employmentPreparationPct}%. Building on that momentum is likely to have the most impact right now.`,
      evidence: [
        `Employment preparation ${context.employmentPreparationPct}% complete`,
        `Strongest area: ${context.strongestCategory.name} at ${context.strongestCategory.progress}%`,
      ],
      confidence: "medium",
      requiresStaffReview: true,
    },
    {
      id: "ri-opportunity",
      type: "opportunity",
      title: "Communication module supports interview practice",
      explanation:
        "Completing the current communication module would strengthen preparation for interview practice, since the two draw on the same underlying skill.",
      evidence: [
        context.recentlyCompletedActivity ?? "Recent learning activity in communication skills",
        "Interview Practice preparation action currently in progress",
      ],
      confidence: "medium",
      requiresStaffReview: true,
    },
    {
      id: "ri-support",
      type: "support",
      title: `${context.weakestCategory.name} may benefit from earlier staff attention`,
      explanation: `${context.weakestCategory.name} is currently less complete than other preparation areas (${context.weakestCategory.progress}%), which suggests it may benefit from earlier staff attention and planning.`,
      evidence: [
        `${context.weakestCategory.name} ${context.weakestCategory.progress}% complete`,
        `Housing planning ${context.housingPreparationPct}%`,
      ],
      confidence: "medium",
      requiresStaffReview: true,
    },
    {
      id: "ri-next-step",
      type: "next-step",
      title: "Schedule an employment preparation session",
      explanation:
        "Based on completed skills development and the current preparation checklist, an employment preparation session with staff is a reasonable next step to review pathways and next actions.",
      evidence: [`${context.personName}'s recent activity history`, "Preparation checklist status"],
      confidence: "high",
      requiresStaffReview: true,
    },
  ];

  return insights;
}
