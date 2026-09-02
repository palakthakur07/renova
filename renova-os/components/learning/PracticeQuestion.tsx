"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/learning";

/**
 * PracticeQuestion — brief §19/§23. Feedback always explains why,
 * never just "Correct!" / "Incorrect." — and a wrong answer offers
 * another attempt rather than a dead end.
 */
export function PracticeQuestion({
  question,
  onGenerateAnother,
  generating,
}: {
  question: Question;
  onGenerateAnother: () => void;
  generating: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correct =
    question.kind === "multiple-choice"
      ? selected === question.correctOptionId
      : inputValue.trim() === question.correctInput;

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setSubmitted(false);
    setSelected(null);
    setInputValue("");
  };

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5">
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
                selected === opt.id
                  ? "border-[var(--accent-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
                  : "border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-hairline-strong)]"
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

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="feedback" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <div className={cn("flex items-start gap-2 rounded-[var(--radius-sm)] p-3", correct ? "bg-[color-mix(in_srgb,var(--accent-growth)_12%,transparent)]" : "bg-[color-mix(in_srgb,var(--accent-critical)_10%,transparent)]")}>
              {correct ? (
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--accent-growth)]" />
              ) : (
                <XCircle size={15} className="mt-0.5 shrink-0 text-[var(--accent-critical)]" />
              )}
              <div>
                <p className="text-[12.5px] font-medium text-[var(--text-primary)]">{correct ? "That's right." : "Not quite."}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">{question.explanation}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {!correct && (
                <Button variant="secondary" size="sm" onClick={handleReset}>
                  Try another example
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={onGenerateAnother} disabled={generating}>
                <RefreshCcw size={12} className="mr-1" />
                {generating ? "Generating…" : "Generate practice"}
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="submit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
            <Button size="sm" onClick={handleSubmit} disabled={question.kind === "multiple-choice" ? !selected : !inputValue.trim()}>
              Submit
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
