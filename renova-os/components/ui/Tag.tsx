import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-xs)] border border-[var(--border-hairline-strong)] px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
