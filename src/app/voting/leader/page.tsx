"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TEAM_MEMBERS, type Part } from "@/constants/teams";

export default function VotingLeader() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();
  // 로그인 연동 후 로그인 정보의 part로 교체
  const part: Part = "frontend";
  const candidates = Object.values(TEAM_MEMBERS[part]).flat();
  const title = part === "backend" ? "BE - LEADER" : "FE - LEADER";

  return (
    <main
      onClick={() => setSelected(null)}
      className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]"
    >
      <div className="absolute top-[10rem] left-[1.5rem] md:top-[12.75rem] md:left-[18rem]">
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
            {title}
          </p>
        </div>
      </div>

      <ul className="absolute top-[25rem] left-[10rem] w-[12.5rem] h-[20rem] md:top-[17rem] md:left-[50rem] md:w-[11.5rem] md:h-[25.625rem] grid grid-cols-2 content-between justify-items-center">
        {candidates.map((name) => (
          <li key={name}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(name);
              }}
              className={`relative text-label1 cursor-pointer px-2 py-2 md:px-6 ${
                selected === name ? "z-10" : ""
              }`}
            >
              {selected === name && (
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5.625rem] h-[5.625rem] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(170,210,255,0.9) 0%, rgba(170,210,255,0) 70%)",
                  }}
                />
              )}
              <span className="relative">{name}</span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={!selected}
        onClick={() => router.push("/voting/result/leader")}
        className={`absolute top-[10rem] right-[1.5rem] left-auto w-[8rem] h-[5rem] md:top-[10.25rem] md:left-[33rem] md:right-auto md:w-[11.0625rem] md:h-[6.75rem] border-[3px] border-[#E8EEFF] flex items-center justify-center text-label1 disabled:cursor-default ${
          selected ? "bg-[rgba(249,250,251,0.80)] cursor-pointer" : "bg-transparent"
        }`}
      >
        <span className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] bg-[#E3E8F5]" />
        <span className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] bg-[#E3E8F5]" />
        <span className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] bg-[#E3E8F5]" />
        <span className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] bg-[#E3E8F5]" />
        {selected && <span className="relative">투표하기 &gt;</span>}
      </button>
    </main>
  );
}
