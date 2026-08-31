"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlannerHeader } from "./PlannerHeader";
import { PlannerStepper, type PlannerStep } from "./PlannerStepper";
import { ContextStage } from "./ContextStage";
import { AssessmentStage } from "./AssessmentStage";
import { GoalsStage } from "./GoalsStage";
import { GenerationStage } from "./GenerationStage";
import { PlanOverview } from "./PlanOverview";
import { AIExplanation } from "./AIExplanation";
import { RecommendationList } from "./RecommendationList";
import { Roadmap } from "./Roadmap";
import { MilestoneList } from "./MilestoneList";
import { AlternativePathways } from "./AlternativePathways";
import { PlanReview } from "./PlanReview";
import { PlanApproval } from "./PlanApproval";
import { PlanVersionHistory } from "./PlanVersionHistory";
import { RecommendationDrawer } from "./drawers/RecommendationDrawer";
import { Button } from "@/components/ui/Button";

import { requestRehabilitationPlan, type PlannerError, type PlannerErrorCode } from "@/lib/services/rehabilitationPlannerService";
import { planningContext as baseContext, assessmentCategories, initialGoals, personalGoalStatement } from "@/lib/demo-data/plans/arjun-plan";
import type { PlanningContext, PlanGoal, RehabilitationPlan, Recommendation, ReviewDecision, PlanVersion, PlanChangeEvent } from "@/types/planner";

const STEP_ORDER: PlannerStep[] = ["context", "assessment", "goals", "generate", "review", "plan"];

/**
 * PlannerFlow — the single orchestrator for the whole workflow. Owns
 * all state (context edits, goals, the generated plan, review
 * decisions, approval); every stage component below it is presentational,
 * driven entirely by props — the same separation MissionControl and
 * HumanGrowthProfile already established.
 */
export function PlannerFlow() {
  const [step, setStep] = useState<PlannerStep>("context");
  const [furthestReached, setFurthestReached] = useState(0);

  const [context, setContext] = useState<PlanningContext>(baseContext);
  const [goals, setGoals] = useState<PlanGoal[]>(initialGoals);

  const [serviceStatus, setServiceStatus] = useState<"pending" | "success" | "error">("pending");
  const [plan, setPlan] = useState<RehabilitationPlan | null>(null);
  const [error, setError] = useState<PlannerError | null>(null);

  const [decisions, setDecisions] = useState<Record<string, ReviewDecision>>({});
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null);

  const [approved, setApproved] = useState(false);
  const [approvedDate] = useState("16 August 2026");

  const goTo = useCallback(
    (target: PlannerStep) => {
      const targetIndex = STEP_ORDER.indexOf(target);
      if (targetIndex <= furthestReached) setStep(target);
    },
    [furthestReached]
  );

  const advance = useCallback((next: PlannerStep) => {
    const nextIndex = STEP_ORDER.indexOf(next);
    setFurthestReached((prev) => Math.max(prev, nextIndex));
    setStep(next);
  }, []);

  const runGeneration = useCallback(
    async (simulateError?: PlannerErrorCode) => {
      setServiceStatus("pending");
      setError(null);
      const result = await requestRehabilitationPlan(context, goals, simulateError ? { simulateError } : undefined);
      if (result.success) {
        setPlan(result.plan);
        setServiceStatus("success");
      } else {
        setError(result.error);
        setServiceStatus("error");
      }
    },
    [context, goals]
  );

  const handleEnterGenerate = useCallback(() => {
    advance("generate");
    runGeneration();
  }, [advance, runGeneration]);

  const handleGenerationComplete = useCallback(() => {
    advance("review");
  }, [advance]);

  const handleDecide = (id: string, decision: ReviewDecision) => {
    setDecisions((prev) => ({ ...prev, [id]: decision }));
  };

  const versions: PlanVersion[] = [
    {
      version: "1.0",
      label: approved ? "Initial approved plan" : "Draft — not yet approved",
      date: approvedDate,
      changes: approved ? ["Plan approved and activated"] : ["Plan drafted from AI-generated recommendations"],
    },
  ];
  const changes: PlanChangeEvent[] = [
    { id: "c1", date: "16 Aug", action: approved ? "Plan approved and activated" : "Plan drafted, pending review" },
    { id: "c2", date: "14 Aug", action: "Digital skills assessment updated" },
    { id: "c3", date: "10 Aug", action: "Employment goal added" },
  ];

  return (
    <div className="mx-auto max-w-[1200px]">
      <PlannerHeader
        personName={context.personName}
        profileId={context.profileId}
        status={approved ? "active" : "draft"}
        lastAssessment="8 August 2026"
      />

      <div className="my-8">
        <PlannerStepper current={step} furthestReached={furthestReached} onNavigate={goTo} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          {step === "context" && (
            <ContextStage
              context={context}
              onUpdateInterest={(i, value) =>
                setContext((prev) => ({
                  ...prev,
                  interests: prev.interests.map((interest, idx) => (idx === i ? { ...interest, value } : interest)),
                }))
              }
              onNext={() => advance("assessment")}
            />
          )}

          {step === "assessment" && (
            <AssessmentStage categories={assessmentCategories} onNext={() => advance("goals")} onBack={() => goTo("context")} />
          )}

          {step === "goals" && (
            <GoalsStage
              goals={goals}
              personalGoal={personalGoalStatement}
              onAddGoal={(title) =>
                setGoals((prev) => [...prev, { id: `goal-${prev.length + 1}-${Date.now()}`, title, priority: "medium", horizon: "short", status: "not-started" }])
              }
              onRemoveGoal={(id) => setGoals((prev) => prev.filter((g) => g.id !== id))}
              onNext={handleEnterGenerate}
              onBack={() => goTo("assessment")}
            />
          )}

          {step === "generate" && (
            <GenerationStage
              serviceStatus={serviceStatus}
              error={error}
              onComplete={handleGenerationComplete}
              onRetry={() => runGeneration()}
            />
          )}

          {step === "review" && plan && (
            <PlanReview
              recommendations={plan.recommendations}
              decisions={decisions}
              onBack={() => goTo("goals")}
              onApprove={() => advance("plan")}
            />
          )}

          {step === "plan" && plan && (
            <div className="space-y-5">
              <PlanOverview plan={plan} />
              <AIExplanation plan={plan} />
              <RecommendationList
                recommendations={plan.recommendations}
                decisions={decisions}
                onDecide={handleDecide}
                onOpen={setSelectedRecommendation}
              />
              <Roadmap
                roadmap={plan.roadmap}
                recommendations={plan.recommendations}
                decisions={decisions}
                show
                onSelectNode={setSelectedRecommendation}
              />
              <MilestoneList milestones={plan.milestones} show />
              <AlternativePathways paths={plan.alternatives} show />
              <PlanApproval
                status={approved ? "active" : "draft"}
                approvedBy="Demo Counselor"
                approvedDate={approvedDate}
                version="1.0"
                onApprove={() => setApproved(true)}
              />
              <PlanVersionHistory versions={versions} changes={changes} />

              <div className="flex justify-end pb-4">
                <Button variant="ghost" size="sm" onClick={() => goTo("review")}>
                  Back to review
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <RecommendationDrawer
        recommendation={selectedRecommendation}
        alternatives={plan?.alternatives ?? []}
        onClose={() => setSelectedRecommendation(null)}
      />
    </div>
  );
}
