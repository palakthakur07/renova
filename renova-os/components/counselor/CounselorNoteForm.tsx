"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NotebookPen, Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui";
import { useNotifications } from "@/components/providers/NotificationProvider";
import type { CounselorNote } from "@/types/counselor";

const EMPTY_DRAFT = {
  sessionDate: "",
  focusArea: "",
  observations: "",
  progressDiscussed: "",
  challenges: "",
  actionsAgreed: "",
  nextFollowUpDate: "",
};

/**
 * CounselorNoteForm — structured counselor notes (brief §9), doubling
 * as the "Session Summary" tool from §6 since both capture the same
 * fields. `prefill` is how SessionPrepTool's "Accept" hands an
 * AI-assisted brief into the note for the counselor to review and
 * edit before saving — the AI text never saves itself.
 */
export function CounselorNoteForm({
  prefillObservations,
  onSave,
}: {
  prefillObservations: string;
  onSave: (note: CounselorNote) => void;
}) {
  const { pushToast } = useNotifications();
  const [draft, setDraft] = useState(EMPTY_DRAFT);

  const observations = draft.observations || prefillObservations;

  const set = (field: keyof typeof EMPTY_DRAFT) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDraft((d) => ({ ...d, [field]: e.target.value }));

  const handleSave = () => {
    if (!draft.sessionDate || !draft.focusArea) {
      pushToast({ title: "Add a session date and focus area first", tone: "structure" });
      return;
    }
    const note: CounselorNote = {
      id: `note-${Date.now()}`,
      sessionDate: draft.sessionDate,
      focusArea: draft.focusArea,
      observations,
      progressDiscussed: draft.progressDiscussed,
      challenges: draft.challenges,
      actionsAgreed: draft.actionsAgreed,
      nextFollowUpDate: draft.nextFollowUpDate,
      createdAt: "Today",
    };
    onSave(note);
    setDraft(EMPTY_DRAFT);
    pushToast({ title: "Note saved", detail: "Added to the counselor timeline.", tone: "growth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7"
    >
      <div className="flex items-center gap-2">
        <NotebookPen size={15} className="text-[var(--accent-structure)]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-structure)]">
          Counselor note
        </p>
      </div>
      <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
        Counselor decision — everything here is written or edited by staff before saving.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Session date" placeholder="e.g. Sep 11" value={draft.sessionDate} onChange={set("sessionDate")} />
        <Input label="Focus area" placeholder="e.g. Employment preparation" value={draft.focusArea} onChange={set("focusArea")} />
      </div>

      <div className="mt-4">
        <Textarea
          label="Observations"
          placeholder="What did you observe in the session?"
          value={observations}
          onChange={set("observations")}
          rows={3}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Textarea label="Progress discussed" value={draft.progressDiscussed} onChange={set("progressDiscussed")} rows={2} />
        <Textarea label="Challenges" value={draft.challenges} onChange={set("challenges")} rows={2} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Textarea label="Actions agreed" value={draft.actionsAgreed} onChange={set("actionsAgreed")} rows={2} />
        <Input label="Next follow-up date" placeholder="e.g. Sep 18" value={draft.nextFollowUpDate} onChange={set("nextFollowUpDate")} />
      </div>

      <div className="mt-5">
        <Button size="md" onClick={handleSave}>
          <Save size={14} className="mr-1.5" />
          Save note
        </Button>
      </div>
    </motion.div>
  );
}
