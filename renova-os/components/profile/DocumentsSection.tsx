"use client";

import { motion } from "framer-motion";
import { FileText, Award, FileCheck2, ClipboardList, NotebookPen } from "lucide-react";
import type { DocumentRecord, DocumentKind } from "@/types/profile";

const KIND_ICON: Record<DocumentKind, typeof FileText> = {
  assessment: ClipboardList,
  certificate: Award,
  completion: FileCheck2,
  summary: NotebookPen,
  plan: FileText,
};

export function DocumentsSection({ documents, show }: { documents: DocumentRecord[]; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
        Documents
      </p>

      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {documents.map((d) => {
          const Icon = KIND_ICON[d.kind];
          return (
            <motion.li
              key={d.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-3.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--bg-canvas)] text-[var(--accent-primary)]">
                <Icon size={14} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[13px] text-[var(--text-primary)]">{d.title}</p>
                <p className="text-[11px] text-[var(--text-muted)]">{d.date}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
