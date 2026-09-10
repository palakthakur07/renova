"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown, Minus, Info } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { KeyIndicator } from "@/types/analytics";

const DELTA_ICON = { up: ArrowUp, down: ArrowDown, flat: Minus } as const;
const DELTA_COLOR = {
  up: "var(--accent-growth)",
  down: "var(--accent-critical)",
  flat: "var(--text-muted)",
} as const;

/**
 * AnalyticsMetrics — KEY INDICATORS (brief §4, §17, §19). Each card's
 * info button expands a plain-language definition inline rather than
 * opening a drawer, so "why does this say 64%?" is answered in one
 * click without leaving the page (brief §17: "Do NOT hide metric
 * definitions"). Cards with a drillHref are clickable straight
 * through to the owning module (brief §19).
 */
export function AnalyticsMetrics({ indicators, show }: { indicators: KeyIndicator[]; show: boolean }) {
  const router = useRouter();
  const reducedMotion = usePrefersReducedMotion();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {indicators.map((ind, i) => {
        const DeltaIcon = DELTA_ICON[ind.deltaDirection];
        const isExpanded = expanded === ind.id;
        return (
          <motion.div
            key={ind.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[11px] leading-snug text-[var(--text-secondary)]">{ind.label}</p>
              <button
                aria-label={`What does ${ind.label} mean?`}
                aria-expanded={isExpanded}
                onClick={() => setExpanded(isExpanded ? null : ind.id)}
                className="shrink-0 text-[var(--text-muted)] transition-colors hover:text-[var(--accent-primary)]"
              >
                <Info size={13} />
              </button>
            </div>

            <button
              onClick={() => ind.drillHref && router.push(ind.drillHref)}
              disabled={!ind.drillHref}
              className="mt-1.5 block text-left disabled:cursor-default"
            >
              <span className="font-[family-name:var(--font-display)] text-[26px] font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent-primary)]">
                {ind.value}
              </span>
            </button>

            <div className="mt-1 flex items-center gap-1 text-[11px]" style={{ color: DELTA_COLOR[ind.deltaDirection] }}>
              <DeltaIcon size={11} />
              {ind.deltaLabel}
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-2.5 overflow-hidden border-t border-[var(--border-hairline)] pt-2.5 text-[11px] leading-relaxed text-[var(--text-muted)]"
                >
                  {ind.definition}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
