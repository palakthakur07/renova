import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border-hairline)] bg-[color-mix(in_srgb,var(--bg-canvas)_85%,transparent)] px-6 py-5 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Logo />
        <Link
          href="/"
          className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
        >
          ← Back home
        </Link>
      </div>
    </header>
  );
}
