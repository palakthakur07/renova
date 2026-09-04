"use client";

import { useEffect, useState } from "react";
import { RoleProvider, useRole } from "@/components/providers/RoleProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { ProgressHeader } from "./ProgressHeader";
import { ProgressHero } from "./ProgressHero";
import { ProgressTrajectory } from "./ProgressTrajectory";
import { CurrentPhase } from "./CurrentPhase";
import { CompleteLessonDemo } from "./CompleteLessonDemo";
import { ActivityTimeline } from "./ActivityTimeline";
import { SkillDevelopment } from "./SkillDevelopment";
import { LearningProgressSection } from "./LearningProgressSection";
import { ProgramParticipation } from "./ProgramParticipation";
import { MilestoneTracker } from "./MilestoneTracker";
import { ProgressTrendChart } from "./ProgressTrendChart";
import { ProgressInsightsList } from "./ProgressInsightsList";
import { AIProgressInsights } from "./AIProgressInsights";
import { SupportAreas } from "./SupportAreas";
import { NextActions } from "./NextActions";
import { ProgressHistory } from "./ProgressHistory";
import { StaffNotes } from "./StaffNotes";
import { ProgressReportButton } from "./ProgressReportButton";

import { ProgressBreakdownDrawer } from "./drawers/ProgressBreakdownDrawer";
import { ActivityDrawer } from "./drawers/ActivityDrawer";
import { SkillHistoryDrawer } from "./drawers/SkillHistoryDrawer";
import { MilestoneRequirementsDrawer } from "./drawers/MilestoneRequirementsDrawer";
import { AIInsightDrawer } from "./drawers/AIInsightDrawer";
import { AddNoteDrawer } from "./drawers/AddNoteDrawer";
import { ReportPreviewDrawer } from "./drawers/ReportPreviewDrawer";

import { AuditTrail } from "@/components/profile/AuditTrail";

import { profile } from "@/lib/demo-data/profiles/arjun";
import {
  progressMeta,
  categoryProgress as initialCategoryProgress,
  skillProgress,
  skillHistory,
  learningProgressBaseline,
  programParticipation,
  milestoneProgress,
  journeyPhases,
  currentPhaseSummary,
  activityHistory as initialActivityHistory,
  progressHistory,
  positiveInsights,
  supportAreas,
  nextActions,
  staffNotesSeed,
  progressAuditEvents,
} from "@/lib/demo-data/progress/arjun-progress";

import type { ProgressCategory, ActivityEvent, SkillProgress, MilestoneProgress, ProgressInsight, StaffNote, StaffNoteCategory } from "@/types/progress";

/**
 * RehabilitationProgressIntelligence — composes Phase 7 (brief §63).
 * Reveal staging mirrors HumanGrowthProfile's approach — a handful of
 * staggered boolean flags — rather than Phase 2's longer cinematic
 * state machine, consistent with the precedent that a page people
 * return to often should assemble quickly.
 *
 * profileId is accepted for the /progress/[profileId] route but the
 * prototype has a single demo individual (RN-1042), same as every
 * other phase — passing a different id doesn't 404, it just renders
 * the same demo data, which is the honest thing to do until a real
 * data layer exists.
 */
export function RehabilitationProgressIntelligence({ profileId }: { profileId?: string }) {
  // A single demo individual (RN-1042) backs every phase today — see the
  // component doc comment below for why a different id still renders it.
  void profileId;
  return (
    <RoleProvider>
      <ProgressIntelligenceBody />
    </RoleProvider>
  );
}

function ProgressIntelligenceBody() {
  const reducedMotion = usePrefersReducedMotion();
  const { role } = useRole();

  const [stage, setStage] = useState({
    header: false,
    hero: false,
    journey: false,
    skills: false,
    rest: false,
  });

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, hero: true })), 220 * t),
      setTimeout(() => setStage((s) => ({ ...s, journey: true })), 380 * t),
      setTimeout(() => setStage((s) => ({ ...s, skills: true })), 480 * t),
      setTimeout(() => setStage((s) => ({ ...s, rest: true })), 580 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const [categories, setCategories] = useState<ProgressCategory[]>(initialCategoryProgress);
  const [activities, setActivities] = useState<ActivityEvent[]>(initialActivityHistory);
  const [staffNotes, setStaffNotes] = useState<StaffNote[]>(staffNotesSeed);

  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<ActivityEvent | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillProgress | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneProgress | null>(null);
  const [selectedAiInsight, setSelectedAiInsight] = useState<ProgressInsight | null>(null);
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const lowestParticipation = programParticipation.reduce((min, p) => (p.completionPct < min.completionPct ? p : min));

  const handleAddNote = (category: StaffNoteCategory, note: string) => {
    setStaffNotes((prev) => [
      {
        id: `note-${Date.now()}`,
        category,
        note,
        author: "Demo User",
        role: role[0].toUpperCase() + role.slice(1),
        date: "Today",
      },
      ...prev,
    ]);
  };

  return (
    <div className="mx-auto max-w-[1100px]">
      <ProgressHeader profile={profile} planVersion={progressMeta.planVersion} lastUpdated={progressMeta.lastUpdated} show={stage.header} />

      <div className="mt-5 space-y-5">
        <ProgressHero categories={categories} show={stage.hero} onOpenExplanation={() => setBreakdownOpen(true)} />

        <div>
          <ProgressTrajectory phases={journeyPhases} show={stage.journey} />
          <CurrentPhase summary={currentPhaseSummary} show={stage.journey} />
        </div>

        <CompleteLessonDemo categories={categories} onCategoriesChange={setCategories} onActivityAdded={(a) => setActivities((prev) => [a, ...prev])} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <SkillDevelopment skills={skillProgress} show={stage.skills} onSelect={setSelectedSkill} />
          <ActivityTimeline activities={activities} show={stage.skills} onSelect={setSelectedActivity} />
        </div>

        <LearningProgressSection baseline={learningProgressBaseline} show={stage.rest} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ProgramParticipation programs={programParticipation} show={stage.rest} />
          <MilestoneTracker milestones={milestoneProgress} show={stage.rest} onSelect={setSelectedMilestone} />
        </div>

        <ProgressTrendChart show={stage.rest} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ProgressInsightsList insights={positiveInsights} show={stage.rest} />
          <SupportAreas areas={supportAreas} show={stage.rest} />
        </div>

        <AIProgressInsights
          context={{
            personName: profile.name,
            learningActivityChangePct: 18,
            strongestImprovement: { label: "Digital Literacy", from: 62, to: 82 },
            lowestParticipationArea: { label: lowestParticipation.name, completionPct: lowestParticipation.completionPct },
          }}
          show={stage.rest}
          onSelectInsight={setSelectedAiInsight}
        />

        <NextActions actions={nextActions} show={stage.rest} />

        <ProgressHistory history={progressHistory} show={stage.rest} />

        <StaffNotes notes={staffNotes} show={stage.rest} onAdd={() => setAddNoteOpen(true)} />

        <div className="flex justify-end">
          <ProgressReportButton onOpen={() => setReportOpen(true)} />
        </div>

        <div className="pb-4">
          <AuditTrail events={progressAuditEvents} show={stage.rest} />
        </div>
      </div>

      <ProgressBreakdownDrawer categories={categories} open={breakdownOpen} onClose={() => setBreakdownOpen(false)} />
      <ActivityDrawer activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
      <SkillHistoryDrawer
        skill={selectedSkill}
        history={selectedSkill ? skillHistory[selectedSkill.id] ?? null : null}
        onClose={() => setSelectedSkill(null)}
      />
      <MilestoneRequirementsDrawer milestone={selectedMilestone} onClose={() => setSelectedMilestone(null)} />
      <AIInsightDrawer insight={selectedAiInsight} onClose={() => setSelectedAiInsight(null)} />
      <AddNoteDrawer open={addNoteOpen} onClose={() => setAddNoteOpen(false)} onSave={handleAddNote} />
      <ReportPreviewDrawer
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        personName={profile.name}
        overallPct={Math.round(categories.reduce((sum, c) => sum + c.valuePct * (c.weightPct / 100), 0))}
        categories={categories}
        supportAreas={supportAreas}
        nextActions={nextActions}
      />
    </div>
  );
}
