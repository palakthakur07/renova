"use client";

import { Drawer } from "@/components/common/Drawer";
import { Progress } from "@/components/ui/Progress";
import type { ProgramPerformance } from "@/types/dashboard";

export function ProgramDrawer({
  program,
  onClose,
}: {
  program: ProgramPerformance | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!program} onClose={onClose} eyebrow="Program performance" title={program?.name ?? ""}>
      {program && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Metric label="Enrollment" value={program.enrollment.toLocaleString("en-US")} />
            <Metric
              label="Trend"
              value={`${program.trendPct >= 0 ? "+" : ""}${program.trendPct}%`}
              tone={program.trendPct >= 0 ? "growth" : "critical"}
            />
          </div>

          <div className="space-y-4">
            <Progress value={program.completionPct} label="Completion" tone="growth" />
            <Progress value={program.avgProgressPct} label="Average progress" tone="primary" />
            <Progress value={program.dropOffPct} label="Drop-off" tone="achievement" />
          </div>

          <p className="text-[12px] leading-relaxed text-[var(--text-muted)]">
            Demo data. In a connected environment, this panel would link out to the full program
            roster and cohort-level breakdowns.
          </p>
        </div>
      )}
    </Drawer>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "growth" | "critical";
}) {
  const color =
    tone === "growth"
      ? "var(--accent-growth)"
      : tone === "critical"
      ? "var(--accent-critical)"
      : "var(--text-primary)";
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-3.5">
      <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      <p className="mt-1 font-[family-name:var(--font-display)] text-[20px] font-semibold" style={{ color }}>
        {value}
      </p>
    </div>
  );
}
