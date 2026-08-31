"use client";

import { useEffect, useState } from "react";
import { RoleProvider } from "@/components/providers/RoleProvider";
import { ProfileNav } from "./ProfileNav";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileActions } from "./ProfileActions";
import { ProgressOverview } from "./ProgressOverview";
import { AISummary } from "./AISummary";
import { JourneyTimeline } from "./JourneyTimeline";
import { CurrentGoals } from "./CurrentGoals";
import { SkillMatrix } from "./SkillMatrix";
import { EducationSection } from "./EducationSection";
import { ProgramsSection } from "./ProgramsSection";
import { CounselingSection } from "./CounselingSection";
import { ReleaseJourney } from "./ReleaseJourney";
import { DocumentsSection } from "./DocumentsSection";
import { AuditTrail } from "./AuditTrail";

import { AIInsights } from "@/components/dashboard/AIInsights";
import { InsightDrawer } from "@/components/dashboard/drawers/InsightDrawer";

import { ScoreExplanationDrawer } from "./drawers/ScoreExplanationDrawer";
import { AISummaryDrawer } from "./drawers/AISummaryDrawer";
import { MilestoneDrawer } from "./drawers/MilestoneDrawer";
import { SkillDrawer } from "./drawers/SkillDrawer";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import {
  profile,
  rehabilitationProgress,
  milestones,
  goals,
  skills,
  education,
  programs,
  counseling,
  documents,
  aiSummary,
  aiInsights,
  releasePreparation,
  auditEvents,
} from "@/lib/demo-data/profiles/arjun";

import type { AIInsight } from "@/types/dashboard";
import type { Milestone, Skill } from "@/types/profile";

/**
 * HumanGrowthProfile — composes the full profile experience. Reveal
 * timing mirrors Mission Control's approach (a handful of staggered
 * boolean flags, no separate skeleton screen) rather than Phase 2's
 * longer cinematic state machine — consistent with the precedent that
 * a page people return to repeatedly should assemble quickly, not
 * theatrically.
 */
export function HumanGrowthProfile() {
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState({
    header: false,
    progress: false,
    journey: false,
    ai: false,
    rest: false,
  });

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, progress: true })), 220 * t),
      setTimeout(() => setStage((s) => ({ ...s, journey: true })), 380 * t),
      setTimeout(() => setStage((s) => ({ ...s, ai: true })), 480 * t),
      setTimeout(() => setStage((s) => ({ ...s, rest: true })), 580 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const [scoreOpen, setScoreOpen] = useState(false);
  const [aiSummaryOpen, setAiSummaryOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<AIInsight | null>(null);

  return (
    <RoleProvider>
      <div className="mx-auto max-w-[1100px]">
        <ProfileNav />

        <div id="overview" className="scroll-mt-32 space-y-5">
          <ProfileHeader profile={profile} show={stage.header} onOpenAiSummary={() => setAiSummaryOpen(true)} />

          <div className={stage.header ? "opacity-100 transition-opacity duration-500" : "opacity-0"}>
            <ProfileActions onViewDocuments={() => document.getElementById("documents")?.scrollIntoView({ block: "start" })} />
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ProgressOverview progress={rehabilitationProgress} show={stage.progress} onOpenExplanation={() => setScoreOpen(true)} />
            </div>
            <div className="lg:col-span-7">
              <AISummary summary={aiSummary} show={stage.progress} onOpen={() => setAiSummaryOpen(true)} />
            </div>
          </div>
        </div>

        <div id="journey" className="mt-5 scroll-mt-32 space-y-5">
          <JourneyTimeline milestones={milestones} show={stage.journey} onSelect={setSelectedMilestone} />
          <CurrentGoals goals={goals} show={stage.journey} />
        </div>

        <div id="skills" className="mt-5 scroll-mt-32">
          <SkillMatrix skills={skills} show={stage.ai} onSelect={setSelectedSkill} />
        </div>

        <div id="education" className="mt-5 scroll-mt-32">
          <EducationSection records={education} show={stage.rest} />
        </div>

        <div id="programs" className="mt-5 scroll-mt-32">
          <ProgramsSection programs={programs} show={stage.rest} />
        </div>

        <div id="counseling" className="mt-5 scroll-mt-32">
          <CounselingSection summary={counseling} show={stage.rest} />
        </div>

        <div id="release" className="mt-5 scroll-mt-32">
          <ReleaseJourney release={releasePreparation} show={stage.rest} />
        </div>

        <div id="documents" className="mt-5 scroll-mt-32">
          <DocumentsSection documents={documents} show={stage.rest} />
        </div>

        <div id="ai-insights" className="mt-5 scroll-mt-32">
          <AIInsights insights={aiInsights} show={stage.rest} onSelect={setSelectedInsight} />
        </div>

        <div className="mt-5 pb-4">
          <AuditTrail events={auditEvents} show={stage.rest} />
        </div>

        <ScoreExplanationDrawer progress={rehabilitationProgress} open={scoreOpen} onClose={() => setScoreOpen(false)} />
        <AISummaryDrawer summary={aiSummary} open={aiSummaryOpen} onClose={() => setAiSummaryOpen(false)} />
        <MilestoneDrawer milestone={selectedMilestone} onClose={() => setSelectedMilestone(null)} />
        <SkillDrawer skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        <InsightDrawer insight={selectedInsight} onClose={() => setSelectedInsight(null)} />
      </div>
    </RoleProvider>
  );
}
