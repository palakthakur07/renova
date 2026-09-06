"use client";

import { useEffect, useState } from "react";
import { RoleProvider } from "@/components/providers/RoleProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { ReintegrationHeader } from "./ReintegrationHeader";
import { PreparationOverview } from "./PreparationOverview";
import { PreparationActivityDemo } from "./PreparationActivityDemo";
import { ReintegrationMap } from "./ReintegrationMap";
import { TransitionRoadmap } from "./TransitionRoadmap";
import { EmploymentPreparation } from "./EmploymentPreparation";
import { EmploymentPathways } from "./EmploymentPathways";
import { PreparationChecklist } from "./PreparationChecklist";
import { SupportNetwork } from "./SupportNetwork";
import { ContinuityPlan } from "./ContinuityPlan";
import { ReintegrationInsights } from "./ReintegrationInsights";
import { NextActions } from "./NextActions";
import { StaffReview } from "./StaffReview";

import { PreparationBreakdownDrawer } from "./drawers/PreparationBreakdownDrawer";
import { ReintegrationInsightDrawer } from "./drawers/ReintegrationInsightDrawer";

import { useNotifications } from "@/components/providers/NotificationProvider";
import { profile } from "@/lib/demo-data/profiles/arjun";
import { currentPhaseSummary } from "@/lib/demo-data/progress/arjun-progress";
import {
  reintegrationMeta,
  reintegrationCategories as initialCategories,
  readinessMapAreas,
  roadmapStages,
  employmentSkills,
  employmentPathways as initialPathways,
  employmentActions as initialActions,
  preparationChecklist,
  supportResources,
  continuityPlan,
  reintegrationActivity as initialActivity,
} from "@/lib/demo-data/reintegration/arjun-reintegration";
import { calculateOverallPreparation } from "@/lib/reintegration/reintegrationEngine";

import type {
  ReintegrationCategory,
  ReintegrationInsight,
  EmploymentAction,
  EmploymentPathway,
  PathwayStatus,
  ReintegrationActivityEvent,
} from "@/types/reintegration";

/**
 * ReintegrationExperience — composes Phase 8 (brief §3, §19). Same
 * staggered-reveal pattern as RehabilitationProgressIntelligence
 * (Phase 7): a handful of boolean stage flags rather than a longer
 * cinematic state machine, since this is a page people return to
 * often rather than a one-time cinematic moment.
 *
 * profileId is accepted for the /release/[profileId] route but the
 * prototype has a single demo individual (RN-1042), same as every
 * other phase — a different id still renders the same demo data.
 */
export function ReintegrationExperience({ profileId }: { profileId?: string }) {
  void profileId;
  return (
    <RoleProvider>
      <ReintegrationBody />
    </RoleProvider>
  );
}

function ReintegrationBody() {
  const reducedMotion = usePrefersReducedMotion();
  const { pushToast } = useNotifications();

  const [stage, setStage] = useState({
    header: false,
    overview: false,
    map: false,
    roadmap: false,
    rest: false,
  });

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, overview: true })), 220 * t),
      setTimeout(() => setStage((s) => ({ ...s, map: true })), 380 * t),
      setTimeout(() => setStage((s) => ({ ...s, roadmap: true })), 480 * t),
      setTimeout(() => setStage((s) => ({ ...s, rest: true })), 580 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const [categories, setCategories] = useState<ReintegrationCategory[]>(initialCategories);
  const [pathways, setPathways] = useState<EmploymentPathway[]>(initialPathways);
  const [actions, setActions] = useState<EmploymentAction[]>(initialActions);
  const [activity, setActivity] = useState<ReintegrationActivityEvent[]>(initialActivity);

  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<ReintegrationInsight | null>(null);

  const overall = calculateOverallPreparation(categories);
  const strongest = categories.reduce((max, c) => (c.progress > max.progress ? c : max));
  const weakest = categories.reduce((min, c) => (c.progress < min.progress ? c : min));
  const employment = categories.find((c) => c.id === "employment")!;
  const housing = categories.find((c) => c.id === "housing")!;

  const handlePathwayStatus = (id: string, status: PathwayStatus) => {
    setPathways((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  const handleStartAction = (action: EmploymentAction) => {
    setActions((prev) =>
      prev.map((a) => (a.id === action.id ? { ...a, state: a.state === "in-progress" ? "completed" : "in-progress" } : a))
    );
    pushToast({
      title: action.state === "in-progress" ? `${action.title} marked complete` : `${action.title} started`,
      tone: "growth",
    });
  };

  const handleEmploymentActionCompleted = () => {
    setActions((prev) =>
      prev.map((a) => (a.title === "Resume Preparation" ? { ...a, state: "completed" } : a))
    );
  };

  return (
    <div className="mx-auto max-w-[1100px]">
      <ReintegrationHeader
        profile={profile}
        currentPhase={currentPhaseSummary.phaseLabel}
        lastUpdated={reintegrationMeta.lastUpdated}
        staffReviewStatus={reintegrationMeta.staffReviewStatus}
        show={stage.header}
      />

      <div className="mt-5 space-y-5">
        <PreparationOverview
          overallProgress={overall}
          categories={categories}
          show={stage.overview}
          onOpenExplanation={() => setBreakdownOpen(true)}
        />

        <PreparationActivityDemo
          categories={categories}
          onCategoriesChange={setCategories}
          onActivityAdded={(a) => setActivity((prev) => [a, ...prev])}
          onEmploymentActionCompleted={handleEmploymentActionCompleted}
        />

        <ReintegrationMap areas={readinessMapAreas} show={stage.map} />

        <TransitionRoadmap stages={roadmapStages} show={stage.roadmap} />

        <EmploymentPreparation
          skills={employmentSkills}
          actions={actions}
          show={stage.rest}
          onStartAction={handleStartAction}
        />

        <EmploymentPathways pathways={pathways} show={stage.rest} onChangeStatus={handlePathwayStatus} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PreparationChecklist items={preparationChecklist} show={stage.rest} />
          <SupportNetwork resources={supportResources} show={stage.rest} />
        </div>

        <ContinuityPlan entries={continuityPlan} show={stage.rest} />

        <ReintegrationInsights
          context={{
            personName: profile.name,
            employmentPreparationPct: employment.progress,
            housingPreparationPct: housing.progress,
            strongestCategory: { name: strongest.name, progress: strongest.progress },
            weakestCategory: { name: weakest.name, progress: weakest.progress },
            recentlyCompletedActivity: activity[0]?.title,
          }}
          show={stage.rest}
          onSelectInsight={setSelectedInsight}
        />

        <NextActions show={stage.rest} />

        <StaffReview show={stage.rest} />
      </div>

      <PreparationBreakdownDrawer categories={categories} open={breakdownOpen} onClose={() => setBreakdownOpen(false)} />
      <ReintegrationInsightDrawer insight={selectedInsight} onClose={() => setSelectedInsight(null)} />
    </div>
  );
}
