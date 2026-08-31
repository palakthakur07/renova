"use client";

import { useRole } from "@/components/providers/RoleProvider";
import { cn } from "@/lib/utils";
import type { StaffRole } from "@/types/profile";

const ROLES: { key: StaffRole; label: string }[] = [
  { key: "officer", label: "Officer" },
  { key: "counselor", label: "Counselor" },
  { key: "educator", label: "Educator" },
  { key: "administrator", label: "Admin" },
];

/**
 * RoleSwitcher — a demo-only control (no auth exists yet) that lets
 * this prototype demonstrate permission-aware rendering: switching
 * roles changes what the Counseling section reveals. See RoleProvider.
 */
export function RoleSwitcher() {
  const { role, setRole } = useRole();
  return (
    <div className="flex flex-col items-end gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
        Viewing as
      </span>
      <div className="flex gap-0.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-0.5">
        {ROLES.map((r) => (
          <button
            key={r.key}
            onClick={() => setRole(r.key)}
            aria-pressed={role === r.key}
            className={cn(
              "rounded-[var(--radius-xs)] px-2.5 py-1 text-[11px] transition-colors duration-200",
              role === r.key
                ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}
