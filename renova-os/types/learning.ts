/**
 * AI Learning Companion data model. Same discipline as the rest of
 * ReNova OS — no `any`, demo data only.
 */

export type LessonSectionType = "concept" | "example" | "interactive" | "practice" | "checkpoint" | "reflection";

export interface LearningObjective {
  id: string;
  label: string;
}

export type ModuleStatus = "completed" | "current" | "upcoming";

export interface Module {
  id: string;
  order: number;
  title: string;
  status: ModuleStatus;
  progressPct: number;
  lessonIds: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  goal: string;
  durationWeeks: number;
  skills: string[];
  rehabilitationGoal: string;
  objectives: LearningObjective[];
  modules: Module[];
}

export type QuestionKind = "multiple-choice" | "input";

export interface QuestionOption {
  id: string;
  label: string;
}

export interface Question {
  id: string;
  kind: QuestionKind;
  prompt: string;
  options?: QuestionOption[];
  correctOptionId?: string;
  correctInput?: string;
  explanation: string;
  difficulty: "foundation" | "standard" | "challenge";
}

export interface LessonSection {
  id: string;
  type: LessonSectionType;
  title: string;
  body?: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  skill: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  whyThisLesson: string;
  sections: LessonSection[];
  practiceQuestionIds: string[];
  checkQuestionIds: string[];
}

export interface Skill {
  id: string;
  label: string;
  scorePct: number;
}

export interface QuizAnswer {
  questionId: string;
  selectedOptionId?: string;
  inputValue?: string;
  correct: boolean;
}

export interface QuizResult {
  lessonId: string;
  answers: QuizAnswer[];
  scoreCount: number;
  totalCount: number;
  topicsToRevisit: string[];
}

export interface LearningProgress {
  courseId: string;
  courseProgressPct: number;
  lessonsCompleted: string[];
  learningHours: number;
  averageAssessmentScorePct: number;
  streakSessionsThisWeek: number;
  skills: Skill[];
}

export type RecommendationKind = "practice" | "review" | "next";

export interface LearningRecommendation {
  id: string;
  kind: RecommendationKind;
  title: string;
  reason: string;
}

export type ExplanationLevel = "quick" | "simple" | "detailed" | "example";

/** Learning-related context only — never psychological or health inferences. */
export interface LearnerContext {
  recentTopics: string[];
  strongConcepts: string[];
  topicsNeedingReinforcement: string[];
  preferredExplanationLevel: ExplanationLevel;
  completedLessonIds: string[];
}

export interface LearningReflection {
  lessonId: string;
  easiestPart: string;
  wantsMoreHelpWith: string;
}

export interface Certificate {
  courseId: string;
  courseTitle: string;
  awardedTo: string;
  date: string;
  skillsDemonstrated: string[];
}

export interface AIExplanation {
  explanation: string;
  examples: string[];
  recommendedNextStep: string;
  difficulty: "foundation" | "standard" | "challenge";
  confidence: "high" | "medium" | "low";
}
