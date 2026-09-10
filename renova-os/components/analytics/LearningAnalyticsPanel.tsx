"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import type { LearningAnalyticsSummary } from "@/types/analytics";

/** LearningAnalytics — brief §12, demonstrating Learning feeds Progress. */
export function LearningAnalyticsPanel({ data, show }: { data: LearningAnalyticsSummary; show: boolean }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap size={14} className="text-[var(--color-teal-400)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Learning activity
          </p>
        </div>
        <button
          onClick={() => router.push("/learning")}
          className="text-[11px] text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Open learning →
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Stat label="Courses Active" value={data.coursesActive} />
        <Stat label="Lessons Completed" value={data.lessonsCompleted} />
        <Stat label="Completion Rate" value={`${data.completionRatePct}%`} />
        <Stat label="Skills Developed" value={data.skillsDeveloped} />
      </div>

      <div className="mt-4 h-12 w-full" role="img" aria-label={`Completion rate trending to ${data.completionRatePct}% this period`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.trend}>
            <Line type="monotone" dataKey="value" stroke="var(--color-teal-400)" strokeWidth={2} dot={false} isAnimationActive animationDuration={700} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-[11px] text-[var(--text-secondary)]">{label}</p>
      <p className="mt-0.5 text-[17px] font-semibold text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
