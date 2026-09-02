"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const EASIEST_OPTIONS = ["The concept", "The example", "The interactive part", "The practice questions"];
const HELP_OPTIONS = ["Nothing — I felt confident", "The checkpoint questions", "Applying it to a new example"];

/** Reflection — brief §24. Simple selection, feeds the learner context (not stored as anything clinical). */
export function Reflection({ onSubmit }: { onSubmit: (easiest: string, wantsHelp: string) => void }) {
  const [easiest, setEasiest] = useState<string | null>(null);
  const [wantsHelp, setWantsHelp] = useState<string | null>(null);

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5">
      <p className="text-[13px] font-medium text-[var(--text-primary)]">What did you find easiest?</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {EASIEST_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setEasiest(opt)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[12px] transition-colors duration-200",
              easiest === opt ? "border-[var(--accent-primary)] text-[var(--text-primary)]" : "border-[var(--border-hairline-strong)] text-[var(--text-muted)]"
            )}
          >
            {opt}
          </button>
        ))}
      </div>

      <p className="mt-5 text-[13px] font-medium text-[var(--text-primary)]">What would you like more help with?</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {HELP_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setWantsHelp(opt)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[12px] transition-colors duration-200",
              wantsHelp === opt ? "border-[var(--accent-primary)] text-[var(--text-primary)]" : "border-[var(--border-hairline-strong)] text-[var(--text-muted)]"
            )}
          >
            {opt}
          </button>
        ))}
      </div>

      <Button size="sm" className="mt-5" disabled={!easiest || !wantsHelp} onClick={() => onSubmit(easiest!, wantsHelp!)}>
        Complete lesson
      </Button>
    </div>
  );
}
