import React from "react";
import Image from "next/image";
import { MdOutlineDashboard, MdBookmarkBorder, MdOutlinePersonOutline } from "react-icons/md"; 
import { FiHome, FiSearch } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import IconBox from "./IconBox"; 

// Path to the logo
const logoPath = "/popsicle-icon.svg";

interface PageHeaderProps {
  className?: string; // Accept className as a prop
}

const PageHeader: React.FC<PageHeaderProps> = ({ className = "" }) => {
  return (
    <nav className={`fixed top-0 bg-[#8075B1] w-full h-[111px] flex items-center justify-between px-8 z-10 ${className}`}> {/* Changed position to fixed */}
      {/* Logo on the left */}
      <div className="flex items-center">
        <Image
          src="/popsicle-icon.svg"
          alt="Popsicle"
          width={50}
          height={50}
        />
      </div>

      {/* Icons on top of the nav */}
      <div className="absolute top-3 right-0 m-4 flex space-x-4 z-10">
        <IconBox icon={<MdOutlineDashboard size={24} />} />
        <IconBox icon={<FiHome size={24} />} />
        <IconBox icon={<FiSearch size={24} />} />
        <IconBox icon={<MdBookmarkBorder size={24} />} />
        <IconBox icon={<LuSettings size={24} />} />
        <IconBox icon={<MdOutlinePersonOutline size={24} />} />
      </div>
    </nav>
  );
};


export default PageHeader;

