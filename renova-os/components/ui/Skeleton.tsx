import { cn } from "@/lib/utils";

/** Skeleton — breathing placeholder, never a hard shimmer sweep. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-sm)] bg-[var(--bg-surface-raised)]",
        className
      )}
      style={{ animationDuration: "2.2s" }}
    />
  );
}
