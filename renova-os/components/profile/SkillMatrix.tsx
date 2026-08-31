"use client";

import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import type { Skill } from "@/types/profile";

/**
 * SkillMatrix — a radar visualization (brief §17) rather than a bar
 * list, so the overall shape of capability is legible at a glance.
 * Clicking a skill label opens the detail panel (brief §18).
 */
export function SkillMatrix({
  skills,
  show,
  onSelect,
}: {
  skills: Skill[];
  show: boolean;
  onSelect: (skill: Skill) => void;
}) {
  const data = skills.map((s) => ({ label: s.label, score: show ? s.score : 0, id: s.id }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Skill matrix
      </p>

      <div className="mt-2 h-72 w-full" role="img" aria-label="Skill matrix radar chart across six capability categories">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="70%">
            <PolarGrid stroke="var(--border-hairline)" />
            <PolarAngleAxis dataKey="label" tick={{ fill: "var(--color-fog-200)", fontSize: 11 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              dataKey="score"
              stroke="var(--color-teal-400)"
              fill="var(--color-teal-400)"
              fillOpacity={0.22}
              strokeWidth={2}
              isAnimationActive
              animationDuration={800}
              animationEasing="ease-out"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {skills.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => onSelect(s)}
              className="flex w-full items-center justify-between gap-2 rounded-[var(--radius-sm)] px-2.5 py-2 text-left text-[12px] transition-colors duration-200 hover:bg-[var(--bg-surface-raised)]"
            >
              <span className="truncate text-[var(--text-secondary)]">{s.label}</span>
              <span className="font-mono text-[var(--text-primary)]">{s.score}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
