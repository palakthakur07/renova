"use client";

import { FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/Button";

/** ProgressReportButton — opens the ReportPreviewDrawer (brief §56). */
export function ProgressReportButton({ onOpen }: { onOpen: () => void }) {
  return (
    <Button variant="secondary" size="md" onClick={onOpen}>
      <FileBarChart size={14} className="mr-1.5" />
      Generate progress report
    </Button>
  );
}
