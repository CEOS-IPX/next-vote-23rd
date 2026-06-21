"use client";

import { useState } from "react";
import MemberCard from "@/components/MemberCard";
import { MEMBERS, type Part } from "@/constants/members";

const PARTS: Part[] = ["PM", "DESIGN", "FRONTEND", "BACKEND"];

const PART_LABELS: Record<Part, string> = {
  PM: "PM",
  DESIGN: "DESIGN",
  FRONTEND: "FRONT -\nEND",
  BACKEND: "BACK -\nEND",
};

export default function Members() {
  const [selected, setSelected] = useState<Part | null>(null);

  return (
    <main className="relative min-h-[1000px]">
      <h1 className="absolute top-[155px] left-[640px] text-[32px] font-bold leading-[135%] tracking-[-0.032px] text-black">
        23th MEMBERS
      </h1>
      {selected && (
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
      )}
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
              selected === part
                ? "font-bold underline"
                : "font-normal"
            }`}
          >
            {PART_LABELS[part]}
          </button>
        ))}
      </div>
    </main>
  );
}
