import { CinematicIntro } from "@/components/landing/CinematicIntro";
import { Principles } from "@/components/landing/Principles";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <CinematicIntro />
      <Principles />
      <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-[12px] text-[var(--text-muted)] sm:flex-row">
          <span className="font-mono">RENOVA OS — PHASE 2 · CINEMATIC LANDING EXPERIENCE</span>
          <Link
            href="/system"
            className="text-[var(--text-secondary)] underline-offset-4 transition-colors hover:text-[var(--accent-primary)] hover:underline"
          >
            View the component system →
          </Link>
        </div>
      </footer>
    </main>
  );
}
