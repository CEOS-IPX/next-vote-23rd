"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TEAM_MEMBERS, type Part } from "@/constants/teams";

export default function VotingLeader() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();
  // 로그인 연동 후 로그인 정보의 part로 교체
  const part = "frontend" as Part;
  const candidates = Object.values(TEAM_MEMBERS[part]).flat();
  const title = part === "backend" ? "BE - LEADER" : "FE - LEADER";

  return (
    <main
      onClick={() => setSelected(null)}
      className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]"
    >
      <div className="absolute top-40 left-6 md:top-51 md:left-72">
        <div className="relative flex items-center justify-center w-76.25 h-39.5">
          <img
            src="/figures/figure-ellipse-15.svg"
            alt=""
            aria-hidden
            className="absolute top-[calc(50%+0.5rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-82.25 h-43.5 pointer-events-none"
          />
          <img
            src="/figures/figure-ellipse-8.svg"
            alt=""
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-74.5 h-39 pointer-events-none"
          />
          <img
            src="/figures/figure-star-8.svg"
            alt=""
            aria-hidden
            className="absolute -top-12 -left-11 w-33 h-33 pointer-events-none"
          />
          <p className="relative text-xl font-bold md:text-2xl">
            {title}
          </p>
        </div>
      </div>

      <ul className="absolute top-100 left-40 w-50 h-80 md:top-68 md:left-200 md:w-46 md:h-102.5 grid grid-cols-2 content-between justify-items-center">
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
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-22.5 h-22.5 rounded-full pointer-events-none"
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
        className={`absolute top-40 right-6 left-auto w-32 h-20 md:top-41 md:left-132 md:right-auto md:w-44.25 md:h-27 border-[3px] border-[#E8EEFF] flex items-center justify-center text-label1 disabled:cursor-default ${
          selected ? "bg-[rgba(249,250,251,0.80)] cursor-pointer" : "bg-transparent"
        }`}
      >
        <span className="absolute -top-1.25 -left-1.25 w-2.5 h-2.5 bg-[#E3E8F5]" />
        <span className="absolute -top-1.25 -right-1.25 w-2.5 h-2.5 bg-[#E3E8F5]" />
        <span className="absolute -bottom-1.25 -left-1.25 w-2.5 h-2.5 bg-[#E3E8F5]" />
        <span className="absolute -bottom-1.25 -right-1.25 w-2.5 h-2.5 bg-[#E3E8F5]" />
        {selected && <span className="relative">투표하기 &gt;</span>}
      </button>
    </main>
  );
}
