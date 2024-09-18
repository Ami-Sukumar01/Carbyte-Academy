import React from "react";
import Image from "next/image";
import { MdOutlineDashboard , MdBookmarkBorder , MdOutlinePersonOutline } from "react-icons/md"; // Example icons
import { FiHome , FiSearch } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import IconBox from "./IconBox"; // Assuming IconBox is in the same folder
import TestComponent from "./TestComponent";

// Path to the logo
const logoPath = "/popsicle-icon.svg";

const PageHeader = () => {
    return (
      <nav className="relative bg-[#8075B1] w-[1440] h-[111px] flex items-center justify-between px-8">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/popsicle-icon.svg" // Replace with your logo path
            alt="Popsicle"
            width={50} // Adjust the logo size
            height={50}
          />
        </div>
  
        {/* Icons on top of the nav */}
        <div className="absolute top-3 right-0 m-4 z-10 flex space-x-4 hover:shadow-[6px_6px_0_black">
          <IconBox icon={<MdOutlineDashboard size={24} />} />
          <IconBox icon={<FiHome size={24} />} />
          <IconBox icon={<FiSearch size={24} />} />
          <IconBox icon={<MdBookmarkBorder size={24} />} />
          <IconBox icon={<LuSettings size={24} />} />
          <IconBox icon={<MdOutlinePersonOutline  size={24} />} />
        </div>
      </nav>
    );
  };
  
  export default PageHeader;



