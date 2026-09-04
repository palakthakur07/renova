import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/layout/Logo";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const columns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/overview" },
      { label: "AI Planner", href: "/planner" },
      { label: "Learning", href: "/learning" },
      { label: "Analytics", href: "/analytics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Design system", href: "/system" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)]">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-6">
          <div className="col-span-2 sm:col-span-2">
            <Logo />
            <p className="mt-4 max-w-[26ch] text-[13px] leading-relaxed text-[var(--text-secondary)]">
              {siteConfig.tagline}
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-hairline)] pt-6 text-[12px] text-[var(--text-muted)] sm:flex-row sm:items-center">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[var(--accent-primary)]">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--accent-primary)]">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[var(--accent-primary)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
