"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "/overview" },
];

/**
 * LandingNav — minimal floating navigation for the cinematic landing
 * page. Fades in once the boot sequence reaches its "ready" state,
 * in sync with the main CTA, so it never competes with the boot
 * animation. Stays subtle: no opaque bar, just a soft blurred strip.
 */
export function LandingNav({ show, onEnter }: { show: boolean; onEnter: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -12 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <div
        className={
          "pointer-events-auto flex w-full max-w-4xl items-center justify-between rounded-[var(--radius-lg)] border border-[var(--border-hairline)] bg-[color-mix(in_srgb,var(--bg-canvas)_55%,transparent)] px-4 py-2.5 backdrop-blur-md sm:px-5"
        }
      >
        <Logo />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Landing">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="secondary" size="sm" onClick={onEnter}>
          Enter ReNova
          <ArrowRight size={14} className="ml-0.5" />
        </Button>
      </div>
    </motion.header>
  );
}
