"use client";

import { useRouter } from "next/navigation";
import { Sparkles, NotebookPen, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNotifications } from "@/components/providers/NotificationProvider";

/**
 * ProfileActions — three-tier hierarchy (brief §39), not equal buttons.
 * "Generate Rehabilitation Plan" is the primary action and the bridge
 * into Phase 5 — /planner exists today only as Phase 1's placeholder.
 */
export function ProfileActions({ onViewDocuments }: { onViewDocuments: () => void }) {
  const router = useRouter();
  const { pushToast } = useNotifications();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="md" onClick={() => router.push("/planner")}>
        <Sparkles size={15} className="mr-1.5" />
        Generate rehabilitation plan
      </Button>
      <Button
        variant="secondary"
        size="md"
        onClick={() =>
          pushToast({
            title: "Progress note added",
            detail: "Demo action — no data was actually recorded.",
            tone: "structure",
          })
        }
      >
        <NotebookPen size={14} className="mr-1.5" />
        Add progress note
      </Button>
      <Button variant="ghost" size="md" onClick={onViewDocuments}>
        <FolderOpen size={14} className="mr-1.5" />
        View documents
      </Button>
    </div>
  );
}
