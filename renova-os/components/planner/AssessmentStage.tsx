"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { AssessmentCategory, ConfidenceLevel } from "@/types/planner";

const CONFIDENCE_TONE: Record<ConfidenceLevel, "growth" | "structure" | "neutral"> = {
  high: "growth",
  medium: "structure",
  low: "neutral",
};

/**
 * AssessmentStage (02) — a capability map (brief §10: "avoid generic
 * bar charts everywhere") plus the structured category list brief §9
 * asks for. One shared radar visualization, expandable rows below it.
 */
export function AssessmentStage({
  categories,
  onNext,
  onBack,
}: {
  categories: AssessmentCategory[];
  onNext: () => void;
  onBack: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const data = categories.map((c) => ({ label: c.label, score: c.score }));

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
          Capability map
        </p>
        <div className="mt-2 h-80 w-full" role="img" aria-label="Assessment capability radar across eight categories">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="72%">
              <PolarGrid stroke="var(--border-hairline)" />
              <PolarAngleAxis dataKey="label" tick={{ fill: "var(--color-fog-200)", fontSize: 10.5 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar dataKey="score" stroke="var(--color-teal-400)" fill="var(--color-teal-400)" fillOpacity={0.22} strokeWidth={2} isAnimationActive animationDuration={800} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2">
        {categories.map((c) => {
          const isOpen = expanded === c.id;
          return (
            <div key={c.id} className="border-b border-[var(--border-hairline)] last:border-0">
              <button
                onClick={() => setExpanded(isOpen ? null : c.id)}
                className="flex w-full items-center justify-between gap-4 rounded-[var(--radius-md)] px-4 py-3.5 text-left transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="text-[13px] font-medium text-[var(--text-primary)]">{c.label}</span>
                  <Badge tone="neutral">{c.level}</Badge>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-[13px] text-[var(--text-secondary)]">{c.score}%</span>
                  <Badge tone={CONFIDENCE_TONE[c.confidence]}>{c.confidence}</Badge>
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-[12px] text-[var(--text-secondary)]">
                      <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                        Evidence · Last updated {c.lastUpdated}
                      </p>
                      <ul className="space-y-1">
                        {c.evidence.map((e, i) => (
                          <li key={i}>· {e}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Continue to goals</Button>
      </div>
    </motion.div>
  );
}
