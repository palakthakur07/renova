"use client";

import { useState } from "react";
import { Drawer } from "@/components/common/Drawer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { StaffNoteCategory } from "@/types/progress";

const CATEGORIES: { key: StaffNoteCategory; label: string }[] = [
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "counseling", label: "Counseling" },
  { key: "program", label: "Program" },
  { key: "general", label: "General" },
];

/** AddNoteDrawer — a small, focused note form (brief §34), not a large form. Uses the existing Drawer primitive rather than a new modal component. */
export function AddNoteDrawer({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (category: StaffNoteCategory, note: string) => void;
}) {
  const [category, setCategory] = useState<StaffNoteCategory>("general");
  const [note, setNote] = useState("");

  const handleSave = () => {
    if (!note.trim()) return;
    onSave(category, note.trim());
    setNote("");
    setCategory("general");
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose} eyebrow="Staff notes" title="Add progress note">
      <div className="space-y-5">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Category</p>
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[12px] transition-colors duration-200",
                  category === c.key
                    ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                    : "border-[var(--border-hairline-strong)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">Note</p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={5}
            placeholder="Add a progress, support, or milestone note…"
            className="w-full resize-none rounded-[var(--radius-md)] border border-[var(--border-hairline-strong)] bg-[var(--bg-canvas)] p-3 text-[13px] text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)]"
          />
        </div>

        <Button size="md" onClick={handleSave} disabled={!note.trim()} className="w-full">
          Save note
        </Button>
      </div>
    </Drawer>
  );
}
