import { z } from "zod";
import * as engine from "@/lib/ai/learningCompanion";
import type { AIExplanation, ExplanationLevel, LearnerContext, Question } from "@/types/learning";

/**
 * SERVICE BOUNDARY — same pattern as
 * lib/services/rehabilitationPlannerService.ts. The UI (LearningGuidePanel)
 * only ever imports from here, never from lib/ai/learningCompanion
 * directly, and every response is Zod-validated before it can reach
 * a component. A real backend integration later replaces only the
 * bodies of the functions below.
 */

const aiExplanationSchema = z.object({
  explanation: z.string().min(1),
  examples: z.array(z.string()),
  recommendedNextStep: z.string(),
  difficulty: z.enum(["foundation", "standard", "challenge"]),
  confidence: z.enum(["high", "medium", "low"]),
});

export type LearningServiceResult<T> =
  | { success: true; data: T }
  | { success: false; message: string };

export async function requestLessonExplanation(
  lessonId: string,
  level: ExplanationLevel,
  context: LearnerContext,
  options?: { simulateUnavailable?: boolean }
): Promise<LearningServiceResult<AIExplanation>> {
  await new Promise((r) => setTimeout(r, 220));

  if (options?.simulateUnavailable) {
    return { success: false, message: "Learning guidance is temporarily unavailable. Continue with the lesson content." };
  }

  try {
    const result = await engine.getLessonExplanation(lessonId, level, context);
    const parsed = aiExplanationSchema.safeParse(result);
    if (!parsed.success) {
      return { success: false, message: "Learning guidance is temporarily unavailable. Continue with the lesson content." };
    }
    return { success: true, data: parsed.data as AIExplanation };
  } catch {
    return { success: false, message: "Learning guidance is temporarily unavailable. Continue with the lesson content." };
  }
}

export async function requestPracticeQuestion(
  lessonId: string,
  difficulty: "foundation" | "standard" | "challenge"
): Promise<LearningServiceResult<Question>> {
  await new Promise((r) => setTimeout(r, 180));
  try {
    const question = await engine.generatePracticeQuestion(lessonId, difficulty);
    return { success: true, data: question };
  } catch {
    return { success: false, message: "Couldn't generate a new question right now. Try the existing practice questions instead." };
  }
}

export async function requestAnswerEvaluation(
  question: Question,
  answer: { selectedOptionId?: string; inputValue?: string }
): Promise<LearningServiceResult<{ correct: boolean; explanation: string }>> {
  try {
    const result = await engine.evaluateAnswer(question, answer);
    return { success: true, data: result };
  } catch {
    return { success: false, message: "Couldn't evaluate that answer. Please try again." };
  }
}

export async function requestLessonSummary(lessonId: string): Promise<LearningServiceResult<string>> {
  try {
    const summary = await engine.summarizeLesson(lessonId);
    return { success: true, data: summary };
  } catch {
    return { success: false, message: "Summary is temporarily unavailable." };
  }
}

export async function requestNextActivity(context: LearnerContext): Promise<LearningServiceResult<{ title: string; reason: string }>> {
  try {
    const result = await engine.recommendNextActivity(context);
    return { success: true, data: result };
  } catch {
    return { success: false, message: "Recommendations are temporarily unavailable." };
  }
}
