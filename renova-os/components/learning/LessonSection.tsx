"use client";

import { motion } from "framer-motion";
import type { LessonSection as LessonSectionType } from "@/types/learning";

export function LessonSection({ section }: { section: LessonSectionType }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent-primary)]">{section.title}</p>
      {section.body && <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">{section.body}</p>}
    </motion.div>
  );
}
