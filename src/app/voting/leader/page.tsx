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
    <main className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF]">
      <p className="absolute top-[12.75rem] left-[28.125rem] text-[1.5rem] font-bold">
        FE - LEADER
      </p>

      <ul className="absolute top-[12.75rem] left-[46.5625rem] w-[13.625rem] h-[25.625rem] flex flex-wrap justify-between content-between items-center">
        {LEADER_CANDIDATES.map((name) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => setSelected(name)}
              className="relative text-label1 cursor-pointer px-6 py-2"
            >
              {selected === name && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#AAD2FF] blur-[10px] pointer-events-none" />
              )}
              <span className="relative">{name}</span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={!selected}
        className={`absolute top-[31.625rem] left-[68.75rem] w-[11.0625rem] h-[6.75rem] rounded-lg flex items-center justify-center text-label1 cursor-pointer disabled:cursor-not-allowed ${
          selected ? "bg-white/60" : "bg-transparent"
        }`}
      >
        {selected && <>투표하기 &gt;</>}
      </button>
    </main>
  );
}
