import { CounselorWorkspace } from "@/components/counselor/CounselorWorkspace";

export default async function CounselorProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  return <CounselorWorkspace profileId={profileId} />;
}
