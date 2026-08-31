"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "counseling", label: "Counseling" },
  { id: "programs", label: "Programs" },
  { id: "documents", label: "Documents" },
  { id: "ai-insights", label: "AI insights" },
];

/**
 * ProfileNav — sticky section navigation with scroll-spy (brief §9).
 * IntersectionObserver drives the active state; clicking scrolls
 * smoothly (instantly under reduced motion, via CSS scroll-behavior).
 */
export function ProfileNav() {
  const [active, setActive] = useState("overview");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav
      aria-label="Profile sections"
      className="glass-panel sticky top-[calc(var(--topbar-height)+1.5rem)] z-10 mb-6 flex gap-1 overflow-x-auto rounded-[var(--radius-md)] p-1.5"
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            "shrink-0 rounded-[var(--radius-sm)] px-3 py-1.5 text-[12.5px] transition-colors duration-200",
            active === s.id
              ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
