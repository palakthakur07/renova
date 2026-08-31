"use client";

import { motion } from "framer-motion";
import { RecommendationCard } from "./RecommendationCard";
import type { Recommendation, RecommendationCategory, ReviewDecision } from "@/types/planner";

const CATEGORY_LABEL: Record<RecommendationCategory, string> = {
  education: "Education",
  "skill-development": "Skill development",
  counseling: "Counseling / Support",
  "employment-prep": "Employment preparation",
  "life-skills": "Life skills",
  reintegration: "Reintegration",
};

const CATEGORY_ORDER: RecommendationCategory[] = [
  "education",
  "skill-development",
  "counseling",
  "employment-prep",
  "life-skills",
  "reintegration",
];

/** RecommendationList — organized by category (brief §23), only categories that actually have recommendations. */
export function RecommendationList({
  recommendations,
  decisions,
  onDecide,
  onOpen,
}: {
  recommendations: Recommendation[];
  decisions: Record<string, ReviewDecision>;
  onDecide: (id: string, decision: ReviewDecision) => void;
  onOpen: (recommendation: Recommendation) => void;
}) {
  return (
    <div className="space-y-6">
      {CATEGORY_ORDER.map((category) => {
        const items = recommendations.filter((r) => r.category === category);
        if (items.length === 0) return null;
        return (
          <motion.div key={category} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {CATEGORY_LABEL[category]}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((r) => (
                <RecommendationCard
                  key={r.id}
                  recommendation={r}
                  decision={decisions[r.id] ?? "accepted"}
                  onDecide={(d) => onDecide(r.id, d)}
                  onOpen={() => onOpen(r)}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
