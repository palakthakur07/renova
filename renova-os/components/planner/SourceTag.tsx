import { cn } from "@/lib/utils";
import type { ContextSource } from "@/types/planner";

const SOURCE_LABEL: Record<ContextSource, string> = {
  profile: "Profile",
  assessment: "Assessment",
  counseling: "Counseling",
  "self-reported": "Self-reported",
};

/** SourceTag — the "where did this come from" indicator (brief §7), used throughout ContextStage. */
export function SourceTag({ source, className }: { source: ContextSource; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-[var(--border-hairline-strong)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]",
        className
      )}
    >
      {SOURCE_LABEL[source]}
    </span>
  );
}
