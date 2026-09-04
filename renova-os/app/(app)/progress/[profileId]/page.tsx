import { RehabilitationProgressIntelligence } from "@/components/progress/RehabilitationProgressIntelligence";

export default async function ProgressProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  return <RehabilitationProgressIntelligence profileId={profileId} />;
}
