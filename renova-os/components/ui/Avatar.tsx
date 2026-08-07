import { cn } from "@/lib/utils";

export function Avatar({
  initials,
  size = "md",
  ring = false,
  className,
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
  ring?: boolean;
  className?: string;
}) {
  const sizeMap = { sm: "h-7 w-7 text-[11px]", md: "h-9 w-9 text-[13px]", lg: "h-12 w-12 text-[15px]" };
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-medium",
        "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]",
        ring && "ring-2 ring-[var(--accent-primary)] ring-offset-2 ring-offset-[var(--bg-canvas)]",
        sizeMap[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
