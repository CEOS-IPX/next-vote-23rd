import { notFound } from "next/navigation";

export default async function VotingResult({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (type !== "leader" && type !== "demoday") notFound();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]" />
  );
}
