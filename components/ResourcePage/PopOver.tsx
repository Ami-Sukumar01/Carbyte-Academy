"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Filter, BookOpen } from "lucide-react"; // Import BookOpen

// FilterPopover now accepts filters and onFilterChange props
export function FilterPopover({
  filters,
  selectedFilter,
  onFilterChange,
}: {
  filters: string[]; // Filters will come from resourceTypeName
  selectedFilter: string | null; // The currently selected filter
  onFilterChange: (selected: string) => void; // Function to handle filter changes
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
          align="end" // Align popover to the right of the button
          side="bottom" // Open the popover below the button
          sideOffset={8} // Offset from the button
          avoidCollisions={false} // Allow placement even if near viewport edges
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
          <Popover.Arrow className="fill-white" /> {/* Add an arrow to point to the button */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
