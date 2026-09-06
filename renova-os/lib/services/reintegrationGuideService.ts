import { z } from "zod";
import { generateReintegrationInsights, type ReintegrationGuideContext } from "@/lib/ai/reintegrationGuide";
import type { ReintegrationInsight } from "@/types/reintegration";

/**
 * SERVICE BOUNDARY
 * ------------------------------------------------------------------
 * Same shape as lib/services/progressInsightsService.ts: the UI never
 * imports lib/ai/reintegrationGuide directly. Today this calls the
 * mock engine in-process with a simulated delay; later, only this
 * file changes to a real fetch(). Every consumer is written against
 * ReintegrationGuideResult, not against how the insight was produced.
 * ------------------------------------------------------------------
 */

const reintegrationInsightSchema = z.object({
  id: z.string(),
  type: z.enum(["priority", "opportunity", "support", "next-step"]),
  title: z.string(),
  explanation: z.string(),
  evidence: z.array(z.string()),
  confidence: z.enum(["high", "medium", "low"]),
  requiresStaffReview: z.literal(true),
});

export const reintegrationInsightsSchema = z.array(reintegrationInsightSchema).min(1);

export type ReintegrationGuideResult =
  | { success: true; insights: ReintegrationInsight[] }
  | { success: false; message: string };

/**
 * `simulateError` mirrors requestProgressInsights — it exercises the
 * "AI insight unavailable" empty state (brief §22) since the mock
 * engine otherwise always succeeds.
 */
export async function requestReintegrationGuide(
  context: ReintegrationGuideContext,
  options?: { simulateError?: boolean }
): Promise<ReintegrationGuideResult> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (options?.simulateError) {
    return { success: false, message: "The AI Reintegration Guide is temporarily unavailable." };
  }

  try {
    const insights = await generateReintegrationInsights(context);
    const parsed = reintegrationInsightsSchema.safeParse(insights);
    if (!parsed.success) {
      return { success: false, message: "The AI Reintegration Guide is temporarily unavailable." };
    }
    return { success: true, insights: parsed.data as ReintegrationInsight[] };
  } catch {
    return { success: false, message: "The AI Reintegration Guide is temporarily unavailable." };
  }
}
