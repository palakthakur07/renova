"use client";

import { useState } from "react";

/**
 * InteractiveExample — the one meaningful interactive example for
 * this demo lesson (brief §18: "do not build an entire coding IDE").
 * A tiny spreadsheet-cell calculator: adjust two cells, watch a
 * formula cell update — a concrete, hands-on version of "a variable
 * holds a value that flows into anything that uses it."
 */
export function InteractiveExample() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(5);

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-5">
      <div className="grid grid-cols-3 gap-3 text-center">
        <Cell label="A1" value={a} editable onChange={setA} />
        <Cell label="A2" value={b} editable onChange={setB} />
        <Cell label="A3 = A1 + A2" value={a + b} />
      </div>
      <p className="mt-4 text-[12px] leading-relaxed text-[var(--text-secondary)]">
        A3 doesn&apos;t store its own number — it reads whatever A1 and A2 currently hold, every time. Change A1 or A2
        above and A3 updates immediately, the same way a variable-based calculation would.
      </p>
    </div>
  );
}

function Cell({
  label,
  value,
  editable,
  onChange,
}: {
  label: string;
  value: number;
  editable?: boolean;
  onChange?: (n: number) => void;
}) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] bg-[var(--bg-canvas)] p-3">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
      {editable ? (
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value) || 0)}
          className="w-full rounded-[var(--radius-xs)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-1.5 text-center text-[16px] font-medium text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)]"
        />
      ) : (
        <p className="py-1.5 font-[family-name:var(--font-display)] text-[18px] font-semibold text-[var(--accent-primary)]">
          {value}
        </p>
      )}
    </div>
  );
}
