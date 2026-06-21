"use client";

import { useState } from "react";
import { TEAM_NAMES, TeamName } from "@/constants/teams";

export default function VotingDemoday() {
  const [selected, setSelected] = useState<TeamName | null>(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#D2E6FD] to-[#FFFFFF] flex flex-col pt-[10rem] pb-[5rem] pl-[5rem] md:pt-[13.125rem] md:pb-[15.5rem] md:pl-[21.75rem]">
      <div className="absolute bottom-[3rem] right-[2rem] md:bottom-[10rem] md:right-[30rem]">
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
      </div>
      <div className="absolute bottom-[5rem] right-[1rem] md:bottom-[16.5rem] md:left-[48rem] md:right-auto">
        <svg
          className="w-[9.375rem] h-[9.375rem] md:w-[12.3125rem] md:h-[12.3125rem]"
          viewBox="0 0 197 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M122.926 38.0869L123.296 38.6377L123.947 38.5098L166.884 30.1152L158.49 73.0527L158.362 73.7041L158.913 74.0742L195.207 98.5L158.913 122.926L158.362 123.296L158.49 123.947L166.884 166.884L123.947 158.49L123.296 158.362L122.926 158.913L98.5 195.207L74.0742 158.913L73.7041 158.362L73.0527 158.49L30.1152 166.884L38.5098 123.947L38.6377 123.296L38.0869 122.926L1.79199 98.5L38.0869 74.0742L38.6377 73.7041L38.5098 73.0527L30.1152 30.1152L73.0527 38.5098L73.7041 38.6377L74.0742 38.0869L98.5 1.79199L122.926 38.0869Z"
            fill={selected ? "#EAF4FF" : "#5DA9FF"}
            fillOpacity={selected ? 0.8 : 1}
            stroke="#5DA9FF"
            strokeWidth="2"
          />
        </svg>
        <button
          type="button"
          disabled={!selected}
          className="absolute inset-0 flex items-center justify-center text-label1 cursor-pointer disabled:cursor-not-allowed"
        >
          {selected && <>투표하기 &gt;</>}
        </button>
      </div>
      <ul className="flex flex-col items-center gap-[1.0625rem] md:flex-1 md:justify-between md:gap-0 md:w-[11.5rem]">
        {TEAM_NAMES.map((team) => (
          <li key={team}>
            <button
              type="button"
              onClick={() => setSelected(team)}
              className={`relative text-label1 cursor-pointer px-6 py-2 ${
                selected === team ? "z-10" : ""
              }`}
            >
              {selected === team && (
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5.625rem] h-[5.625rem] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(170,210,255,0.9) 0%, rgba(170,210,255,0) 70%)",
                  }}
                />
              )}
              <span className="relative">{team}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
