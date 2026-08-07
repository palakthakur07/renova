import { LucideIcon } from "lucide-react";
import { Button } from "./Button";

/** EmptyState — an invitation to act, not a dead end. */
export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] border border-dashed border-[var(--border-hairline-strong)] px-8 py-14 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg-surface-raised)] text-[var(--text-secondary)]">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div className="space-y-1.5">
        <p className="text-[15px] font-medium text-[var(--text-primary)]">{title}</p>
        <p className="max-w-sm text-[13px] leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
      {actionLabel && (
        <Button size="sm" variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
