// components/LearningPath/Overview/Switch.tsx
"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch"; // Adjust the path as needed

interface LucSwitchProps {
  label: string;
}

export const LucSwitch: React.FC<LucSwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <Switch checked={isChecked} onCheckedChange={handleChange} />
      <span>{label}</span>
    </label>
  );
};

export default LucSwitch;
