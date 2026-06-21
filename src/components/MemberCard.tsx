type Props = {
  name: string;
  school: string;
  department: string;
};

export default function MemberCard({ name, school, department }: Props) {
  return (
    <div className="relative w-[256px] h-[117px] rounded-[8px] bg-[#D9D9D9]">
      <img
        src="/Ellipse 9.svg"
        alt=""
        aria-hidden
        className="absolute top-[20px] bottom-[20px] left-[19px]"
      />
      <img
        src="/Ellipse 10.svg"
        alt=""
        aria-hidden
        className="absolute top-[34px] left-[44px]"
      />
      <img
        src="/Intersect.svg"
        alt=""
        aria-hidden
        className="absolute top-[70px] left-[30.5px]"
      />
      <span className="absolute top-[49px] left-[117px] w-[119px] h-[1px] bg-[#B0B8C1]" />
      <span className="absolute bottom-[71px] left-[117px] w-[119px] text-center text-[14px] font-bold leading-[140%] tracking-[-0.014px] text-[#4E5968]">
        {name}
      </span>
      <span className="absolute top-[60px] left-[117px] w-[119px] text-center text-[12px] font-medium leading-[135%] tracking-[-0.012px] text-[#F9FAFB] whitespace-pre-line">
        {`${school}\n${department}`}
      </span>
    </div>
  );
}
