import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ collapsed = false, className }: { collapsed?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 overflow-hidden", className)}
      aria-label="ReNova OS home"
    >
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-[var(--accent-primary)] opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-[family-name:var(--font-display)] text-[14px] font-semibold tracking-tight text-[var(--text-primary)] transition-opacity duration-200",
          collapsed && "opacity-0"
        )}
      >
        ReNova OS
      </span>
    </Link>
  );
}
