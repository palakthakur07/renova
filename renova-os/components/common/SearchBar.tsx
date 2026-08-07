"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * SearchBar — global search placeholder in the topbar. Opens the
 * command palette on click rather than performing a real search
 * (no backend in Phase 1).
 */
export function SearchBar({ onOpen, className }: { onOpen: () => void; className?: string }) {
  const [focused, setFocused] = useState(false);

  return (
    <button
      onClick={onOpen}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-[var(--radius-sm)] border bg-[var(--bg-surface)] px-3.5 py-2 text-left text-[13px] text-[var(--text-muted)] transition-all duration-200",
        focused
          ? "border-[var(--accent-primary)] shadow-[var(--shadow-glow-teal)]"
          : "border-[var(--border-hairline-strong)]",
        className
      )}
    >
      <Search size={15} className="shrink-0" />
      <span className="flex-1 truncate">Search ReNova OS…</span>
      <kbd className="hidden shrink-0 items-center gap-0.5 rounded-[var(--radius-xs)] border border-[var(--border-hairline-strong)] px-1.5 py-0.5 font-mono text-[10px] sm:flex">
        {siteConfig.commandShortcut.mac}
      </kbd>
    </button>
  );
}
