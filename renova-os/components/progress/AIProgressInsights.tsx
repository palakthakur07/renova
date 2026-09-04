"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, X } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { requestProgressInsights } from "@/lib/services/progressInsightsService";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/Skeleton";
import { Button } from "@/components/ui/Button";
import type { ProgressInsight } from "@/types/progress";
import type { ProgressInsightContext } from "@/lib/ai/progressInsights";

/**
 * AIProgressInsights — "ReNova Intelligence" (brief §24). Same
 * gradient-drift treatment as Phase 3/4's AIInsights, so AI-generated
 * content stays visually distinct across the whole OS. Every insight
 * carries "AI-GENERATED · HUMAN REVIEW REQUIRED" and Accept/Dismiss —
 * accepting never silently becomes an official record (brief §58).
 */
export function AIProgressInsights({
  context,
  show,
  onSelectInsight,
}: {
  context: ProgressInsightContext;
  show: boolean;
  onSelectInsight: (insight: ProgressInsight) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const { pushToast } = useNotifications();
  const [state, setState] = useState<
    { status: "loading" } | { status: "error"; message: string } | { status: "ready"; insights: ProgressInsight[] }
  >({ status: "loading" });
  const [decided, setDecided] = useState<Record<string, "accepted" | "dismissed">>({});

  useEffect(() => {
    let cancelled = false;
    requestProgressInsights(context).then((result) => {
      if (cancelled) return;
      if (result.success) setState({ status: "ready", insights: result.insights });
      else setState({ status: "error", message: result.message });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-teal-500) 22%, transparent), transparent 70%)",
        }}
        initial={{ left: "5%" }}
        animate={reducedMotion ? undefined : { left: ["5%", "65%", "5%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center gap-2">
        <Sparkles size={16} className="text-[var(--accent-primary)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          ReNova intelligence
        </p>
      </div>
      <p className="relative mt-1 text-[13px] text-[var(--text-secondary)]">
        AI-generated · Human review required.
      </p>

      <div className="relative mt-5">
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
              <p className="text-[13px] leading-relaxed text-[var(--text-primary)]">{insight.observation}</p>

              <button
                onClick={() => onSelectInsight(insight)}
                className="mt-3 text-[12px] font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Why this insight? →
              </button>

              <div className="mt-4 flex items-center gap-2">
                {decided[insight.id] ? (
                  <span className="text-[12px] text-[var(--text-muted)]">
                    {decided[insight.id] === "accepted" ? "Accepted for review" : "Dismissed"}
                  </span>
                ) : (
                  <>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        setDecided((d) => ({ ...d, [insight.id]: "accepted" }));
                        pushToast({
                          title: "Insight accepted for review",
                          detail: "Demo action — no record was actually created. Staff review still required.",
                          tone: "growth",
                        });
                      }}
                    >
                      <Check size={13} className="mr-1.5" />
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setDecided((d) => ({ ...d, [insight.id]: "dismissed" }));
                        pushToast({ title: "Insight dismissed", tone: "neutral" });
                      }}
                    >
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
