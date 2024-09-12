import Image from "next/image";
import React from "react";

// Path to the logo
const logoPath = "/Popsicle-logo.svg";

export const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-customGray">
        <div className="logo pt-[20px] pr-[20px] pb-[20px] pl-[20px] md:pt-[39px] md:pr-[176px] md:pb-[39px] md:pl-[176px] flex gap-[10px] justify-center md:justify-start">
          <Image src={logoPath} alt="logo" width={72} height={96} />
        </div>
      </nav>

    </>
  );
}
