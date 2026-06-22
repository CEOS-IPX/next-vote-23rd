import { notFound } from "next/navigation";
import Link from "next/link";
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
    <main className="relative min-h-225 bg-linear-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]">
      <div className="absolute top-66.5 left-130 w-56.5 h-57.5 border border-black" />
      <div className="absolute top-132.25 left-151.25 w-73 h-45.5 border border-black" />
      <img
        src="/figures/figure-star-8.svg"
        alt=""
        aria-hidden
        className="absolute top-90.75 left-71.5 w-53 h-53 pointer-events-none"
      />
      <Link
        href="/voting"
        className="absolute top-166.75 left-187.75 text-xl font-extrabold leading-[135%] tracking-[-0.02px] text-black"
      >
        메인으로 가기 &gt;
      </Link>
      <svg
        className="absolute top-48.5 left-196.25 w-36 h-36 pointer-events-none"
        viewBox="0 0 197 197"
        fill="none"
        aria-hidden
      >
        <path
          d="M122.926 38.0869L123.296 38.6377L123.947 38.5098L166.884 30.1152L158.49 73.0527L158.362 73.7041L158.913 74.0742L195.207 98.5L158.913 122.926L158.362 123.296L158.49 123.947L166.884 166.884L123.947 158.49L123.296 158.362L122.926 158.913L98.5 195.207L74.0742 158.913L73.7041 158.362L73.0527 158.49L30.1152 166.884L38.5098 123.947L38.6377 123.296L38.0869 122.926L1.79199 98.5L38.0869 74.0742L38.6377 73.7041L38.5098 73.0527L30.1152 30.1152L73.0527 38.5098L73.7041 38.6377L74.0742 38.0869L98.5 1.79199L122.926 38.0869Z"
          fill="rgba(223, 70, 70, 0.57)"
        />
      </svg>
      {/* TODO: API 연동 후 name, votes 교체 */}
      <div className="absolute top-43 left-97.75">
        <VoteCount name="이름" votes={0} color="#E3E8F5" />
      </div>
      <div className="absolute top-104 left-170.75">
        <VoteCount name="이름" votes={0} color="#F2F4F6" />
      </div>
      <div className="absolute top-170 left-108.75">
        <VoteCount name="이름" votes={0} color="#F2F9F9" />
      </div>
      <div className="absolute top-35.25 left-87">
        <RankBadge rank={1} color="#1B7BE8" />
      </div>
      <div className="absolute top-96.25 left-160">
        <RankBadge rank={2} color="#FFEFB1" />
      </div>
      <div className="absolute top-157.25 left-98">
        <RankBadge rank={3} color="rgba(223, 70, 70, 0.57)" />
      </div>
    </main>
  );
}
