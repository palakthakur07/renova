"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { requestLessonExplanation, requestLessonSummary } from "@/lib/services/learningCompanionService";
import { useLearningProgress } from "@/components/providers/LearningProgressProvider";
import type { ExplanationLevel } from "@/types/learning";

const LEVELS: { key: ExplanationLevel; label: string }[] = [
  { key: "quick", label: "Quick" },
  { key: "simple", label: "Simple" },
  { key: "detailed", label: "Detailed" },
  { key: "example", label: "Example" },
];

const PROMPTS = [
  "Explain this more simply",
  "Give me an example",
  "Summarize this lesson",
];

/**
 * LearningGuidePanel — "RE:NOVA LEARNING GUIDE" (brief §10–13). Not a
 * chat window: no message history, no input box you type free-form
 * questions into. Instead, a fixed set of contextual actions ("Ask
 * the Learning Guide") that already know the current lesson — the
 * user never has to restate what "this" refers to.
 */
export function LearningGuidePanel({ lessonId }: { lessonId: string }) {
  const { learnerContext, setExplanationLevel } = useLearningProgress();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [response, setResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const runExplain = async (level: ExplanationLevel) => {
    setExplanationLevel(level);
    setStatus("loading");
    const result = await requestLessonExplanation(lessonId, level, learnerContext);
    if (result.success) {
      setResponse(result.data.explanation);
      setStatus("success");
    } else {
      setErrorMessage(result.message);
      setStatus("error");
    }
  };

  const runSummary = async () => {
    setStatus("loading");
    const result = await requestLessonSummary(lessonId);
    if (result.success) {
      setResponse(result.data);
      setStatus("success");
    } else {
      setErrorMessage(result.message);
      setStatus("error");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-14 h-32 w-64 opacity-30"
        style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal-500) 24%, transparent), transparent 70%)" }}
        initial={{ left: "0%" }}
        animate={{ left: ["0%", "45%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles size={15} className="text-[var(--accent-primary)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            ReNova learning guide
          </p>
        </div>
        <button
          aria-label="Language: English (more languages coming soon)"
          className="flex items-center gap-1 rounded-full border border-[var(--border-hairline-strong)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]"
        >
          <Globe size={10} />
          EN
        </button>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {LEVELS.map((l) => (
          <button
            key={l.key}
            onClick={() => runExplain(l.key)}
            aria-pressed={learnerContext.preferredExplanationLevel === l.key}
            className={cn(
              "rounded-full border px-2.5 py-1 text-[11px] transition-colors duration-200",
              learnerContext.preferredExplanationLevel === l.key
                ? "border-[var(--accent-primary)] text-[var(--text-primary)]"
                : "border-[var(--border-hairline-strong)] text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            )}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="relative mt-4 min-h-[88px] rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-3.5">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[12.5px] text-[var(--text-muted)]">
              Ask the Learning Guide for an explanation, or try one of the prompts below.
            </motion.p>
          )}
          {status === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-[12.5px] text-[var(--text-muted)]">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              Thinking through your lesson…
            </motion.div>
          )}
          {status === "success" && response && (
            <motion.div key="success" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <p className="text-[12.5px] leading-relaxed text-[var(--text-primary)]">{response}</p>
              <span className="mt-2 inline-block rounded-full border border-[var(--border-hairline-strong)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-[var(--text-muted)]">
                AI learning guidance
              </span>
            </motion.div>
          )}
          {status === "error" && errorMessage && (
            <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-2">
              <p className="text-[12.5px] text-[var(--text-secondary)]">{errorMessage}</p>
              <button onClick={() => runExplain(learnerContext.preferredExplanationLevel)} className="flex w-fit items-center gap-1 text-[11px] text-[var(--accent-primary)]">
                <RefreshCcw size={11} /> Retry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative mt-4 space-y-1.5">
        {PROMPTS.map((p) => (
          <button
            key={p}
            onClick={() => (p === "Summarize this lesson" ? runSummary() : runExplain(p.includes("simply") ? "simple" : "example"))}
            className="block w-full rounded-[var(--radius-sm)] border border-[var(--border-hairline)] px-3 py-2 text-left text-[12px] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
