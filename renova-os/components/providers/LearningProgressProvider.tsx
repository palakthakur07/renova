"use client";

import { createContext, useCallback, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { LearningProgress, LearnerContext, QuizResult, ExplanationLevel } from "@/types/learning";
import { initialLearningProgress, initialLearnerContext } from "@/lib/demo-data/learning/learnerProgress";

/**
 * LearningProgressProvider — the frontend progress engine (brief §29).
 * Built as a module-level external store (same pattern as Phase 1's
 * useSidebarState) rather than plain useState, so progress persists to
 * localStorage across reloads without any setState-in-effect pattern:
 * reads go through useSyncExternalStore, writes mutate the store and
 * notify subscribers directly. A real backend later replaces the
 * persistence layer (localStorage → API calls) without touching any
 * component that calls useLearningProgress().
 */
const STORAGE_KEY = "renova-learning-progress";
const CONTEXT_KEY = "renova-learner-context";

let cachedProgress: LearningProgress = initialLearningProgress;
let cachedContext: LearnerContext = initialLearnerContext;
let hydrated = false;
const listeners = new Set<() => void>();

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const storedProgress = window.localStorage.getItem(STORAGE_KEY);
    if (storedProgress) cachedProgress = JSON.parse(storedProgress);
    const storedContext = window.localStorage.getItem(CONTEXT_KEY);
    if (storedContext) cachedContext = JSON.parse(storedContext);
  } catch {
    /* corrupted storage — fall back to demo defaults */
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedProgress));
    window.localStorage.setItem(CONTEXT_KEY, JSON.stringify(cachedContext));
  } catch {
    /* storage unavailable — state still works in-memory for this session */
  }
}

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getProgressSnapshot() {
  hydrate();
  return cachedProgress;
}
function getContextSnapshot() {
  hydrate();
  return cachedContext;
}
const getServerProgressSnapshot = () => initialLearningProgress;
const getServerContextSnapshot = () => initialLearnerContext;

interface LearningProgressValue {
  progress: LearningProgress;
  learnerContext: LearnerContext;
  completeLesson: (lessonId: string, skillId: string, skillDelta: number) => void;
  recordQuizResult: (result: QuizResult) => void;
  setExplanationLevel: (level: ExplanationLevel) => void;
  advanceCourseProgress: (deltaPct: number) => void;
}

const LearningProgressContext = createContext<LearningProgressValue | null>(null);

export function LearningProgressProvider({ children }: { children: ReactNode }) {
  const progress = useSyncExternalStore(subscribe, getProgressSnapshot, getServerProgressSnapshot);
  const learnerContext = useSyncExternalStore(subscribe, getContextSnapshot, getServerContextSnapshot);

  const completeLesson = useCallback((lessonId: string, skillId: string, skillDelta: number) => {
    if (!cachedProgress.lessonsCompleted.includes(lessonId)) {
      cachedProgress = {
        ...cachedProgress,
        lessonsCompleted: [...cachedProgress.lessonsCompleted, lessonId],
        learningHours: cachedProgress.learningHours + 0.25,
        skills: cachedProgress.skills.map((s) =>
          s.id === skillId ? { ...s, scorePct: Math.min(100, s.scorePct + skillDelta) } : s
        ),
      };
      cachedContext = {
        ...cachedContext,
        completedLessonIds: [...cachedContext.completedLessonIds, lessonId],
      };
      persist();
      notify();
    }
  }, []);

  const recordQuizResult = useCallback((result: QuizResult) => {
    const scorePct = Math.round((result.scoreCount / result.totalCount) * 100);
    cachedProgress = {
      ...cachedProgress,
      averageAssessmentScorePct: Math.round((cachedProgress.averageAssessmentScorePct + scorePct) / 2),
    };
    cachedContext = {
      ...cachedContext,
      topicsNeedingReinforcement: result.topicsToRevisit,
    };
    persist();
    notify();
  }, []);

  const setExplanationLevel = useCallback((level: ExplanationLevel) => {
    cachedContext = { ...cachedContext, preferredExplanationLevel: level };
    persist();
    notify();
  }, []);

  const advanceCourseProgress = useCallback((deltaPct: number) => {
    cachedProgress = {
      ...cachedProgress,
      courseProgressPct: Math.min(100, cachedProgress.courseProgressPct + deltaPct),
    };
    persist();
    notify();
  }, []);

  return (
    <LearningProgressContext.Provider
      value={{ progress, learnerContext, completeLesson, recordQuizResult, setExplanationLevel, advanceCourseProgress }}
    >
      {children}
    </LearningProgressContext.Provider>
  );
}

export function useLearningProgress() {
  const ctx = useContext(LearningProgressContext);
  if (!ctx) throw new Error("useLearningProgress must be used within LearningProgressProvider");
  return ctx;
}
