import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/layout/Logo";
import { primaryNav } from "@/constants/navigation";

/** Excluded from the footer's primary row — utility items, not journey steps. */
const EXCLUDED_HREFS = new Set(["/analytics", "/settings"]);
const primaryLinks = primaryNav.filter((item) => !EXCLUDED_HREFS.has(item.href));

const additionalLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];

/**
 * Footer — subtle, single-tier. Deliberately not a heavy marketing
 * footer: one row of the real primary-nav destinations, a couple of
 * additional links, and a copyright line. Used both on the public
 * landing page and, via AppShell, at the bottom of every scrollable
 * app page.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)]">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-[32ch] text-[13px] leading-relaxed text-[var(--text-secondary)]">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-hairline)] pt-5 text-[12px] text-[var(--text-muted)] sm:flex-row sm:items-center">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {additionalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--accent-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
