"use client";

import { useState } from "react";
import { TEAM_MEMBERS } from "@/constants/teams";

const LEADER_CANDIDATES = [
  ...TEAM_MEMBERS.frontend.Ditda,
  ...TEAM_MEMBERS.frontend.JobDri,
  ...TEAM_MEMBERS.frontend.Groupeat,
  ...TEAM_MEMBERS.frontend.IPX,
  ...TEAM_MEMBERS.frontend.CONX,
];

export default function VotingLeader() {
  const [selected, setSelected] = useState<string | null>(null);

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
            FE - LEADER
          </p>
        </div>
      </div>

      <ul className="absolute top-[25rem] left-[10rem] w-[12.5rem] h-[20rem] md:top-[17rem] md:left-[50rem] md:w-[11.5rem] md:h-[25.625rem] grid grid-cols-2 content-between justify-items-center">
        {LEADER_CANDIDATES.map((name) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => setSelected(name)}
              className="relative text-label1 cursor-pointer px-2 py-2 md:px-6"
            >
              {selected === name && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.375rem] h-[4.375rem] rounded-full bg-[#AAD2FF] blur-[0.625rem] pointer-events-none" />
              )}
              <span className="relative">{name}</span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={!selected}
        className={`absolute top-[10rem] right-[1.5rem] left-auto w-[8rem] h-[5rem] md:top-[10.25rem] md:left-[33rem] md:right-auto md:w-[11.0625rem] md:h-[6.75rem] border-[3px] border-[#E8EEFF] flex items-center justify-center text-label1 cursor-pointer disabled:cursor-not-allowed ${
          selected ? "bg-[rgba(249,250,251,0.80)]" : "bg-transparent"
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
