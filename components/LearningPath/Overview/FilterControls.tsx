// components/LearningPath/Overview/FilterControls.tsx
"use client";

import { LucSwitch } from "@/components/LearningPath/Overview/Switch";
import { LevelDropdown } from "@/components/LearningPath/Overview/LevelDropDown";
import { SearchButton } from "@/components/LearningPath/Overview/SearchButton";
import React from "react";

interface FilterControlsProps {
  levels: string[]; // Add levels prop here
}

export default function FilterControls({ levels }: FilterControlsProps) {
  return (
    <div className="flex items-center gap-6 mb-4">
      <LucSwitch label="Recently added" />
      <LucSwitch label="Most upvoted" />
      {/* Spacer div with 148px width */}
      <div className="w-[148px]"></div>
      <LevelDropdown levels={levels} onSelect={(level) => console.log(level)} /> {/* Pass levels prop */}
      <SearchButton onClick={() => console.log("Search clicked")} />
    </div>
  );
}
