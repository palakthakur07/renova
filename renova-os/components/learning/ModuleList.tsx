"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Module } from "@/types/learning";

export function ModuleList({ modules }: { modules: Module[] }) {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2">
      {modules.map((m) => (
        <div key={m.id} className="flex items-center justify-between gap-4 border-b border-[var(--border-hairline)] px-5 py-4 last:border-0">
          <div className="flex items-center gap-3">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[11px]"
              style={{
                borderColor: m.status === "upcoming" ? "var(--border-hairline-strong)" : "var(--color-teal-400)",
                background: m.status === "completed" ? "var(--color-teal-400)" : "transparent",
                color: m.status === "completed" ? "var(--color-graphite-950)" : "var(--text-muted)",
              }}
            >
              {m.status === "completed" ? <Check size={12} /> : String(m.order).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[13px] font-medium text-[var(--text-primary)]">{m.title}</p>
              <p className="text-[11px] text-[var(--text-muted)]">{m.lessonIds.length} lesson{m.lessonIds.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge tone={m.status === "completed" ? "growth" : m.status === "current" ? "structure" : "neutral"}>
              {m.status === "completed" ? "Completed" : m.status === "current" ? "In progress" : "Upcoming"}
            </Badge>
            {m.lessonIds[0] && m.status !== "upcoming" && (
              <Link href={`/learning/lesson/${m.lessonIds[0]}`} className="text-[12px] font-medium text-[var(--accent-primary)]">
                Open
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
