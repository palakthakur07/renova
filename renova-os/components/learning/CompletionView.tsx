"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

/** CompletionView — brief §42. Measured, not "CONGRATULATIONS!!! 🎉". */
export function CompletionView({
  lessonTitle,
  skillsUpdated,
}: {
  lessonTitle: string;
  skillsUpdated: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-4 rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,var(--accent-growth)_28%,transparent)] bg-[var(--bg-surface)] p-8 text-center"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-growth)_14%,transparent)] text-[var(--accent-growth)]">
        <CheckCircle2 size={20} />
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-growth)]">Lesson completed</p>
        <h3 className="mt-1 font-[family-name:var(--font-display)] text-[20px] font-semibold text-[var(--text-primary)]">{lessonTitle}</h3>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Skills updated</p>
        <p className="mt-1 text-[13px] text-[var(--text-secondary)]">{skillsUpdated.join(", ")}</p>
      </div>
      <Link href="/learning">
        <Button size="sm">View updated progress</Button>
      </Link>
    </motion.div>
  );
}
