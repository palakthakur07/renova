import { cn } from "@/lib/utils";

type Tone = "neutral" | "structure" | "growth" | "achievement" | "critical";

const toneStyles: Record<Tone, string> = {
  neutral: "bg-[var(--bg-surface-raised)] text-[var(--text-secondary)]",
  structure:
    "bg-[color-mix(in_srgb,var(--accent-structure)_16%,transparent)] text-[var(--color-cyan-400)]",
  growth:
    "bg-[color-mix(in_srgb,var(--accent-growth)_16%,transparent)] text-[var(--color-teal-300)]",
  achievement:
    "bg-[color-mix(in_srgb,var(--accent-achievement)_16%,transparent)] text-[var(--color-gold-400)]",
  critical:
    "bg-[color-mix(in_srgb,var(--accent-critical)_16%,transparent)] text-[var(--color-red-400)]",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-full)] px-2.5 py-1 text-[12px] font-medium tracking-wide",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
