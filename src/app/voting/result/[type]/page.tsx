import { notFound } from "next/navigation";
import RankBadge from "@/components/RankBadge";
import VoteCount from "@/components/VoteCount";

export default async function VotingResult({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (type !== "leader" && type !== "demoday") notFound();

  return (
    <main className="relative min-h-[900px] bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]">
      {/* TODO: API 연동 후 name, votes 교체 */}
      <div className="absolute top-[172px] left-[391px]">
        <VoteCount name="이름" votes={0} color="#E3E8F5" />
      </div>
      <div className="absolute top-[416px] left-[683px]">
        <VoteCount name="이름" votes={0} color="#F2F4F6" />
      </div>
      <div className="absolute top-[680px] left-[435px]">
        <VoteCount name="이름" votes={0} color="#F2F9F9" />
      </div>
      <div className="absolute top-[141px] left-[348px]">
        <RankBadge rank={1} color="#1B7BE8" />
      </div>
      <div className="absolute top-[385px] left-[640px]">
        <RankBadge rank={2} color="#FFEFB1" />
      </div>
      <div className="absolute top-[629px] left-[392px]">
        <RankBadge rank={3} color="rgba(223, 70, 70, 0.57)" />
      </div>
    </main>
  );
}
