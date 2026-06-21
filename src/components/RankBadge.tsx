type Props = {
  rank: number;
  color: string;
};

export default function RankBadge({ rank, color }: Props) {
  return (
    <div className="relative flex items-center justify-center w-[86px] h-[86px] rounded-full bg-white border-2 border-[#191F28]">
      <div
        className="absolute w-[33px] h-[33px] rounded-full blur-[20px]"
        style={{ backgroundColor: color }}
      />
      <span className="relative text-center text-[28px] font-bold leading-[135%] tracking-[-0.028px] text-black">
        {rank}위
      </span>
    </div>
  );
}
