"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CircleHelp } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { useRouter } from "next/navigation";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const router = useRouter();
  return (
    <nav className={`flex mr-[90px] justify-between items-center w-[1118px] h-[69px] bg-blue-700 p-4 rounded-tl-[3px] relative z-20 ${className}`}>
      <Button onClick={() => router.back()}
        variant="outline"
        className="flex rounded-xs items-center w-[151px] h-[46px] space-x-2 bg-white text-md font-inter hover:bg-white hover:shadow-[3px_3px_0_black]"

      >Back</Button>

      {/* Request a Topic Button */}
      <Button
        variant="outline"
        className="bg-white w-[198px] h-[46px] rounded-xs ml-[550px] hover:bg-white hover:shadow-[3px_3px_0_black] text-md font-inter"
      >
        Request a topic
      </Button>
      {/* Popover Help Icon */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <CircleHelp className="w-5 h-5 text-black  mr-[100px] focus:outline-none cursor-pointer " />
        </Popover.Trigger>
        <Popover.Content
          side="top"
          align="center"
          className="rounded-md p-3 bg-white shadow-[3px_3px_0_black] w-[246px] h-[83px] text-center border-none text-sm font-inter focus:ring-0 focus:outline-none z-30"
          sideOffset={10}
        >
            <p>This is a popover that explains terms / actions / buttons which might not be clear for a user.</p>
            <Popover.Arrow
              className="fill-current text-white w-[28px] h-[17px] drop-shadow-[3px_3px_0_black]"
            />
          </Popover.Content>
        </Popover.Root>
      </nav>
  );
};

export default Navbar;







