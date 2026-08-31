import { z } from "zod";
import { generateRehabilitationPlan } from "@/lib/ai/rehabilitationPlanner";
import type { PlanningContext, PlanGoal, RehabilitationPlan } from "@/types/planner";

/**
 * SERVICE BOUNDARY
 * ------------------------------------------------------------------
 * The UI never imports lib/ai/rehabilitationPlanner directly — it
 * calls requestRehabilitationPlan(), same as it eventually would for
 * a real backend: Frontend → API → FastAPI/Node → model → structured
 * response. Today this function just calls the mock engine in-process
 * with a simulated delay; later, only this file's implementation
 * changes to an actual fetch() call. Every consumer (GenerationStage)
 * is written against the return type below, not against how the plan
 * was produced.
 * ------------------------------------------------------------------
 */

const confidenceSchema = z.enum(["high", "medium", "low"]);

const evidenceSignalSchema = z.object({ label: z.string(), detail: z.string() });

const recommendationSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(["education", "skill-development", "counseling", "employment-prep", "life-skills", "reintegration"]),
  priority: z.enum(["high", "medium", "low"]),
  reason: z.string(),
  expectedOutcome: z.string(),
  durationWeeks: z.number().positive(),
  prerequisites: z.array(z.string()),
  confidence: confidenceSchema,
  evidence: z.array(evidenceSignalSchema),
  successCriteria: z.array(z.string()),
});

const roadmapNodeSchema = z.object({
  id: z.string(),
  recommendationId: z.string(),
  title: z.string(),
  category: recommendationSchema.shape.category,
  durationWeeks: z.number().positive(),
  order: z.number().int().nonnegative(),
  parallelGroup: z.number().optional(),
});

const milestoneSchema = z.object({
  id: z.string(),
  order: z.number().int().nonnegative(),
  title: z.string(),
  description: z.string(),
  successCriteria: z.array(z.string()),
});

const alternativePathSchema = z.object({
  id: z.string(),
  type: z.enum(["primary", "alternative", "secondary"]),
  label: z.string(),
  description: z.string(),
  confidence: confidenceSchema,
});

/** Validates the mock (and, later, real) AI engine's output before the UI ever renders it. */
export const rehabilitationPlanSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  status: z.enum(["draft", "active"]),
  primaryGoalTitle: z.string(),
  summary: z.string(),
  estimatedDurationWeeks: z.number().positive(),
  confidence: confidenceSchema,
  strengths: z.array(evidenceSignalSchema),
  developmentAreas: z.array(evidenceSignalSchema),
  recommendations: z.array(recommendationSchema).min(1),
  roadmap: z.array(roadmapNodeSchema),
  milestones: z.array(milestoneSchema),
  alternatives: z.array(alternativePathSchema),
  warnings: z.array(z.string()),
  explanationFactors: z.array(z.string()),
});

export type PlannerErrorCode =
  | "ai-unavailable"
  | "incomplete-context"
  | "invalid-output"
  | "timeout"
  | "network-error"
  | "no-recommendations";

export interface PlannerError {
  code: PlannerErrorCode;
  message: string;
}

export type PlannerResult =
  | { success: true; plan: RehabilitationPlan }
  | { success: false; error: PlannerError };

/**
 * `simulateError` exists purely so this failure path is exercised in
 * demos/tests, since the mock engine otherwise always succeeds — it is
 * not read from any real failure condition today. A real backend
 * integration would remove this parameter entirely; every PlannerError
 * branch below stays, driven by real try/catch and validation results.
 */
export async function requestRehabilitationPlan(
  context: PlanningContext,
  goals: PlanGoal[],
  options?: { simulateError?: PlannerErrorCode }
): Promise<PlannerResult> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (options?.simulateError) {
    return { success: false, error: describeError(options.simulateError) };
  }

  if (!context.profileId) {
    return { success: false, error: describeError("incomplete-context") };
  }

  if (goals.length === 0) {
    return { success: false, error: describeError("no-recommendations") };
  }

  try {
    const plan = await generateRehabilitationPlan(context, goals);
    const parsed = rehabilitationPlanSchema.safeParse(plan);
    if (!parsed.success) {
      return { success: false, error: describeError("invalid-output") };
    }
    return { success: true, plan: parsed.data as RehabilitationPlan };
  } catch {
    return { success: false, error: describeError("ai-unavailable") };
  }
}

function describeError(code: PlannerErrorCode): PlannerError {
  const messages: Record<PlannerErrorCode, string> = {
    "ai-unavailable": "ReNova Intelligence is unavailable. Your profile is safe — you can continue reviewing existing rehabilitation information while AI services are unavailable.",
    "incomplete-context": "Planning context is incomplete. A profile must be loaded before a plan can be generated.",
    "invalid-output": "Rehabilitation plan could not be validated.",
    timeout: "The planning request took too long to complete.",
    "network-error": "A network error interrupted the planning request.",
    "no-recommendations": "At least one goal is needed before a plan can be generated.",
  };
  return { code, message: messages[code] };
}
