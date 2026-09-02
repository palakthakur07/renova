import type { ExplanationLevel } from "@/types/learning";

/**
 * Canned explanation text per level, keyed by lesson id. This is the
 * "model output" the mock AI engine draws from — swapping in a real
 * model later means replacing lib/ai/learningCompanion.ts's lookup
 * with an actual generation call; this file's shape stays a useful
 * reference for prompt/response expectations either way.
 */
export const explanationsByLevel: Record<string, Record<ExplanationLevel, string>> = {
  "lesson-variables": {
    quick: "A variable stores a value you can use again later.",
    simple: "Think of a variable as a labeled box. You put a value in it, and anywhere you use that label, you get what's currently inside.",
    detailed: "A variable is a named storage location. When you assign a value to it, that value is kept until you assign a new one. Any code or formula that references the variable's name reads whatever value is currently stored — not the original one, if it's since changed.",
    example: "If quantity = 4, then quantity + 1 equals 5. If you later set quantity = 10, that same expression would now equal 11 — because it reads quantity's current value each time.",
  },
};

export const hintsByLesson: Record<string, string[]> = {
  "lesson-variables": [
    "A formula reads whatever value is currently stored — check what each cell actually holds right now.",
    "Try working through the calculation one step at a time, left to right.",
  ],
};
