"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useNotifications } from "@/components/providers/NotificationProvider";
import { cn } from "@/lib/utils";

const options = [
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
] as const;

/**
 * ThemeToggle — three-way dark/light/system switch. Cross-fades via
 * --transition-theme in globals.css rather than next-themes' default
 * instant swap, so switching never flashes.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useHasMounted();
  const { pushToast } = useNotifications();

  if (!mounted) {
    return <div className="h-8 w-[84px] rounded-[var(--radius-sm)] bg-[var(--bg-surface)]" />;
  }

  return (
    <div className="flex items-center gap-0.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-0.5">
      {options.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => {
              setTheme(value);
              pushToast({ title: `${label} theme applied`, tone: "structure" });
            }}
            aria-label={`${label} theme`}
            aria-pressed={active}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-[var(--radius-xs)] transition-colors duration-200",
              active
                ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            )}
          >
            <Icon size={14} strokeWidth={1.75} />
          </button>
        );
      })}
    </div>
  );
}
