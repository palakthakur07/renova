import { ReintegrationExperience } from "@/components/reintegration/ReintegrationExperience";

export default async function ReintegrationProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  return <ReintegrationExperience profileId={profileId} />;
}
