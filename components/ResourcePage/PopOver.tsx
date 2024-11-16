"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Filter, BookOpen } from "lucide-react"; 

// FilterPopover now accepts filters and onFilterChange props
export function FilterPopover({
  filters,
  selectedFilter,
  onFilterChange,
}: {
  filters: string[]; 
  selectedFilter: string | null; 
  onFilterChange: (selected: string) => void; 
}) {
  return (
    <Popover.Root>
      {/* Trigger Button */}
      <Popover.Trigger asChild>
        <button className="bg-purple-500 text-white flex items-center px-4 py-2 rounded-md hover:bg-purple-600">
          <Filter className="mr-2 h-5 w-5" strokeWidth={1.5} />
          Filter
        </button>
      </Popover.Trigger>

      {/* Popover Content */}
      <Popover.Portal>
        <Popover.Content
          className="bg-white p-4 shadow-lg rounded-md border border-black w-[220px]"
          align="end" 
          side="bottom"
          sideOffset={8} 
          avoidCollisions={false} 
        >
          <h3 className="text-sm font-inter mb-6">Add Filter</h3>
          <div className="grid grid-cols-2 gap-2">
            {filters.map((type) => (
              <button
                key={type}
                onClick={() => onFilterChange(type)} // Handle filter selection
                className={`flex flex-col items-center justify-between w-[84px] h-[90px] border border-black rounded-sm p-4 ${
                  selectedFilter === type ? "bg-purple-300" : "bg-purple-100"
                } hover:bg-purple-200`}
              >
                <BookOpen className="h-6 w-6 mt-2" />
                <span className=" text-xs">{type}</span>
              </button>
            ))}
          </div>
          <Popover.Arrow className="fill-white" /> 
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
