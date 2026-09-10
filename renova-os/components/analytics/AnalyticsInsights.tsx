"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { ErrorState } from "@/components/common/ErrorState";
import { requestAnalyticsInsights } from "@/lib/services/analyticsInsightsService";
import type { AnalyticsInsight } from "@/types/analytics";

const CONFIDENCE_TONE = { high: "growth", medium: "structure", low: "neutral" } as const;

/**
 * AnalyticsInsights — "RENOVA INTELLIGENCE" (brief §15), also serving
 * as the page outline's "Emerging Support Areas" — the two are the
 * same AI-assisted observation surface, so they're implemented as one
 * section rather than duplicated. Every card shows observation,
 * evidence, confidence, and "Review suggested" — never "Action
 * required by system" (brief §15).
 */
export function AnalyticsInsights({ show }: { show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<
    { status: "loading" } | { status: "error"; message: string } | { status: "ready"; insights: AnalyticsInsight[] }
  >({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    requestAnalyticsInsights().then((result) => {
      if (cancelled) return;
      if (result.success) setState({ status: "ready", insights: result.insights });
      else setState({ status: "error", message: result.message });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-[var(--accent-primary)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          ReNova intelligence
        </p>
      </div>
      <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
        Patterns surfaced for staff review — context and decision support, not a judgment about any individual.
      </p>

      <div className="mt-5 space-y-3">
        {state.status === "loading" && (
          <div className="space-y-2">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        )}

        {state.status === "error" && <ErrorState description={state.message} />}

        {state.status === "ready" &&
          state.insights.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: show ? 1 : 0, y: show ? 0 : 8 }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">{insight.title}</p>
                <Badge tone={CONFIDENCE_TONE[insight.confidence]}>
                  {insight.confidence[0].toUpperCase() + insight.confidence.slice(1)} confidence
                </Badge>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">{insight.observation}</p>
              <ul className="mt-2.5 space-y-1">
                {insight.evidence.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-[11.5px] text-[var(--text-muted)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {e}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--border-hairline)] pt-2.5">
                <p className="text-[11.5px] text-[var(--accent-primary)]">Review suggested: {insight.suggestedReview}</p>
                {insight.drillHref && (
                  <button
                    onClick={() => router.push(insight.drillHref!)}
                    className="shrink-0 text-[11px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    View →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
}
