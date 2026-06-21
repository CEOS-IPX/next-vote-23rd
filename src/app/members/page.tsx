"use client";

import { useState } from "react";

const ROLES = ["PM", "DESIGN", "FRONT-END", "BACK-END"] as const;
type Role = (typeof ROLES)[number];

const ROLE_LABELS: Record<Role, string> = {
  PM: "PM",
  DESIGN: "DESIGN",
  "FRONT-END": "FRONT -\nEND",
  "BACK-END": "BACK -\nEND",
};

export default function Members() {
  const [selected, setSelected] = useState<Role | null>(null);

  return (
    <main className="relative min-h-screen">
      <div className="absolute top-[183px] left-[97px] flex flex-col items-start justify-between w-[155px] h-[288px] p-[20px] border border-black">
        <span className="absolute -top-[11.5px] -left-[11.5px] w-[23px] h-[23px] border border-black" />
        <span className="absolute -top-[11.5px] -right-[11.5px] w-[23px] h-[23px] border border-black" />
        <span className="absolute -bottom-[11.5px] -left-[11.5px] w-[23px] h-[23px] border border-black" />
        <span className="absolute -bottom-[11.5px] -right-[11.5px] w-[23px] h-[23px] border border-black" />
        <span className="absolute -right-[71px] -bottom-[96px] w-[149px] h-[176px] bg-[#F2F4F6] -z-10" />
        {ROLES.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => setSelected(role)}
            className={`text-left text-[20px] leading-[135%] tracking-[-0.02px] text-black cursor-pointer whitespace-pre-line ${
              selected === role
                ? "font-bold underline"
                : "font-normal"
            }`}
          >
            {ROLE_LABELS[role]}
          </button>
        ))}
      </div>
    </main>
  );
}
