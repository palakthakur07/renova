"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { calculateSkillChange } from "@/lib/progress/progressEngine";
import type { SkillProgress } from "@/types/progress";

/**
 * SkillDevelopment — before → current progress trails (brief §14).
 * Deliberately not a static bar chart: each row is a track with a
 * muted marker for the previous score and a lit marker for the
 * current one, connected by a line that draws in on reveal — the
 * same "growth over time" register as JourneyTimeline, at skill scale.
 */
export function SkillDevelopment({
  skills,
  show,
  onSelect,
}: {
  skills: SkillProgress[];
  show: boolean;
  onSelect: (skill: SkillProgress) => void;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Skill development
      </p>

      <div className="mt-6 space-y-6">
        {skills.map((skill, i) => {
          const change = calculateSkillChange(skill.previousScore, skill.currentScore);
          return (
            <button
              key={skill.id}
              onClick={() => onSelect(skill)}
              className="block w-full text-left"
              aria-label={`${skill.label}: ${skill.previousScore} to ${skill.currentScore}, view history`}
            >
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-medium text-[var(--text-primary)]">{skill.label}</span>
                <span className="font-mono text-[12px] text-[var(--accent-growth)]">+{change}</span>
              </div>

              <div className="relative mt-3 h-1.5 w-full rounded-full bg-[var(--bg-surface-raised)]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: "var(--color-teal-400)", opacity: 0.35 }}
                  initial={{ width: 0 }}
                  animate={{ width: show ? `${skill.previousScore}%` : 0 }}
                  transition={{ duration: 0.8, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: "linear-gradient(to right, var(--color-teal-400), var(--color-emerald-500))" }}
                  initial={{ width: 0 }}
                  animate={{ width: show ? `${skill.currentScore}%` : 0 }}
                  transition={{ duration: 1.1, delay: reducedMotion ? 0 : i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[var(--bg-surface)]"
                  style={{ background: "var(--text-muted)" }}
                  initial={{ left: 0, opacity: 0 }}
                  animate={{ left: show ? `${skill.previousScore}%` : 0, opacity: show ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[var(--bg-surface)]"
                  style={{ background: "var(--color-emerald-500)" }}
                  initial={{ left: 0, opacity: 0 }}
                  animate={{ left: show ? `${skill.currentScore}%` : 0, opacity: show ? 1 : 0 }}
                  transition={{ duration: 1.1, delay: reducedMotion ? 0 : i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <div className="mt-1.5 flex justify-between font-mono text-[11px] text-[var(--text-muted)]">
                <span>{skill.previousScore}</span>
                <span>{skill.currentScore}</span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
