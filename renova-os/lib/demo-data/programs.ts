import type { ProgramPerformance } from "@/types/dashboard";

export const programs: ProgramPerformance[] = [
  { id: "financial-literacy", name: "Financial Literacy", enrollment: 156, completionPct: 83, avgProgressPct: 88, dropOffPct: 6, trendPct: 8 },
  { id: "digital-literacy", name: "Digital Literacy", enrollment: 182, completionPct: 78, avgProgressPct: 84, dropOffPct: 9, trendPct: 12 },
  { id: "communication-skills", name: "Communication Skills", enrollment: 203, completionPct: 80, avgProgressPct: 82, dropOffPct: 7, trendPct: 4 },
  { id: "computer-fundamentals", name: "Computer Fundamentals", enrollment: 167, completionPct: 75, avgProgressPct: 80, dropOffPct: 10, trendPct: 6 },
  { id: "vocational-training", name: "Vocational Training", enrollment: 214, completionPct: 71, avgProgressPct: 76, dropOffPct: 13, trendPct: 5 },
  { id: "carpentry", name: "Carpentry", enrollment: 98, completionPct: 69, avgProgressPct: 74, dropOffPct: 15, trendPct: -3 },
];
