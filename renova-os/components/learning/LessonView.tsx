"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LessonSection } from "./LessonSection";
import { InteractiveExample } from "./InteractiveExample";
import { PracticeQuestion } from "./PracticeQuestion";
import { KnowledgeCheck } from "./KnowledgeCheck";
import { Reflection } from "./Reflection";
import { CompletionView } from "./CompletionView";
import { LearningGuidePanel } from "./LearningGuidePanel";
import { FocusModeToggle } from "./FocusModeToggle";
import { Button } from "@/components/ui/Button";
import { useLearningProgress } from "@/components/providers/LearningProgressProvider";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { requestPracticeQuestion } from "@/lib/services/learningCompanionService";
import { questions } from "@/lib/demo-data/learning/questions";
import type { Lesson, Question, QuizAnswer } from "@/types/learning";

/**
 * LessonView — brief §15–17. Desktop: lesson content + Learning Guide
 * side by side. Mobile: lesson first, guide becomes a collapsible
 * panel beneath it rather than a competing column (brief §16).
 */
export function LessonView({ lesson }: { lesson: Lesson }) {
  const { completeLesson } = useLearningProgress();
  const { pushToast } = useNotifications();

  const [sectionIndex, setSectionIndex] = useState(0);
  const [focusMode, setFocusMode] = useState(false);
  const [practiceQuestion, setPracticeQuestion] = useState<Question>(
    questions.find((q) => q.id === lesson.practiceQuestionIds[0]) ?? questions[0]
  );
  const [generatingPractice, setGeneratingPractice] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);

  const section = lesson.sections[sectionIndex];
  const isLastSection = sectionIndex === lesson.sections.length - 1;
  const progressPct = Math.round(((sectionIndex + (lessonComplete ? 1 : 0)) / lesson.sections.length) * 100);

  const checkQuestions = lesson.checkQuestionIds
    .map((id) => questions.find((q) => q.id === id))
    .filter((q): q is Question => !!q);

  const handleGenerateAnotherPractice = async () => {
    setGeneratingPractice(true);
    const result = await requestPracticeQuestion(lesson.id, "standard");
    if (result.success) setPracticeQuestion(result.data);
    setGeneratingPractice(false);
  };

  const handleCheckComplete = (answers: QuizAnswer[]) => {
    void answers; // score is shown inline by KnowledgeCheck; advancing happens via the Continue button below
  };

  const handleReflectionSubmit = () => {
    completeLesson(lesson.id, "web-fundamentals", 4);
    setLessonComplete(true);
    pushToast({
      title: "Rehabilitation progress updated",
      detail: `${lesson.title} milestone completed. Human Growth Profile updated.`,
      tone: "growth",
    });
  };

  if (lessonComplete) {
    return (
      <div className="mx-auto max-w-[640px]">
        <CompletionView lessonTitle={lesson.title} skillsUpdated={["Web Fundamentals", lesson.skill]} />
      </div>
    );
  }

  return (
    <div className={cn("mx-auto transition-all duration-500", focusMode ? "max-w-[820px]" : "max-w-[1100px]")}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Lesson progress
          </p>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-1.5 flex-1 max-w-xs overflow-hidden rounded-full bg-[var(--bg-surface-raised)]">
              <motion.div className="h-full rounded-full bg-[var(--accent-primary)]" animate={{ width: `${progressPct}%` }} transition={{ duration: 0.4 }} />
            </div>
            <span className="font-mono text-[12px] text-[var(--text-secondary)]">
              {sectionIndex + 1} / {lesson.sections.length} sections
            </span>
          </div>
        </div>
        <FocusModeToggle active={focusMode} onToggle={() => setFocusMode((f) => !f)} />
      </div>

      <div className={cn("grid grid-cols-1 gap-5", !focusMode && "lg:grid-cols-[1fr_320px]")}>
        <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 md:p-9">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
            {lesson.title}
          </h1>

          <AnimatePresence mode="wait">
            <motion.div key={section.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="mt-6">
              {(section.type === "concept" || section.type === "example") && <LessonSection section={section} />}

              {section.type === "interactive" && (
                <>
                  <LessonSection section={section} />
                  <div className="mt-4">
                    <InteractiveExample />
                  </div>
                </>
              )}

              {section.type === "practice" && (
                <>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-primary)]">{section.title}</p>
                  <PracticeQuestion question={practiceQuestion} onGenerateAnother={handleGenerateAnotherPractice} generating={generatingPractice} />
                </>
              )}

              {section.type === "checkpoint" && (
                <>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-primary)]">{section.title}</p>
                  {checkQuestions.length > 0 ? (
                    <KnowledgeCheck questions={checkQuestions} onComplete={handleCheckComplete} />
                  ) : (
                    <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--border-hairline-strong)] p-5 text-[13px] text-[var(--text-muted)]">
                      No checkpoint questions for this lesson yet — continue when you&apos;re ready.
                    </div>
                  )}
                </>
              )}

              {section.type === "reflection" && (
                <>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-primary)]">{section.title}</p>
                  <Reflection onSubmit={handleReflectionSubmit} />
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {section.type !== "reflection" && (
            <div className="mt-8 flex justify-end">
              {isLastSection ? (
                <Button onClick={handleReflectionSubmit}>Complete lesson</Button>
              ) : (
                <Button onClick={() => setSectionIndex((i) => Math.min(lesson.sections.length - 1, i + 1))}>
                  Continue
                </Button>
              )}
            </div>
          )}
        </div>

        {!focusMode && (
          <div className="lg:sticky lg:top-24 lg:self-start">
            <LearningGuidePanel lessonId={lesson.id} />
          </div>
        )}
      </div>
    </div>
  );
}
