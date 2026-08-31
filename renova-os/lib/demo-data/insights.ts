import type { AIInsight } from "@/types/dashboard";

/**
 * Language throughout is deliberately human-in-the-loop: "observed,"
 * "suggested," "recommended for review" — never "AI has determined."
 * See PHASE_3_MISSION_CONTROL.md §AI ethics for the reasoning.
 */
export const aiInsights: AIInsight[] = [
  {
    id: "insight-digital-literacy",
    title: "Digital literacy participation rising",
    observation: "Digital literacy participation increased 18% this month.",
    dataSignals: [
      "+18% enrollment vs. last month",
      "Completion rates highest among participants who also completed foundational computer training",
      "No corresponding increase in staff hours allocated",
    ],
    recommendation: "Suggested: review computer-training prerequisites for other digital programs.",
    confidence: "high",
    actionLabel: "View analysis",
  },
  {
    id: "insight-employment-prep",
    title: "Employment prep gap before release",
    observation: "12 individuals scheduled for release within 60 days have not yet completed employment preparation.",
    dataSignals: [
      "12 of 43 upcoming releases affected",
      "Employment prep completion currently averages 3 weeks",
      "Review queue depth: 7 pending",
    ],
    recommendation: "Recommended for review: prioritize employment-prep scheduling for near-term releases.",
    confidence: "medium",
    actionLabel: "Review",
  },
  {
    id: "insight-counseling-load",
    title: "Counseling review backlog forming",
    observation: "Counseling review completion has slowed 9% over the past two weeks.",
    dataSignals: [
      "7 reviews currently overdue",
      "Average review turnaround up from 4 to 6 days",
      "No change in counselor headcount",
    ],
    recommendation: "Potential trend worth monitoring — consider redistributing review load.",
    confidence: "low",
    actionLabel: "View analysis",
  },
];
