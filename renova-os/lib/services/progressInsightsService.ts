import { z } from "zod";
import { generateProgressInsights, type ProgressInsightContext } from "@/lib/ai/progressInsights";
import type { ProgressInsight } from "@/types/progress";

/**
 * SERVICE BOUNDARY
 * ------------------------------------------------------------------
 * Same shape as lib/services/rehabilitationPlannerService.ts: the UI
 * never imports lib/ai/progressInsights directly. Today this calls
 * the mock engine in-process with a simulated delay; later, only this
 * file changes to a real fetch(). Every consumer is written against
 * ProgressInsightsResult, not against how the insight was produced.
 * ------------------------------------------------------------------
 */

const progressInsightSchema = z.object({
  id: z.string(),
  observation: z.string(),
  evidence: z.array(z.string()),
  category: z.enum(["education", "skills", "participation", "learning", "milestones", "general"]),
  confidence: z.enum(["high", "medium", "low"]),
  suggestedAction: z.string(),
  requiresHumanReview: z.boolean(),
});

export const progressInsightsSchema = z.array(progressInsightSchema).min(1);

export type ProgressInsightsResult =
  | { success: true; insights: ProgressInsight[] }
  | { success: false; message: string };

/**
 * `simulateError` exists purely so the "Progress intelligence is
 * temporarily unavailable" path (brief §41) is exercised in
 * demos/tests, since the mock engine otherwise always succeeds.
 */
export async function requestProgressInsights(
  context: ProgressInsightContext,
  options?: { simulateError?: boolean }
): Promise<ProgressInsightsResult> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (options?.simulateError) {
    return { success: false, message: "Progress intelligence is temporarily unavailable." };
  }

  try {
    const insights = await generateProgressInsights(context);
    const parsed = progressInsightsSchema.safeParse(insights);
    if (!parsed.success) {
      return { success: false, message: "Progress intelligence is temporarily unavailable." };
    }
    return { success: true, insights: parsed.data as ProgressInsight[] };
  } catch {
    return { success: false, message: "Progress intelligence is temporarily unavailable." };
  }
}
