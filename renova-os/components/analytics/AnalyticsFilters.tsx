"use client";

import { motion } from "framer-motion";
import { Download, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { TIME_RANGE_OPTIONS } from "@/lib/demo-data/analytics/trajectory";
import { useNotifications } from "@/components/providers/NotificationProvider";
import type { AnalyticsTimeRange } from "@/types/analytics";

/**
 * AnalyticsFilters — Time Range, Program, Development Area, Export
 * (brief §5, §20, §21). Facility/Unit is explicitly optional in the
 * brief and is left out here since the current demo data has no
 * per-facility breakdown to filter against — adding it would be fake
 * complexity the brief warns against.
 *
 * Export opens the browser's print dialog rather than a generated
 * file: the brief allows a "polished print/report preview" in place
 * of backend export, and print-to-PDF is the lowest-complexity way
 * to get a real downloadable report from a static page.
 */
export function AnalyticsFilters({
  timeRange,
  onTimeRangeChange,
  programOptions,
  program,
  onProgramChange,
  areaOptions,
  area,
  onAreaChange,
  show,
}: {
  timeRange: AnalyticsTimeRange;
  onTimeRangeChange: (r: AnalyticsTimeRange) => void;
  programOptions: string[];
  program: string;
  onProgramChange: (p: string) => void;
  areaOptions: string[];
  area: string;
  onAreaChange: (a: string) => void;
  show: boolean;
}) {
  const { pushToast } = useNotifications();

  const handleExport = () => {
    pushToast({ title: "Opening print preview", detail: "Save as PDF from the print dialog to export.", tone: "neutral" });
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap items-center gap-2.5"
    >
      <div className="flex gap-0.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-0.5">
        {TIME_RANGE_OPTIONS.map((r) => (
          <button
            key={r.key}
            onClick={() => onTimeRangeChange(r.key)}
            className={cn(
              "rounded-[var(--radius-xs)] px-2.5 py-1.5 text-[12px] transition-colors duration-200",
              timeRange === r.key
                ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            )}
          >
            {r.label}
          </button>
        ))}
      </div>

      <select
        value={program}
        onChange={(e) => onProgramChange(e.target.value)}
        className="rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-2.5 py-1.5 text-[12px] text-[var(--text-secondary)] outline-none transition-colors focus:border-[var(--accent-primary)]"
      >
        <option value="all">All programs</option>
        {programOptions.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        value={area}
        onChange={(e) => onAreaChange(e.target.value)}
        className="rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-2.5 py-1.5 text-[12px] text-[var(--text-secondary)] outline-none transition-colors focus:border-[var(--accent-primary)]"
      >
        <option value="all">All development areas</option>
        {areaOptions.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      <button
        onClick={handleExport}
        className="ml-auto flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
      >
        <Printer size={12} />
        Export report
        <Download size={12} />
      </button>
    </motion.div>
  );
}
