"use client";

import { motion } from "framer-motion";
import { Flag, PartyPopper } from "lucide-react";
import { RoadmapNodeCard } from "./RoadmapNodeCard";
import type { RoadmapNode, Recommendation, ReviewDecision } from "@/types/planner";

/**
 * Roadmap — the centerpiece (brief §24). Nodes group by `order`; nodes
 * sharing an order render stacked (a parallel path, brief §26) within
 * one step. Mobile-first: stacks vertically by default, becomes a
 * horizontal flow at lg+ (brief §51 — a real vertical journey on
 * mobile, not a squeezed desktop layout).
 */
export function Roadmap({
  roadmap,
  recommendations,
  decisions,
  show,
  onSelectNode,
}: {
  roadmap: RoadmapNode[];
  recommendations: Recommendation[];
  decisions: Record<string, ReviewDecision>;
  show: boolean;
  onSelectNode: (recommendation: Recommendation) => void;
}) {
  const orders = Array.from(new Set(roadmap.map((n) => n.order))).sort((a, b) => a - b);

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Rehabilitation roadmap
      </p>

      <div className="mt-6 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-3">
        <RoadmapEndpoint icon={Flag} label="Start" />
        <Connector show={show} />

        {orders.map((order, stepIndex) => {
          const nodesAtOrder = roadmap.filter((n) => n.order === order);
          return (
            <div key={order} className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-3">
              <div className="flex flex-col gap-3">
                {nodesAtOrder.map((node, i) => (
                  <RoadmapNodeCard
                    key={node.id}
                    node={node}
                    decision={decisions[node.recommendationId] ?? "accepted"}
                    index={stepIndex + i}
                    show={show}
                    onSelect={() => {
                      const rec = recommendations.find((r) => r.id === node.recommendationId);
                      if (rec) onSelectNode(rec);
                    }}
                  />
                ))}
              </div>
              {stepIndex < orders.length - 1 && <Connector show={show} />}
            </div>
          );
        })}

        <Connector show={show} />
        <RoadmapEndpoint icon={PartyPopper} label="Reintegration" />
      </div>
    </div>
  );
}

function RoadmapEndpoint({ icon: Icon, label }: { icon: typeof Flag; label: string }) {
  return (
    <div className="flex shrink-0 flex-row items-center gap-2 lg:flex-col lg:gap-1.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-hairline-strong)] text-[var(--accent-primary)]">
        <Icon size={15} />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</span>
    </div>
  );
}

function Connector({ show }: { show: boolean }) {
  return (
    <motion.div
      className="h-6 w-px shrink-0 self-center lg:h-px lg:w-6"
      style={{
        background: "linear-gradient(90deg, var(--color-teal-400), var(--border-hairline-strong))",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 0.6 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}
