import React from 'react';
import { Button } from '@/components/ui/button'; // Import shadcn button
import { ArrowLeft, HelpCircle } from 'lucide-react'; // Icons for the navbar

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-[1118px] h-[69px] ml-auto bg-blue-700 p-4 rounded-lg shadow-md">
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

        {/* Help Icon */}
        <HelpCircle className="w-5 h-5 text-black mr-[50px]" />
      </nav>

      {/* Scrollable white page below the navbar */}
      <div className="w-[1118px] h-[calc(100vh-69px)] bg-white overflow-y-auto mt-0 p-4 shadow-lg ml-auto">
      </div>
    </>
  );
};

export default Navbar;


