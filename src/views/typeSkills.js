"use client";

import { TypewriterEffectSmooth } from "@/components/typeWriter";

export function TypeSkills() {
  const words = [
    {
      text: "My",
    },
    {
      text: "Professional",
    },
    {
      text: "Toolkit",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
