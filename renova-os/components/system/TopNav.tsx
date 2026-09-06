"use client";

import { Command, Search } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

/**
 * TopNav — reference implementation only. Shown here with static,
 * placeholder labels to demonstrate the pattern; it is not wired
 * to any real navigation or data source in Phase 0.
 */
export function TopNav() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[var(--border-hairline)] bg-[color-mix(in_srgb,var(--bg-canvas)_85%,transparent)] px-5 backdrop-blur-md">
      <div className="flex items-center gap-2.5">
        <div className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
        <span className="font-[family-name:var(--font-display)] text-[14px] font-semibold tracking-tight">
          ReNova OS
        </span>
      </div>
      <div className="flex max-w-sm flex-1 items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-[13px] text-[var(--text-muted)] mx-8">
        <Search size={14} />
        <span className="flex-1">Search…</span>
        <span className="flex items-center gap-0.5 text-[11px]">
          <Command size={11} />K
        </span>
      </div>
      <Avatar initials="JD" size="sm" />
    </header>
  );
}
