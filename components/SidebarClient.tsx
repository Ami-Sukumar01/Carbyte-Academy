// SidebarClient.tsx (Client Component)
"use client"; // This indicates the component uses client-side logic

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react'; // Import a hamburger menu icon

interface SidebarClientProps {
  spaces: { alias: string }[]; // Assuming spaces has an alias field
  className?: string;
}

export default function SidebarClient({ spaces, className }: SidebarClientProps) {
  // Client-side state management for the sidebar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`p-4 ${className}`}>
      {/* Hamburger Menu Button (visible only on small screens) */}
      <Button 
        variant="outline"
        onClick={() => setIsOpen(!isOpen)} // Toggle sidebar visibility
        className="lg:hidden flex items-center justify-start w-[50px] h-[40px] mb-2"
      >
        <Menu className="w-6 h-6" /> {/* Hamburger Icon */}
      </Button>

      {/* Sidebar - Hidden on small screens unless opened */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} flex-col mt-[53px] space-y-3`}>
        {spaces.map((space) => (
          <Link key={space.alias} href={`/spaces/${space.alias}`}>
            <Button
              variant="outline"
              className="w-[251px] h-[58px] mt-[10px] text-lg px-[16px] py-[18px] rounded-md font-inter flex items-center border border-gray-300 bg-white justify-start"
            >
              {space.alias}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
