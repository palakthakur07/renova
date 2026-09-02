"use client";

import { Maximize2, Minimize2 } from "lucide-react";

/** FocusModeToggle — brief §48–49. Widens content, quiets the sidebar/ambient background. */
export function FocusModeToggle({ active, onToggle }: { active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
    >
      {active ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
      {active ? "Exit focus mode" : "Focus mode"}
    </button>
  );
}
