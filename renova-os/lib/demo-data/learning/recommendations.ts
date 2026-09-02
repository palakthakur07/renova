import type { LearningRecommendation } from "@/types/learning";

export const recommendations: LearningRecommendation[] = [
  { id: "rec-1", kind: "next", title: "Continue to Working with Variables", reason: "Builds on your completed Computer Fundamentals module." },
  { id: "rec-2", kind: "practice", title: "Practice: Spreadsheet basics", reason: "Reinforces the Computer Applications module you're currently on." },
  { id: "rec-3", kind: "review", title: "Review: Digital file organization", reason: "It's been a while since Files & Information — a quick review keeps it fresh." },
];
