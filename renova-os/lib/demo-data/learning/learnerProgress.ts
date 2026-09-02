import type { LearningProgress, LearnerContext } from "@/types/learning";
import { learningSkills } from "./skills";

export const initialLearningProgress: LearningProgress = {
  courseId: "computer-applications",
  courseProgressPct: 68,
  lessonsCompleted: ["lesson-foundations", "lesson-files"],
  learningHours: 12,
  averageAssessmentScorePct: 81,
  streakSessionsThisWeek: 4,
  skills: learningSkills,
};

/**
 * Learning-related context only, per the brief's explicit instruction
 * not to store sensitive psychological assumptions — recent topics
 * and demonstrated strengths, nothing about the learner as a person.
 */
export const initialLearnerContext: LearnerContext = {
  recentTopics: ["Digital Foundations", "Files & Information"],
  strongConcepts: ["File organization", "Basic navigation"],
  topicsNeedingReinforcement: [],
  preferredExplanationLevel: "simple",
  completedLessonIds: ["lesson-foundations", "lesson-files"],
};
