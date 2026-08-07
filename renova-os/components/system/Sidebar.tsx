"use client";

import { LayoutGrid, Users, BookOpen, LineChart, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const items = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: Users, label: "Cohorts" },
  { icon: BookOpen, label: "Programs" },
  { icon: LineChart, label: "Progress" },
  { icon: Settings, label: "Settings" },
];

/** Sidebar — reference pattern only, static labels, not a real IA. */
export function Sidebar() {
  const [active, setActive] = useState("Overview");
  return (
    <nav className="flex h-full w-56 flex-col gap-1 border-r border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-3">
      {items.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className={cn(
            "flex items-center gap-2.5 rounded-[var(--radius-sm)] px-3 py-2 text-left text-[13px] transition-colors duration-200",
            active === label
              ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
              : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
          )}
        >
          <Icon size={16} strokeWidth={1.75} />
          {label}
        </button>
      ))}
    </nav>
  );
}
