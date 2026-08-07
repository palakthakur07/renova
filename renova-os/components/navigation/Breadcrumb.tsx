"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { primaryNav } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

/** Derives a breadcrumb trail from the current pathname and nav config. */
export function Breadcrumb() {
  const pathname = usePathname();
  const current = primaryNav.find((item) => item.href === pathname);

  return (
    <nav aria-label="Breadcrumb" className="hidden items-center gap-1.5 text-[13px] md:flex">
      <Link
        href="/"
        className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
      >
        {siteConfig.shortName}
      </Link>
      {current && (
        <>
          <ChevronRight size={13} className="text-[var(--text-muted)]" />
          <span className="text-[var(--text-primary)]">{current.label}</span>
        </>
      )}
    </nav>
  );
}
