import type { SessionBrief, CounselorInsight, CounselorAction } from "@/types/counselor";

/**
 * MOCK AI ENGINE
 * ------------------------------------------------------------------
 * Same pattern as lib/ai/reintegrationGuide.ts and
 * lib/ai/progressInsights.ts: pure, deterministic functions standing
 * in for a future model call. A real implementation replaces each
 * function body with a model call plus a mapping step into the same
 * return shape — nothing above the service layer
 * (lib/services/counselorAssistantService.ts) needs to change.
 *
 * Every function here is explicitly SUPPORTIVE, structured decision
 * support (brief §19): no criminality/recidivism/parole/sentencing
 * predictions, no risk or "dangerousness" scores, no diagnosis, no
 * moral judgments. Output always references observable rehabilitation
 * data and always requires counselor review before it becomes part of
 * an official record.
 * ------------------------------------------------------------------
 */

export interface CounselorAssistantContext {
  personName: string;
  currentFocus: string;
  goals: string[];
  recentProgress: string[];
  recentNoteSummary?: string;
}

/** "PREPARE SESSION" (brief §6, §18). */
export async function generateSessionBrief(context: CounselorAssistantContext): Promise<SessionBrief> {
  return {
    focus: context.currentFocus,
    recentProgress: context.recentProgress,
    positiveSignals: [
      "Consistent learning participation over the last two weeks.",
      `Progress recorded toward: ${context.goals[0] ?? "current goal"}.`,
    ],
    needsAttention: ["Employment preparation remains incomplete."],
    suggestedQuestions: [
      "What part of employment preparation feels most difficult?",
      "Would additional practice with professional communication help?",
      "What support is needed before the next milestone?",
    ],
    suggestedFollowUp: "Review the employment preparation pathway together.",
    confidence: "medium",
  };
}

/** "PROGRESS INSIGHT" (brief §6). */
export async function generateProgressInsight(context: CounselorAssistantContext): Promise<CounselorInsight> {
  return {
    id: `ci-${Date.now()}`,
    observation:
      "Communication learning has increased over the last two weeks, while employment preparation remains incomplete.",
    evidence: [...context.recentProgress],
    confidence: "medium",
  };
}

/** "NEXT ACTIONS" (brief §6). */
export async function generateNextActions(context: CounselorAssistantContext): Promise<CounselorAction[]> {
  return [
    { id: "ca1", title: "Review employment preparation", reason: "Currently incomplete relative to other areas.", state: "suggested" },
    { id: "ca2", title: "Schedule communication practice", reason: "Builds on recent module completion.", state: "suggested" },
    { id: "ca3", title: "Check course completion", reason: `Confirms progress toward: ${context.goals[1] ?? "current goal"}.`, state: "suggested" },
    { id: "ca4", title: "Follow up on pending milestone", reason: "A milestone is close to completion and may need a nudge.", state: "suggested" },
  ];
}
