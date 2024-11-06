// components/LevelDropdown.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Adjust the path to your ShadCN button component
import { ChevronDown } from "lucide-react"; // Import the ChevronDown icon from Lucide

interface LevelDropdownProps {
  onSelect: (level: string) => void;
  levels: string[]; // Accept levels as a prop
}

export const LevelDropdown: React.FC<LevelDropdownProps> = ({ onSelect, levels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("Level");

  const handleSelect = (level: string) => {
    setSelectedLevel(level);
    onSelect(level);
    setIsOpen(false);
  };

  // Automatically close dropdown after 2000 milliseconds if it's open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 2000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup on component unmount or if isOpen changes
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="border border-black flex justify-between rounded-xs items-center w-[160px] h-[46px] px-4"
        variant="outline"
      >
        <span className="text-gray-500">{selectedLevel}</span>
        <ChevronDown className="w-6 h-6 text-black" />
      </Button>
      {isOpen && (
        <div className="absolute mt-1 bg-white border rounded shadow-lg w-full">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => handleSelect(level)}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              {level}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelDropdown;
