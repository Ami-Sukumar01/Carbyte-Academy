import React from 'react';
import { Button } from '@/components/ui/button'; // Import shadcn button
import { ArrowLeft, CircleHelp } from 'lucide-react'; // Icons for the navbar
import * as Popover from '@radix-ui/react-popover'; 

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-[1118px] h-[69px] ml-auto bg-blue-700 p-4 rounded-lg shadow-md relative z-20">
        {/* Back Button */}
        <Button
          variant="outline"
          className="flex items-center rounded-xs space-x-2 bg-white hover:bg-white transition-shadow duration-300 ease-in-out hover:shadow-[3px_3px_0_black]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>

        {/* Request a Topic Button */}
        <Button
          variant="outline"
          className="bg-white rounded-xs ml-[650px] hover:bg-white transition-shadow duration-300 ease-in-out hover:shadow-[3px_3px_0_black]"
        >
          Request a topic
        </Button>

        {/* Popover Help Icon */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <CircleHelp className="w-5 h-5 text-black mr-[20px] focus:outline-none cursor-pointer" />
          </Popover.Trigger>
          <Popover.Content
            side="top"
            align="center"
            className="rounded-md p-3 bg-white shadow-[3px_3px_0_black] max-w-xs text-center border-none focus:ring-0 focus:outline-none z-30"
            sideOffset={10}
          >
            <p>This is a popover that explains terms / actions / buttons which might not be clear for a user.</p>
            <Popover.Arrow
              className="fill-current text-white w-[28px] h-[17px]"
              style={{
                filter: 'drop-shadow(3px 3px 0 black)',
              }}
            />
          </Popover.Content>
        </Popover.Root>

      </nav>

      {/* Scrollable white page below the navbar */}
      <div className="w-[1118px] h-[calc(100vh-69px)] bg-white overflow-y-auto mt-0 p-4 shadow-lg ml-auto">
        {/* Page content goes here */}
      </div>
    </>
  );
};

export default Navbar;





