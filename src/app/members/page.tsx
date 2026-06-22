"use client";

import { useState } from "react";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";
import { MEMBERS, type Part } from "@/constants/members";

const PARTS: Part[] = ["PM", "DESIGN", "FRONTEND", "BACKEND"];

const PART_LABELS: Record<Part, string> = {
  PM: "PM",
  DESIGN: "DESIGN",
  FRONTEND: "FRONT -\nEND",
  BACKEND: "BACK -\nEND",
};

const PART_LABELS_MOBILE: Record<Part, string> = {
  PM: "PM",
  DESIGN: "DESIGN",
  FRONTEND: "FRONT-END",
  BACKEND: "BACK-END",
};

export default function Members() {
  const [selected, setSelected] = useState<Part>("FRONTEND");

  return (
    <main className="w-full">
      <div className="md:hidden pt-6 px-5">
        <div className="relative w-[349px] h-[106px]">
          <Image
            src="/figures/figure-small-membertab.svg"
            alt=""
            aria-hidden
            fill
            className="object-contain"
          />
          <div className="absolute top-[55px] left-[27px] w-[316px] h-[44px] flex items-center justify-around">
            {PARTS.map((part) => (
              <button
                key={part}
                type="button"
                onClick={() => setSelected(part)}
                className={`text-[13px] leading-tight text-black cursor-pointer ${
                  selected === part ? "font-bold underline" : "font-normal"
                }`}
              >
                {PART_LABELS_MOBILE[part]}
              </button>
            ))}
          </div>
        </div>

        <h1 className="mt-8 text-[32px] font-bold leading-[135%] tracking-[-0.032px] text-black">
          23th MEMBERS
        </h1>

        <div className="mt-4 grid grid-cols-2 gap-x-[21px] gap-y-[20px] pb-8">
          {MEMBERS[selected]
            .filter((m) => !m.isExecutive)
            .map((m) => (
              <MemberCard
                key={m.name}
                name={m.name}
                school={m.school}
                department={m.department}
              />
            ))}
        </div>
      </div>

      <div className="hidden md:block relative min-h-[1000px]">
        <h1 className="absolute top-[155px] left-[640px] text-[32px] font-bold leading-[135%] tracking-[-0.032px] text-black">
          23th MEMBERS
        </h1>
        <div className="absolute top-[236px] left-[640px] grid grid-cols-2 gap-x-[21px] gap-y-[20px]">
          {MEMBERS[selected]
            .filter((member) => !member.isExecutive)
            .map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                school={member.school}
                department={member.department}
              />
            ))}
        </div>
        <div className="absolute top-[183px] left-[97px] flex flex-col items-start justify-between w-[155px] h-[288px] p-[20px] border border-black">
          <span className="absolute -top-[11.5px] -left-[11.5px] w-[23px] h-[23px] border border-black" />
          <span className="absolute -top-[11.5px] -right-[11.5px] w-[23px] h-[23px] border border-black" />
          <span className="absolute -bottom-[11.5px] -left-[11.5px] w-[23px] h-[23px] border border-black" />
          <span className="absolute -bottom-[11.5px] -right-[11.5px] w-[23px] h-[23px] border border-black" />
          <span className="absolute -right-[71px] -bottom-[96px] w-[149px] h-[176px] bg-[#F2F4F6] -z-10" />
          {PARTS.map((part) => (
            <button
              key={part}
              type="button"
              onClick={() => setSelected(part)}
              className={`text-left text-[20px] leading-[135%] tracking-[-0.02px] text-black cursor-pointer whitespace-pre-line ${
                selected === part ? "font-bold underline" : "font-normal"
              }`}
            >
              {PART_LABELS[part]}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
