"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Pencil, X } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { requestReintegrationGuide } from "@/lib/services/reintegrationGuideService";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/Skeleton";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { ReintegrationInsight, StaffDecision } from "@/types/reintegration";
import type { ReintegrationGuideContext } from "@/lib/ai/reintegrationGuide";

const TYPE_LABEL: Record<ReintegrationInsight["type"], string> = {
  priority: "Priority",
  opportunity: "Opportunity",
  support: "Support need",
  "next-step": "Next step",
};
const TYPE_TONE = {
  priority: "structure",
  opportunity: "growth",
  support: "achievement",
  "next-step": "neutral",
} as const;

/**
 * ReintegrationInsights — "AI Reintegration Guide" (brief §11–12).
 * Structured decision support, never a chatbot. Every insight ships
 * with Accept / Modify / Dismiss — accepting only marks it for staff
 * review, it never becomes an automatic record or decision (brief
 * §12: "Never allow AI to automatically make legal or release
 * decisions").
 */
export function ReintegrationInsights({
  context,
  show,
  onSelectInsight,
}: {
  context: ReintegrationGuideContext;
  show: boolean;
  onSelectInsight: (insight: ReintegrationInsight) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const { pushToast } = useNotifications();
  const [state, setState] = useState<
    | { status: "loading" }
    | { status: "error"; message: string }
    | { status: "ready"; insights: ReintegrationInsight[] }
  >({ status: "loading" });
  const [decided, setDecided] = useState<Record<string, StaffDecision>>({});

  useEffect(() => {
    let cancelled = false;
    requestReintegrationGuide(context).then((result) => {
      if (cancelled) return;
      if (result.success) setState({ status: "ready", insights: result.insights });
      else setState({ status: "error", message: result.message });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decide = (insight: ReintegrationInsight, decision: StaffDecision) => {
    setDecided((d) => ({ ...d, [insight.id]: decision }));
    const copy: Record<StaffDecision, { title: string; detail?: string }> = {
      accepted: {
        title: "Suggestion accepted for review",
        detail: "Demo action — no record was actually created. Staff review still required.",
      },
      modified: { title: "Marked for staff modification" },
      dismissed: { title: "Suggestion dismissed" },
    };
    pushToast({ ...copy[decision], tone: decision === "dismissed" ? "neutral" : "growth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 h-40 w-[420px] opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--accent-primary) 22%, transparent), transparent 70%)",
        }}
        initial={{ left: "5%" }}
        animate={reducedMotion ? undefined : { left: ["5%", "65%", "5%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center gap-2">
        <Sparkles size={16} className="text-[var(--accent-primary)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          AI reintegration guide
        </p>
      </div>
      <p className="relative mt-1 text-[13px] text-[var(--text-secondary)]">
        AI-generated preparation suggestions are recommendations for staff review.
      </p>

      <div className="relative mt-5 space-y-3">
        {state.status === "loading" && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        )}

        {state.status === "error" && <ErrorState description={state.message} />}

        {state.status === "ready" &&
          state.insights.map((insight) => (
            <div
              key={insight.id}
              className="rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">{insight.title}</p>
                <Badge tone={TYPE_TONE[insight.type]}>{TYPE_LABEL[insight.type]}</Badge>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">{insight.explanation}</p>

              <button
                onClick={() => onSelectInsight(insight)}
                className="mt-3 text-[12px] font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Why this suggestion? →
              </button>

              <div className="mt-4 flex items-center gap-2">
                {decided[insight.id] ? (
                  <span className="text-[12px] text-[var(--text-muted)]">
                    {decided[insight.id] === "accepted" && "Accepted for review"}
                    {decided[insight.id] === "modified" && "Marked for staff modification"}
                    {decided[insight.id] === "dismissed" && "Dismissed"}
                  </span>
                ) : (
                  <>
                    <Button size="sm" variant="secondary" onClick={() => decide(insight, "accepted")}>
                      <Check size={13} className="mr-1.5" />
                      Accept
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => decide(insight, "modified")}>
                      <Pencil size={13} className="mr-1.5" />
                      Modify
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => decide(insight, "dismissed")}>
                      <X size={13} className="mr-1.5" />
                      Dismiss
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}
