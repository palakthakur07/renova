"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { PlannerError } from "@/lib/services/rehabilitationPlannerService";

const PROCESSING_STEPS = [
  "Reading profile",
  "Analyzing skills",
  "Identifying development areas",
  "Mapping learning pathways",
  "Building rehabilitation roadmap",
  "Checking plan consistency",
];

type ServiceStatus = "pending" | "success" | "error";

/**
 * GenerationStage (04) — the AI processing environment (brief §16–19).
 * Plain product-level language, no fake technical jargon. The step
 * sequence is a fixed-pace visual (it doesn't reflect literal incremental
 * backend progress — the mock service resolves near-instantly) but
 * genuinely gates on the real service call: `onComplete` never fires
 * before both the animation has played out AND the service has actually
 * resolved, so swapping in a slower real backend later just means this
 * stage waits a little longer at whichever step is showing when it does.
 */
export function GenerationStage({
  serviceStatus,
  error,
  onComplete,
  onRetry,
}: {
  serviceStatus: ServiceStatus;
  error: PlannerError | null;
  onComplete: () => void;
  onRetry: () => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [stepIndex, setStepIndex] = useState(-1);
  const [animationDone, setAnimationDone] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    if (serviceStatus === "error") return;
    const stepDelay = reducedMotion ? 60 : 420;
    const timers = PROCESSING_STEPS.map((_, i) =>
      setTimeout(() => setStepIndex(i), stepDelay * (i + 1))
    );
    const doneTimer = setTimeout(() => setAnimationDone(true), stepDelay * (PROCESSING_STEPS.length + 1));
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, [reducedMotion, serviceStatus]);

  useEffect(() => {
    if (completedRef.current) return;
    if (animationDone && serviceStatus === "success") {
      completedRef.current = true;
      onComplete();
    }
  }, [animationDone, serviceStatus, onComplete]);

  if (serviceStatus === "error" && error) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-5 rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,var(--accent-critical)_30%,transparent)] bg-[var(--bg-surface)] p-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-critical)]">
          ReNova intelligence unavailable
        </p>
        <p className="max-w-md text-[14px] leading-relaxed text-[var(--text-secondary)]">{error.message}</p>
        <Button variant="secondary" onClick={onRetry}>
          <RefreshCcw size={14} className="mr-1.5" />
          Retry
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-10">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <GenerationCore stepCount={stepIndex + 1} total={PROCESSING_STEPS.length} />

        <ul className="mt-8 w-full space-y-3">
          {PROCESSING_STEPS.map((label, i) => {
            const state = i < stepIndex ? "done" : i === stepIndex ? "active" : "upcoming";
            return (
              <li key={label} className="flex items-center gap-3">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px]"
                  style={{
                    borderColor: state === "upcoming" ? "var(--border-hairline-strong)" : "var(--color-teal-400)",
                    background: state === "done" ? "var(--color-teal-400)" : "transparent",
                    color: state === "done" ? "var(--color-graphite-950)" : "var(--text-muted)",
                  }}
                >
                  {state === "done" && <Check size={11} />}
                  {state === "active" && (
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal-400)]"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </span>
                <span
                  className="text-[13px]"
                  style={{ color: state === "upcoming" ? "var(--text-muted)" : "var(--text-primary)" }}
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-surface-raised)] p-3.5 text-[12px] leading-relaxed text-[var(--text-secondary)]">
          AI-generated recommendations are suggestions based on available information. Staff review and approval are required.
        </div>
      </div>
    </motion.div>
  );
}

/** The central intelligence core — nodes connect as processing steps complete. */
function GenerationCore({ stepCount, total }: { stepCount: number; total: number }) {
  const size = 160;
  const c = size / 2;
  const r = 58;
  const nodes = Array.from({ length: total }, (_, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
    const round = (n: number) => Math.round(n * 100) / 100;
    return { x: round(c + r * Math.cos(angle)), y: round(c + r * Math.sin(angle)) };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <defs>
        <radialGradient id="gen-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-teal-400)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--color-teal-400)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.circle
        cx={c}
        cy={c}
        r={22}
        fill="url(#gen-core-glow)"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx={c} cy={c} r={10} fill="var(--color-teal-400)" />
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.line
            x1={c}
            y1={c}
            x2={n.x}
            y2={n.y}
            stroke="var(--color-teal-400)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: i < stepCount ? 1 : 0, opacity: i < stepCount ? 0.6 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={4}
            fill={i < stepCount ? "var(--color-teal-400)" : "var(--bg-surface-raised)"}
            stroke="var(--border-hairline-strong)"
            strokeWidth={i < stepCount ? 0 : 1}
            animate={{ scale: i < stepCount ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
        </g>
      ))}
    </svg>
  );
}
