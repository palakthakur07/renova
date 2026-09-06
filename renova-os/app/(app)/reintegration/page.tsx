import { ReintegrationExperience } from "@/components/reintegration/ReintegrationExperience";

/**
 * /reintegration is an alias for /release (brief §2 suggested this
 * route name). Both render the same Phase 8 experience — /release is
 * the one wired into the sidebar since it already existed as a
 * placeholder in Phase 1, and ReleaseJourney (Phase 4) already links
 * to it.
 */
export default function ReintegrationPage() {
  return <ReintegrationExperience />;
}
