import { ReintegrationExperience } from "@/components/reintegration/ReintegrationExperience";

export default async function ReleaseProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  return <ReintegrationExperience profileId={profileId} />;
}
