"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, Check, Pencil, X, Loader2 } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { requestSessionBrief } from "@/lib/services/counselorAssistantService";
import type { CounselorAssistantContext } from "@/lib/ai/counselorAssistant";
import type { SessionBrief } from "@/types/counselor";

const GENERATION_STEPS = ["Reviewing recent activity", "Connecting rehabilitation goals", "Preparing counselor brief"];

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

/**
 * SessionPrepTool — "PREPARE SESSION" (brief §6, §8, §18), the
 * flagship demo interaction: select → prepare → AI brief → counselor
 * review → add to note. The generation state cycles through fixed,
 * concise status copy (brief §17) — never fabricated reasoning steps.
 */
export function SessionPrepTool({
  context,
  onAddToNote,
}: {
  context: CounselorAssistantContext;
  onAddToNote: (text: string) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const { pushToast } = useNotifications();
  const [status, setStatus] = useState<"idle" | "generating" | "ready" | "error">("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [brief, setBrief] = useState<SessionBrief | null>(null);
  const [decision, setDecision] = useState<"accepted" | "edited" | "dismissed" | null>(null);

  const handlePrepare = async () => {
    setStatus("generating");
    setDecision(null);
    setStepIndex(0);
    const stepTimer = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, GENERATION_STEPS.length - 1));
    }, reducedMotion ? 0 : 550);

    const result = await requestSessionBrief(context);
    clearInterval(stepTimer);

    if (result.success) {
      setBrief(result.data);
      setStatus("ready");
    } else {
      setStatus("error");
    }
  };

  const decide = (next: "accepted" | "edited" | "dismissed") => {
    setDecision(next);
    if (next === "accepted" && brief) {
      onAddToNote(
        `Focus: ${brief.focus}\nRecent progress: ${brief.recentProgress.join("; ")}\nNeeds attention: ${brief.needsAttention.join("; ")}`
      );
      pushToast({ title: "Brief accepted", detail: "Added to session note for review.", tone: "growth" });
    } else if (next === "dismissed") {
      pushToast({ title: "Brief dismissed", tone: "neutral" });
    } else {
      pushToast({ title: "Marked for edit", detail: "Adjust the note below before saving.", tone: "structure" });
    }
  };

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ClipboardCheck size={15} className="text-[var(--accent-primary)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Prepare session
          </p>
        </div>
        <Button size="sm" onClick={handlePrepare} disabled={status === "generating"}>
          {status === "generating" && <Loader2 size={13} className="mr-1.5 animate-spin" />}
          {status === "ready" ? "Regenerate" : "Prepare session"}
        </Button>
      </div>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        AI-assisted suggestion — review required before it becomes part of any record.
      </p>

      <AnimatePresence mode="wait">
        {status === "generating" && (
          <motion.div
            key="generating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-5 space-y-2"
          >
            {GENERATION_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2 text-[12.5px]">
                {i < stepIndex ? (
                  <Check size={13} className="text-[var(--color-teal-400)]" />
                ) : i === stepIndex ? (
                  <Loader2 size={13} className="animate-spin text-[var(--accent-primary)]" />
                ) : (
                  <span className="h-3 w-3 rounded-full border border-[var(--border-hairline-strong)]" />
                )}
                <span className={i <= stepIndex ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>
                  {step}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-5 text-[12.5px] text-[var(--accent-critical)]"
          >
            The AI assistant is temporarily unavailable. Try again in a moment.
          </motion.p>
        )}

        {status === "ready" && brief && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 space-y-4 rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Focus</p>
                <p className="text-[13px] font-medium text-[var(--text-primary)]">{brief.focus}</p>
              </div>
              <Badge tone={CONFIDENCE_TONE[brief.confidence]}>
                {brief.confidence[0].toUpperCase() + brief.confidence.slice(1)} confidence
              </Badge>
            </div>

            <Field title="Recent progress" items={brief.recentProgress} dot="var(--color-teal-400)" />
            <Field title="Positive signals" items={brief.positiveSignals} dot="var(--accent-growth)" />
            <Field title="Needs attention" items={brief.needsAttention} dot="var(--color-gold-400)" />

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                Suggested discussion
              </p>
              <ol className="mt-1.5 space-y-1.5">
                {brief.suggestedQuestions.map((q, i) => (
                  <li key={q} className="flex gap-2 text-[12.5px] leading-snug text-[var(--text-secondary)]">
                    <span className="text-[var(--text-muted)]">{i + 1}.</span>
                    {q}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                Suggested follow-up
              </p>
              <p className="text-[12.5px] text-[var(--text-secondary)]">{brief.suggestedFollowUp}</p>
            </div>

            <p className="border-t border-[var(--border-hairline)] pt-3 text-[11px] text-[var(--text-muted)]">
              Review required. This is decision support, not a counselor decision.
            </p>

            <div className="flex items-center gap-2">
              {decision ? (
                <span className="text-[12px] text-[var(--text-muted)]">
                  {decision === "accepted" && "Added to session note"}
                  {decision === "edited" && "Marked for edit"}
                  {decision === "dismissed" && "Dismissed"}
                </span>
              ) : (
                <>
                  <Button size="sm" variant="secondary" onClick={() => decide("accepted")}>
                    <Check size={13} className="mr-1.5" />
                    Accept
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => decide("edited")}>
                    <Pencil size={13} className="mr-1.5" />
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => decide("dismissed")}>
                    <X size={13} className="mr-1.5" />
                    Dismiss
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ title, items, dot }: { title: string; items: string[]; dot: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{title}</p>
      <ul className="mt-1.5 space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[12.5px] leading-snug text-[var(--text-secondary)]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: dot }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
