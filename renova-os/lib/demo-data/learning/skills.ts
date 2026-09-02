import type { Skill } from "@/types/learning";

/** Learning-derived skill scores. Continuous with Phase 4/5's Digital Literacy / Technical Skills numbers. */
export const learningSkills: Skill[] = [
  { id: "digital-literacy", label: "Digital Literacy", scorePct: 82 },
  { id: "productivity", label: "Productivity", scorePct: 74 },
  { id: "workplace-readiness", label: "Workplace Readiness", scorePct: 58 },
  { id: "information-management", label: "Information Management", scorePct: 69 },
  { id: "web-fundamentals", label: "Web Fundamentals", scorePct: 61 },
];
