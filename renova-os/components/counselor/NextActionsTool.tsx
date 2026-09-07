"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListChecks, Loader2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { requestNextActions } from "@/lib/services/counselorAssistantService";
import type { CounselorAssistantContext } from "@/lib/ai/counselorAssistant";
import type { CounselorAction, ActionState } from "@/types/counselor";

/**
 * NextActionsTool — "NEXT ACTIONS" (brief §6): suggested support
 * actions the counselor can accept or dismiss individually. Accepting
 * only changes local state — see brief §7, AI output never becomes
 * an official decision automatically.
 */
export function NextActionsTool({ context }: { context: CounselorAssistantContext }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [actions, setActions] = useState<CounselorAction[]>([]);

  const handleGenerate = async () => {
    setStatus("loading");
    const result = await requestNextActions(context);
    if (result.success) {
      setActions(result.data);
      setStatus("ready");
    } else {
      setStatus("error");
    }
  };

  const decide = (id: string, state: ActionState) => {
    setActions((prev) => prev.map((a) => (a.id === id ? { ...a, state } : a)));
  };

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ListChecks size={14} className="text-[var(--accent-primary)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent-primary)]">
            Next actions
          </p>
        </div>
        <Button size="sm" variant="secondary" onClick={handleGenerate} disabled={status === "loading"}>
          {status === "loading" && <Loader2 size={12} className="mr-1.5 animate-spin" />}
          Suggest actions
        </Button>
      </div>

      <AnimatePresence>
        {status === "ready" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-2">
            {actions.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] px-3.5 py-2.5"
              >
                <div className="min-w-0">
                  <p
                    className={`text-[12.5px] font-medium ${
                      a.state === "dismissed" ? "text-[var(--text-muted)] line-through" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {a.title}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)]">{a.reason}</p>
                </div>
                {a.state === "suggested" ? (
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      onClick={() => decide(a.id, "accepted")}
                      aria-label="Accept action"
                      className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--accent-growth)] transition-colors hover:bg-[color-mix(in_srgb,var(--accent-growth)_14%,transparent)]"
                    >
                      <Check size={13} />
                    </button>
                    <button
                      onClick={() => decide(a.id, "dismissed")}
                      aria-label="Dismiss action"
                      className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-surface)]"
                    >
                      <X size={13} />
                    </button>
                  </div>
                ) : (
                  <span className="shrink-0 text-[11px] text-[var(--text-muted)]">
                    {a.state === "accepted" ? "Accepted" : "Dismissed"}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        )}
        {status === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-[12px] text-[var(--accent-critical)]">
            Suggestions are temporarily unavailable.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
