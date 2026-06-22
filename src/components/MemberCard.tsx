type Props = {
  name: string;
  school?: string;
  department?: string;
};

export default function MemberCard({
  name,
  school = "CEOS UNIV",
  department = "Computer Science",
}: Props) {
  return (
    <div className="relative w-64 h-29.25 rounded-lg bg-[#D9D9D9]">
      <img
        src="/figures/figure-ellipse-9.svg"
        alt=""
        aria-hidden
        className="absolute top-5 bottom-5 left-4.75"
      />
      <img
        src="/figures/figure-ellipse-10.svg"
        alt=""
        aria-hidden
        className="absolute top-8.5 left-11"
      />
      <img
        src="/figures/figure-intersect.svg"
        alt=""
        aria-hidden
        className="absolute top-17.5 left-7.625"
      />
      <span className="absolute top-12.25 left-29.25 w-29.75 h-px bg-[#B0B8C1]" />
      <span className="absolute bottom-17.75 left-29.25 w-29.75 text-center text-sm font-bold leading-[140%] tracking-[-0.014px] text-[#4E5968]">
        {name}
      </span>
      <span className="absolute top-15 left-29.25 w-29.75 text-center text-xs font-medium leading-[135%] tracking-[-0.012px] text-[#F9FAFB] whitespace-pre-line">
        {`${school}\n${department}`}
      </span>
    </div>
  );
}
