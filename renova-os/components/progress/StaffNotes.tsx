"use client";

import { motion } from "framer-motion";
import { NotebookPen, Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { StaffNote } from "@/types/progress";

const CATEGORY_LABEL: Record<StaffNote["category"], string> = {
  education: "Education",
  skills: "Skills",
  counseling: "Counseling",
  program: "Program",
  general: "General",
};

/** StaffNotes — authorized staff can add progress/support/milestone notes (brief §33). Local state only, for the prototype. */
export function StaffNotes({ notes, show, onAdd }: { notes: StaffNote[]; show: boolean; onAdd: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Staff notes</p>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border-hairline-strong)] px-3 py-1.5 text-[12px] text-[var(--accent-primary)] transition-colors hover:border-[var(--accent-primary)]"
        >
          <Plus size={13} />
          Add note
        </button>
      </div>

      {notes.length === 0 ? (
        <p className="mt-4 text-[13px] text-[var(--text-muted)]">No notes yet.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {notes.map((n) => (
            <li key={n.id} className="rounded-[var(--radius-md)] border border-[var(--border-hairline)] p-4">
              <div className="flex items-start gap-2.5">
                <NotebookPen size={14} className="mt-0.5 shrink-0 text-[var(--text-muted)]" />
                <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{n.note}</p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 pl-6 text-[11px] text-[var(--text-muted)]">
                <Badge tone="neutral">{CATEGORY_LABEL[n.category]}</Badge>
                <span>{n.author}</span>
                <span>·</span>
                <span>{n.role}</span>
                <span>·</span>
                <span>{n.date}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
