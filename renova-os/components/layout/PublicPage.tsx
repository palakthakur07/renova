import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

export function PublicPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent-primary)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
        )}
        {children && <div className="mt-10 space-y-6">{children}</div>}
      </div>
      <Footer />
    </main>
  );
}
