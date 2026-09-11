import { CinematicIntro } from "@/components/landing/CinematicIntro";
import { Principles } from "@/components/landing/Principles";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <CinematicIntro />
      <Principles />
      <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[18px] font-semibold text-[var(--text-primary)]">
              ReNova
            </p>
            <p className="mt-1.5 max-w-xs text-[12.5px] leading-relaxed text-[var(--text-muted)]">
              An intelligent rehabilitation &amp; reintegration platform.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-[var(--text-secondary)]">
            <Link href="/overview" className="transition-colors hover:text-[var(--accent-primary)]">
              Platform
            </Link>
            <Link href="#principles" className="transition-colors hover:text-[var(--accent-primary)]">
              How It Works
            </Link>
            <Link href="/analytics" className="transition-colors hover:text-[var(--accent-primary)]">
              Impact
            </Link>
            <Link href="/settings#privacy" className="transition-colors hover:text-[var(--accent-primary)]">
              AI Transparency
            </Link>
            <Link href="/overview" className="font-medium text-[var(--accent-primary)] hover:text-[var(--text-primary)]">
              Enter ReNova →
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
