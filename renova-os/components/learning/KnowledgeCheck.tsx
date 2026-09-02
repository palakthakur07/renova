"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Question, QuizAnswer } from "@/types/learning";

/**
 * KnowledgeCheck — brief §22. Score + a supportive read on where
 * understanding stands, never a bare percentage — and any topic
 * missed is framed as "additional practice suggested," never a
 * negative label (brief §21).
 */
export function KnowledgeCheck({
  questions,
  onComplete,
}: {
  questions: Question[];
  onComplete: (answers: QuizAnswer[]) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const question = questions[current];
  const isLast = current === questions.length - 1;

  const correct =
    question.kind === "multiple-choice" ? selected === question.correctOptionId : inputValue.trim() === question.correctInput;

  const handleSubmit = () => setSubmitted(true);

  const handleNext = () => {
    const answer: QuizAnswer = {
      questionId: question.id,
      selectedOptionId: selected ?? undefined,
      inputValue: inputValue || undefined,
      correct,
    };
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    setSelected(null);
    setInputValue("");
    setSubmitted(false);

    if (isLast) {
      setDone(true);
      onComplete(nextAnswers);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  if (done) {
    const scoreCount = answers.filter((a) => a.correct).length;
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5 text-center">
        <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Score</p>
        <p className="mt-1 font-[family-name:var(--font-display)] text-[32px] font-semibold text-[var(--text-primary)]">
          {scoreCount} / {questions.length}
        </p>
        <p className="mt-2 text-[13px] text-[var(--text-secondary)]">
          {scoreCount === questions.length
            ? "Strong understanding of variables."
            : "Good progress — additional practice suggested for the questions you missed."}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
        Question {current + 1} of {questions.length}
      </p>
      <p className="text-[13px] font-medium text-[var(--text-primary)]">{question.prompt}</p>

      {question.kind === "multiple-choice" ? (
        <div className="mt-3 space-y-1.5">
          {question.options?.map((opt) => (
            <button
              key={opt.id}
              disabled={submitted}
              onClick={() => setSelected(opt.id)}
              className={cn(
                "block w-full rounded-[var(--radius-sm)] border px-3 py-2 text-left text-[12.5px] transition-colors duration-200",
                selected === opt.id ? "border-[var(--accent-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]" : "border-[var(--border-hairline)] text-[var(--text-secondary)]"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ) : (
        <input
          disabled={submitted}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your answer…"
          className="mt-3 w-full rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] bg-[var(--bg-canvas)] px-3 py-2 text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)]"
        />
      )}

      {submitted && (
        <div className={cn("mt-3 rounded-[var(--radius-sm)] p-3 text-[12px]", correct ? "bg-[color-mix(in_srgb,var(--accent-growth)_12%,transparent)] text-[var(--text-primary)]" : "bg-[color-mix(in_srgb,var(--accent-critical)_10%,transparent)] text-[var(--text-secondary)]")}>
          <p className="font-medium">{correct ? "That's right." : "Not quite."}</p>
          <p className="mt-0.5">{question.explanation}</p>
        </div>
      )}

      <div className="mt-4">
        {!submitted ? (
          <Button size="sm" onClick={handleSubmit} disabled={question.kind === "multiple-choice" ? !selected : !inputValue.trim()}>
            Submit
          </Button>
        ) : (
          <Button size="sm" onClick={handleNext}>
            {isLast ? "See score" : "Next question"}
          </Button>
        )}
      </div>
    </div>
  );
}
