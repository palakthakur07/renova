import type {
  PlanningContext,
  PlanGoal,
  RehabilitationPlan,
  Recommendation,
  RoadmapNode,
  Milestone,
  AlternativePath,
} from "@/types/planner";

/**
 * MOCK AI ENGINE
 * ------------------------------------------------------------------
 * This is the entire "AI" for the prototype: a pure function that
 * returns structured, deterministic demo output. No network call, no
 * model, no randomness — the same context always produces the same
 * plan, which is what lets this be verified and demoed reliably.
 *
 * The point of isolating this in lib/ai/ (rather than inline in a
 * component, or even inline in the service below) is the swap-in
 * boundary: a real implementation would keep this exact function
 * signature — (context, goals) => Promise<RehabilitationPlan> — and
 * replace the body with a call to Gemini/OpenAI/etc. plus a mapping
 * step from the model's response into this same RehabilitationPlan
 * shape. Nothing above the service layer (see
 * lib/services/rehabilitationPlannerService.ts) would need to change.
 * ------------------------------------------------------------------
 */
export async function generateRehabilitationPlan(
  context: PlanningContext,
  goals: PlanGoal[]
): Promise<RehabilitationPlan> {
  const primaryGoal = goals.find((g) => g.priority === "high") ?? goals[0];

  const recommendations: Recommendation[] = [
    {
      id: "rec-1",
      title: "Computer Fundamentals II",
      category: "education",
      priority: "high",
      reason: "Builds directly on the existing digital literacy foundation.",
      expectedOutcome: "Intermediate computer competency",
      durationWeeks: 6,
      prerequisites: ["Computer Fundamentals"],
      confidence: "high",
      evidence: [
        { label: "Digital Literacy", detail: "84% assessment score" },
        { label: "Computer Fundamentals", detail: "Completed, 12 Jul 2025" },
      ],
      successCriteria: ["Complete 90% of lessons", "Pass assessment with ≥75%", "Attend 80% of sessions"],
    },
    {
      id: "rec-2",
      title: "Web Development Fundamentals",
      category: "education",
      priority: "high",
      reason: "Strong technology interest and above-pace progress in the current module suggest readiness for applied project work.",
      expectedOutcome: "Foundational front-end development capability",
      durationWeeks: 8,
      prerequisites: ["Computer Fundamentals II"],
      confidence: "high",
      evidence: [
        { label: "Technology interest", detail: "Self-reported, high" },
        { label: "Current progress", detail: "68% through Web Development, ahead of typical pace" },
      ],
      successCriteria: ["Complete a working front-end project", "Pass practical assessment with ≥70%"],
    },
    {
      id: "rec-3",
      title: "Communication Skills Workshop",
      category: "skill-development",
      priority: "medium",
      reason: "Communication scores intermediate; workplace-facing roles benefit from structured practice.",
      expectedOutcome: "Improved workplace communication confidence",
      durationWeeks: 4,
      prerequisites: [],
      confidence: "medium",
      evidence: [
        { label: "Communication assessment", detail: "68%, intermediate" },
        { label: "Counseling notes", detail: "Peer mentoring session completed" },
      ],
      successCriteria: ["Attend 80% of workshop sessions", "Complete a peer-reviewed presentation"],
    },
    {
      id: "rec-4",
      title: "Financial Literacy — Budgeting & Credit Basics",
      category: "life-skills",
      priority: "medium",
      reason: "Currently the lowest-scoring assessed category; foundational for post-release independence.",
      expectedOutcome: "Working knowledge of budgeting and credit fundamentals",
      durationWeeks: 5,
      prerequisites: [],
      confidence: "medium",
      evidence: [{ label: "Financial literacy assessment", detail: "54%, beginner" }],
      successCriteria: ["Complete course modules", "Pass final knowledge check with ≥70%"],
    },
    {
      id: "rec-5",
      title: "Employment Preparation",
      category: "employment-prep",
      priority: "high",
      reason: "Workplace readiness has not yet been formally assessed and no employment-prep activity has started, despite an approaching release window.",
      expectedOutcome: "Interview readiness and a draft employment plan",
      durationWeeks: 4,
      prerequisites: ["Web Development Fundamentals"],
      confidence: "medium",
      evidence: [
        { label: "Workplace readiness", detail: "47%, not yet formally assessed" },
        { label: "Target release", detail: "18 November 2026" },
      ],
      successCriteria: ["Complete mock interview", "Finalize draft employment plan"],
    },
    {
      id: "rec-6",
      title: "Reintegration Planning Session",
      category: "reintegration",
      priority: "low",
      reason: "Standard preparation step ahead of the release window, once employment direction is clearer.",
      expectedOutcome: "Draft reintegration and post-release support plan",
      durationWeeks: 2,
      prerequisites: ["Employment Preparation"],
      confidence: "medium",
      evidence: [{ label: "Release preparation checklist", detail: "Reintegration plan not yet started" }],
      successCriteria: ["Complete reintegration plan draft with assigned counselor"],
    },
  ];

  const roadmap: RoadmapNode[] = [
    { id: "node-1", recommendationId: "rec-1", title: "Computer Fundamentals II", category: "education", durationWeeks: 6, order: 1 },
    { id: "node-2", recommendationId: "rec-2", title: "Web Development Fundamentals", category: "education", durationWeeks: 8, order: 2 },
    { id: "node-3", recommendationId: "rec-3", title: "Communication Skills Workshop", category: "skill-development", durationWeeks: 4, order: 2, parallelGroup: 1 },
    { id: "node-4", recommendationId: "rec-4", title: "Financial Literacy", category: "life-skills", durationWeeks: 5, order: 2, parallelGroup: 1 },
    { id: "node-5", recommendationId: "rec-5", title: "Employment Preparation", category: "employment-prep", durationWeeks: 4, order: 3 },
    { id: "node-6", recommendationId: "rec-6", title: "Reintegration Planning", category: "reintegration", durationWeeks: 2, order: 4 },
  ];

  const milestones: Milestone[] = [
    { id: "ms-1", order: 1, title: "Digital Foundations", description: "Core computer competency established.", successCriteria: ["Computer Fundamentals II complete", "Assessment ≥75%"] },
    { id: "ms-2", order: 2, title: "Technical Capability", description: "Applied technical skill demonstrated through project work.", successCriteria: ["Web Development Fundamentals complete", "Working project delivered"] },
    { id: "ms-3", order: 3, title: "Workplace Readiness", description: "Communication and financial foundations in place.", successCriteria: ["Communication workshop complete", "Financial literacy course complete"] },
    { id: "ms-4", order: 4, title: "Employment Preparation", description: "Ready for interviews with a draft employment plan.", successCriteria: ["Mock interview complete", "Employment plan drafted"] },
    { id: "ms-5", order: 5, title: "Reintegration Preparation", description: "Post-release support plan in place ahead of target release.", successCriteria: ["Reintegration plan complete"] },
  ];

  const alternatives: AlternativePath[] = [
    {
      id: "alt-primary",
      type: "primary",
      label: "Technology Employment Pathway",
      description: "Front-end development track building on current digital literacy and stated technology interest.",
      confidence: "high",
    },
    {
      id: "alt-alternative",
      type: "alternative",
      label: "Digital Support / Administration",
      description: "A less technical pathway using the same digital literacy foundation — office and administrative software rather than development.",
      confidence: "medium",
    },
    {
      id: "alt-secondary",
      type: "secondary",
      label: "Vocational Technical Support",
      description: "Hardware and technical-support focused track, drawing on vocational skills alongside digital literacy.",
      confidence: "medium",
    },
  ];

  const warnings: string[] = [];
  if (context.missingFields.length > 0) {
    warnings.push(
      `Plan quality may improve when additional information is available: ${context.missingFields.join(", ")}.`
    );
  }

  const estimatedDurationWeeks = roadmap.reduce((total, node, i) => {
    // parallel-group nodes don't add sequential time beyond the group's longest member
    const isParallelDuplicate = node.parallelGroup && roadmap.slice(0, i).some((n) => n.parallelGroup === node.parallelGroup);
    return isParallelDuplicate ? total : total + node.durationWeeks;
  }, 0);

  return {
    id: `plan-${context.profileId}-draft`,
    profileId: context.profileId,
    status: "draft",
    primaryGoalTitle: primaryGoal?.title ?? "Rehabilitation pathway",
    summary: `A technology-oriented rehabilitation pathway for ${context.personName}, building on demonstrated digital literacy strength toward workplace readiness and reintegration.`,
    estimatedDurationWeeks,
    confidence: "high",
    strengths: [
      { label: "Digital learning engagement", detail: "3 completed digital courses, consistent attendance" },
      { label: "Strong course completion", detail: "Digital Literacy and Computer Fundamentals both completed with scores above 84%" },
      { label: "Technology interest", detail: "Self-reported high interest, corroborated by above-pace progress" },
    ],
    developmentAreas: [
      { label: "Employment readiness", detail: "Not yet formally assessed" },
      { label: "Advanced technical skills", detail: "Web Development in progress, not yet complete" },
      { label: "Financial planning", detail: "Beginner level, course in progress" },
      { label: "Communication confidence", detail: "Intermediate — workplace-specific practice recommended" },
    ],
    recommendations,
    roadmap,
    milestones,
    alternatives,
    warnings,
    explanationFactors: [
      "Profile signals — education history, completed programs",
      "Assessment signals — digital skills, communication, financial literacy scores",
      "Stated goals — technology employment, communication, financial literacy",
      "Program availability — current facility program catalog",
    ],
  };
}
