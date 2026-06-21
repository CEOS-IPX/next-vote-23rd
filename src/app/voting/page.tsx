import Link from "next/link";
import type { Part } from "@/constants/teams";

export default function Voting() {
  // 로그인 연동 후 로그인 정보의 part로 교체
  const part: Part = "frontend";
  const partLabel = part === "backend" ? "BE" : "FE";

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]">
      <Link
        href="/voting/leader"
        className="absolute top-[10rem] left-[1.5rem] md:top-[12.75rem] md:left-[18rem]"
      >
        <div className="relative flex items-center justify-center w-[19.0625rem] h-[9.875rem]">
          <img
            src="/Ellipse 15.svg"
            alt=""
            aria-hidden
            className="absolute top-[calc(50%+0.5rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20.5625rem] h-[10.875rem] pointer-events-none"
          />
          <img
            src="/Ellipse 8.svg"
            alt=""
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18.625rem] h-[9.75rem] pointer-events-none"
          />
          <img
            src="/Star 8.svg"
            alt=""
            aria-hidden
            className="absolute -top-[3rem] -left-[2.75rem] w-[8.25rem] h-[8.25rem] pointer-events-none"
          />
          <p className="relative text-[1.25rem] font-bold md:text-[1.5rem]">
            {partLabel} - LEADER
          </p>
        </div>
      </Link>
    </main>
  );
}
