"use client";

import { useEffect, useState } from "react";
import { RoleProvider } from "@/components/providers/RoleProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { CounselorHeader } from "./CounselorHeader";
import { OverviewStats } from "./OverviewStats";
import { PersonContextPanel } from "./PersonContextPanel";
import { SessionPrepTool } from "./SessionPrepTool";
import { ProgressInsightTool } from "./ProgressInsightTool";
import { NextActionsTool } from "./NextActionsTool";
import { CounselorNoteForm } from "./CounselorNoteForm";
import { CounselorTimeline } from "./CounselorTimeline";
import { CrossModuleLinks } from "./CrossModuleLinks";

import { profile } from "@/lib/demo-data/profiles/arjun";
import {
  counselorOverviewStats,
  counselorContext,
  counselorTimelineSeed,
} from "@/lib/demo-data/counselor/arjun-counselor";
import type { CounselorNote, CounselorTimelineEntry } from "@/types/counselor";

/**
 * CounselorWorkspace — composes Phase 9 (brief §4–5, §11). Parts 4
 * (dashboard overview) and 5 (selected-person view) are combined into
 * one continuous page: the prototype has a single fully-modeled demo
 * individual (Arjun Mehta, brief §14), so there's no real "no one
 * selected" state to design for — the workspace opens directly on
 * his context, same as Phase 8's /release.
 *
 * profileId is accepted for the /counselor/[profileId] route but,
 * like every other phase, renders the same demo journey regardless
 * of which id is passed.
 */
export function CounselorWorkspace({ profileId }: { profileId?: string }) {
  void profileId;
  return (
    <RoleProvider>
      <CounselorBody />
    </RoleProvider>
  );
}

function CounselorBody() {
  const reducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState({ header: false, stats: false, context: false, rest: false });
  const [timeline, setTimeline] = useState<CounselorTimelineEntry[]>(counselorTimelineSeed);
  const [prefillObservations, setPrefillObservations] = useState("");

  useEffect(() => {
    const t = reducedMotion ? 0 : 1;
    const timers = [
      setTimeout(() => setStage((s) => ({ ...s, header: true })), 60 * t),
      setTimeout(() => setStage((s) => ({ ...s, stats: true })), 200 * t),
      setTimeout(() => setStage((s) => ({ ...s, context: true })), 340 * t),
      setTimeout(() => setStage((s) => ({ ...s, rest: true })), 480 * t),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const assistantContext = {
    personName: profile.name,
    currentFocus: counselorContext.currentFocus,
    goals: counselorContext.goals,
    recentProgress: counselorContext.recentProgress,
  };

  const handleNoteSaved = (note: CounselorNote) => {
    setTimeline((prev) => [
      {
        id: note.id,
        date: note.sessionDate,
        title: `${note.focusArea || "Counseling"} session`,
        detail: note.observations || "Session note saved.",
        category: "session",
      },
      ...prev,
    ]);
  };

  return (
    <div className="mx-auto max-w-[1100px]">
      <CounselorHeader show={stage.header} />

      <div className="mt-5 space-y-5">
        <OverviewStats stats={counselorOverviewStats} show={stage.stats} />

        <PersonContextPanel profile={profile} context={counselorContext} show={stage.context} />

        <SessionPrepTool context={assistantContext} onAddToNote={setPrefillObservations} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ProgressInsightTool context={assistantContext} />
          <NextActionsTool context={assistantContext} />
        </div>

        <CounselorNoteForm prefillObservations={prefillObservations} onSave={handleNoteSaved} />

        <CounselorTimeline entries={timeline} show={stage.rest} />

        <CrossModuleLinks show={stage.rest} />
      </div>
    </div>
  );
}
