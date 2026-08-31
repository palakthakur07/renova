import { Lock } from "lucide-react";

/**
 * RestrictedNotice — the visual pattern for role-gated content
 * (brief §21, §42). Never just hides a section silently; explains
 * what access is required so staff understand why it's not visible.
 */
export function RestrictedNotice({ requiredRole }: { requiredRole: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-dashed border-[var(--border-hairline-strong)] bg-[var(--bg-canvas)] p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-raised)] text-[var(--text-muted)]">
        <Lock size={14} />
      </div>
      <div>
        <p className="text-[13px] font-medium text-[var(--text-primary)]">Restricted information</p>
        <p className="text-[12px] text-[var(--text-muted)]">{requiredRole} access required to view details.</p>
      </div>
    </div>
  );
}
