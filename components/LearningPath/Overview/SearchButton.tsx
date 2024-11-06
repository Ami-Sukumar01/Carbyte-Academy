import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust the import path if necessary

interface SearchButtonProps {
  onClick: () => void;
}

export const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => (
  <Button
    onClick={onClick}
    className="bg-yellow-900 w-[60px] h-[46px] rounded-xs hover:bg-grey-900 flex items-center justify-center"
  >
    <Search className="text-white" size={20} /> {/* Adjusted icon size to fit within smaller button */}
  </Button>
);
