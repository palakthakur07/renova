import type { ReactNode } from "react";

/** Eyebrow + heading pattern used to introduce a section within a page. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-primary)]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-[family-name:var(--font-display)] text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
