"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { requestProgressInsight } from "@/lib/services/counselorAssistantService";
import type { CounselorAssistantContext } from "@/lib/ai/counselorAssistant";
import type { CounselorInsight } from "@/types/counselor";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

/**
 * ProgressInsightTool — "PROGRESS INSIGHT" (brief §6): a structured
 * interpretation of recent rehabilitation activity, always tied to
 * the evidence list shown beneath it — never an unattributed claim.
 */
export function ProgressInsightTool({ context }: { context: CounselorAssistantContext }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [insight, setInsight] = useState<CounselorInsight | null>(null);

  const handleAsk = async () => {
    setStatus("loading");
    const result = await requestProgressInsight(context);
    if (result.success) {
      setInsight(result.data);
      setStatus("ready");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Lightbulb size={14} className="text-[var(--accent-primary)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Progress insight
          </p>
        </div>
        <Button size="sm" variant="secondary" onClick={handleAsk} disabled={status === "loading"}>
          {status === "loading" && <Loader2 size={12} className="mr-1.5 animate-spin" />}
          Ask for insight
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {status === "ready" && insight && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[13px] leading-relaxed text-[var(--text-primary)]">{insight.observation}</p>
              <Badge tone={CONFIDENCE_TONE[insight.confidence]}>{insight.confidence}</Badge>
            </div>
            <ul className="mt-3 space-y-1">
              {insight.evidence.map((e) => (
                <li key={e} className="flex items-start gap-2 text-[11.5px] text-[var(--text-muted)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-[12px] text-[var(--accent-critical)]"
          >
            Insight is temporarily unavailable.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
