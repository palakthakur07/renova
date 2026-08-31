import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * ErrorState — the data-unavailable counterpart to EmptyState. Not
 * triggered anywhere in Phase 3 (demo data can't fail), but every
 * dashboard module is built to accept this in place of its content
 * once a real data source can actually error.
 */
export function ErrorState({
  title = "Data unavailable",
  description = "Unable to retrieve the latest data. Try again in a moment.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] border border-dashed border-[color-mix(in_srgb,var(--accent-critical)_35%,transparent)] px-8 py-14 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-critical)_14%,transparent)] text-[var(--accent-critical)]">
        <AlertTriangle size={18} strokeWidth={1.75} />
      </div>
      <div className="space-y-1.5">
        <p className="text-[15px] font-medium text-[var(--text-primary)]">{title}</p>
        <p className="max-w-sm text-[13px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
      </div>
      {onRetry && (
        <Button size="sm" variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
