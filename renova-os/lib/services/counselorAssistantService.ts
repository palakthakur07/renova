import { z } from "zod";
import {
  generateSessionBrief,
  generateProgressInsight,
  generateNextActions,
  type CounselorAssistantContext,
} from "@/lib/ai/counselorAssistant";
import type { SessionBrief, CounselorInsight, CounselorAction } from "@/types/counselor";

/**
 * SERVICE BOUNDARY
 * ------------------------------------------------------------------
 * Same shape as lib/services/reintegrationGuideService.ts: the UI
 * never imports lib/ai/counselorAssistant directly. Today this calls
 * the mock engine in-process with a simulated delay; later, only this
 * file changes to a real fetch().
 * ------------------------------------------------------------------
 */

const sessionBriefSchema = z.object({
  focus: z.string(),
  recentProgress: z.array(z.string()),
  positiveSignals: z.array(z.string()),
  needsAttention: z.array(z.string()),
  suggestedQuestions: z.array(z.string()),
  suggestedFollowUp: z.string(),
  confidence: z.enum(["high", "medium", "low"]),
});

const insightSchema = z.object({
  id: z.string(),
  observation: z.string(),
  evidence: z.array(z.string()),
  confidence: z.enum(["high", "medium", "low"]),
});

const actionSchema = z.object({
  id: z.string(),
  title: z.string(),
  reason: z.string(),
  state: z.enum(["suggested", "accepted", "dismissed"]),
});

type Result<T> = { success: true; data: T } | { success: false; message: string };

const UNAVAILABLE = "The AI assistant is temporarily unavailable.";

export async function requestSessionBrief(
  context: CounselorAssistantContext,
  options?: { simulateError?: boolean }
): Promise<Result<SessionBrief>> {
  await new Promise((r) => setTimeout(r, 900));
  if (options?.simulateError) return { success: false, message: UNAVAILABLE };
  const parsed = sessionBriefSchema.safeParse(await generateSessionBrief(context));
  return parsed.success ? { success: true, data: parsed.data } : { success: false, message: UNAVAILABLE };
}

export async function requestProgressInsight(
  context: CounselorAssistantContext,
  options?: { simulateError?: boolean }
): Promise<Result<CounselorInsight>> {
  await new Promise((r) => setTimeout(r, 700));
  if (options?.simulateError) return { success: false, message: UNAVAILABLE };
  const parsed = insightSchema.safeParse(await generateProgressInsight(context));
  return parsed.success ? { success: true, data: parsed.data } : { success: false, message: UNAVAILABLE };
}

export async function requestNextActions(
  context: CounselorAssistantContext,
  options?: { simulateError?: boolean }
): Promise<Result<CounselorAction[]>> {
  await new Promise((r) => setTimeout(r, 700));
  if (options?.simulateError) return { success: false, message: UNAVAILABLE };
  const parsed = z.array(actionSchema).safeParse(await generateNextActions(context));
  return parsed.success ? { success: true, data: parsed.data } : { success: false, message: UNAVAILABLE };
}
