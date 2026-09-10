import { z } from "zod";
import { generateAnalyticsInsights } from "@/lib/ai/analyticsInsights";
import type { AnalyticsInsight } from "@/types/analytics";

/**
 * SERVICE BOUNDARY — same shape as
 * lib/services/reintegrationGuideService.ts and
 * lib/services/counselorAssistantService.ts. UI never imports
 * lib/ai/analyticsInsights directly.
 */

const analyticsInsightSchema = z.object({
  id: z.string(),
  title: z.string(),
  observation: z.string(),
  evidence: z.array(z.string()),
  confidence: z.enum(["high", "medium", "low"]),
  suggestedReview: z.string(),
  category: z.enum(["learning", "employment", "communication", "counseling", "documentation", "housing"]),
  drillHref: z.string().optional(),
});

export type AnalyticsInsightsResult =
  | { success: true; insights: AnalyticsInsight[] }
  | { success: false; message: string };

export async function requestAnalyticsInsights(options?: { simulateError?: boolean }): Promise<AnalyticsInsightsResult> {
  await new Promise((r) => setTimeout(r, 500));
  if (options?.simulateError) {
    return { success: false, message: "ReNova Intelligence is temporarily unavailable." };
  }
  const parsed = z.array(analyticsInsightSchema).min(1).safeParse(await generateAnalyticsInsights());
  if (!parsed.success) {
    return { success: false, message: "ReNova Intelligence is temporarily unavailable." };
  }
  return { success: true, insights: parsed.data as AnalyticsInsight[] };
}
