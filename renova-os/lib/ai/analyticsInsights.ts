import type { AnalyticsInsight } from "@/types/analytics";

/**
 * MOCK AI ENGINE — "RENOVA INTELLIGENCE" (brief §15).
 * ------------------------------------------------------------------
 * Same pattern as lib/ai/reintegrationGuide.ts and
 * lib/ai/counselorAssistant.ts: a pure, deterministic function
 * standing in for a future model call, swappable at the service
 * boundary (lib/services/analyticsInsightsService.ts).
 *
 * Builds on the same observations already seeded in
 * lib/demo-data/insights.ts for Mission Control (digital literacy
 * participation, employment-prep gap, counseling review backlog) so
 * the two surfaces tell a consistent story, restated here in the
 * evidence + confidence + suggested-review shape Analytics needs.
 * Every insight is population-level pattern surfacing — never a
 * judgment about an individual (brief §1, §29).
 * ------------------------------------------------------------------
 */

export async function generateAnalyticsInsights(): Promise<AnalyticsInsight[]> {
  return [
    {
      id: "ai-digital-literacy",
      title: "Digital literacy participation rising",
      observation: "Digital literacy participation increased 18% over the selected period.",
      evidence: [
        "+18% enrollment vs. the prior period",
        "Completion rates highest among participants who also completed foundational computer training",
      ],
      confidence: "high",
      suggestedReview: "Review computer-training prerequisites for other digital programs.",
      category: "learning",
      drillHref: "/learning",
    },
    {
      id: "ai-employment-prep",
      title: "Employment preparation lower than other development areas",
      observation: "Employment preparation completion is lower than other development areas.",
      evidence: ["54% completion compared with 71% average across selected development areas", "12 upcoming releases have incomplete employment preparation"],
      confidence: "medium",
      suggestedReview: "Check whether additional employment preparation sessions or resources are needed.",
      category: "employment",
      drillHref: "/release",
    },
    {
      id: "ai-counseling-load",
      title: "Counseling review backlog forming",
      observation: "Counseling review completion has slowed 9% over the past two weeks.",
      evidence: ["7 reviews currently overdue", "Average review turnaround up from 4 to 6 days"],
      confidence: "medium",
      suggestedReview: "Consider redistributing counseling review load.",
      category: "counseling",
      drillHref: "/counselor",
    },
    {
      id: "ai-communication-slowing",
      title: "Communication practice participation may be slowing",
      observation: "Communication practice participation appears to be slowing.",
      evidence: ["Communication development area trend +3% vs. +6% average trend across other areas"],
      confidence: "low",
      suggestedReview: "Monitor over the next reporting period before taking action.",
      category: "communication",
      drillHref: "/learning",
    },
  ];
}
