import type { AIExplanation, ExplanationLevel, Question, LearnerContext } from "@/types/learning";
import { explanationsByLevel, hintsByLesson } from "@/lib/demo-data/learning/aiResponses";
import { practiceQuestionPool } from "@/lib/demo-data/learning/questions";

/**
 * MOCK AI ENGINE — RE:NOVA LEARNING GUIDE
 * ------------------------------------------------------------------
 * Same pattern as Phase 5's lib/ai/rehabilitationPlanner.ts: pure,
 * deterministic functions returning structured demo output, isolated
 * here so a real model integration later only touches this file.
 * Every function signature already matches what a real call would
 * need (lessonId + context in, structured AIExplanation-shaped data
 * out) — nothing above lib/services/learningCompanionService.ts
 * would need to change.
 * ------------------------------------------------------------------
 */

export async function getLessonExplanation(
  lessonId: string,
  level: ExplanationLevel,
  context: LearnerContext
): Promise<AIExplanation> {
  void context; // not read by the mock engine yet — kept in the signature since a real model call would use it
  const byLevel = explanationsByLevel[lessonId];
  const explanation = byLevel?.[level] ?? "Explanation is not available for this lesson yet.";

  return {
    explanation,
    examples: byLevel ? [explanationsByLevel[lessonId].example] : [],
    recommendedNextStep: "Try the practice question below to check your understanding.",
    difficulty: "foundation",
    confidence: "high",
  };
}

export async function generatePracticeQuestion(
  lessonId: string,
  difficulty: "foundation" | "standard" | "challenge"
): Promise<Question> {
  const pool = practiceQuestionPool.filter((q) => q.difficulty === difficulty);
  return pool[0] ?? practiceQuestionPool[0];
}

export async function evaluateAnswer(
  question: Question,
  answer: { selectedOptionId?: string; inputValue?: string }
): Promise<{ correct: boolean; explanation: string }> {
  const correct =
    question.kind === "multiple-choice"
      ? answer.selectedOptionId === question.correctOptionId
      : answer.inputValue?.trim() === question.correctInput;

  return { correct, explanation: question.explanation };
}

export async function summarizeLesson(lessonId: string): Promise<string> {
  if (lessonId === "lesson-variables") {
    return "This lesson covered variables as named storage locations, using spreadsheet cells as a concrete parallel — a formula always reads whatever value is currently stored.";
  }
  return "Lesson summary is not available yet.";
}

export async function recommendNextActivity(
  context: LearnerContext
): Promise<{ title: string; reason: string }> {
  if (context.topicsNeedingReinforcement.length > 0) {
    return {
      title: `Additional practice: ${context.topicsNeedingReinforcement[0]}`,
      reason: "Based on your recent answers, an additional foundation exercise may help before moving forward.",
    };
  }
  return {
    title: "Continue to Creating a Spreadsheet",
    reason: "You're progressing consistently — the next lesson builds directly on what you've completed.",
  };
}

export function getHint(lessonId: string, attemptNumber: number): string {
  const hints = hintsByLesson[lessonId] ?? ["Take another look at the concept section above."];
  return hints[Math.min(attemptNumber, hints.length - 1)];
}
