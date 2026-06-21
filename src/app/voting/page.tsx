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

      <Link
        href="/voting/demoday"
        className="absolute bottom-[3rem] right-[2rem] md:bottom-[10rem] md:right-[30rem]"
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
            className="absolute -bottom-[2.25rem] -right-[2.25rem] w-[6.8125rem] h-[6.75rem] pointer-events-none"
          />
          <p className="relative text-[1.25rem] font-bold md:text-[1.5rem]">
            DEMO-DAY
          </p>
        </div>
      </Link>

      <svg
        className="absolute bottom-[5rem] right-[1rem] w-[9.375rem] h-[9.375rem] md:bottom-[16.5rem] md:left-[48rem] md:right-auto md:w-[12.3125rem] md:h-[12.3125rem] pointer-events-none"
        viewBox="0 0 197 197"
        fill="none"
        aria-hidden
      >
        <path
          d="M122.926 38.0869L123.296 38.6377L123.947 38.5098L166.884 30.1152L158.49 73.0527L158.362 73.7041L158.913 74.0742L195.207 98.5L158.913 122.926L158.362 123.296L158.49 123.947L166.884 166.884L123.947 158.49L123.296 158.362L122.926 158.913L98.5 195.207L74.0742 158.913L73.7041 158.362L73.0527 158.49L30.1152 166.884L38.5098 123.947L38.6377 123.296L38.0869 122.926L1.79199 98.5L38.0869 74.0742L38.6377 73.7041L38.5098 73.0527L30.1152 30.1152L73.0527 38.5098L73.7041 38.6377L74.0742 38.0869L98.5 1.79199L122.926 38.0869Z"
          fill="#5DA9FF"
          stroke="#5DA9FF"
          strokeWidth="2"
        />
      </svg>
    </main>
  );
}
