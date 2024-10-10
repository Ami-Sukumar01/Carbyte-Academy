"use client";

import PageHeader from "@/components/Header";
import Navbar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

export default function SpacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        body {
          overflow: hidden; /* Prevent body scrolling */
        }
      `}</style>
      <section
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#F8FAFE", paddingTop: "111px" }}
      >
        {/* Page Header (Navigation Bar) */}
        <PageHeader className="mt-[0]" />

        {/* Flex container for SideBar and Navbar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar on the left */}
          <SideBar className="w-[251px] ml-[20px] fixed top-[140px] h-[calc(100vh-111px)]" /> {/* Fixed sidebar */}

          {/* Navbar and Content on the right */}
          <div className="flex-grow flex flex-col ml-[271px]">
            {/* Navbar */}
            <Navbar className="w-full fixed top-[70px] ml-[50px] z-20 h-[69px]" />

            {/* Scrollable white page below the navbar */}
            <div
              className="flex-grow w-[1118px] ml-[51px] bg-white overflow-y-auto p-4 pr-20 shadow-lg mt-[69px]"
              style={{ maxHeight: "calc(100vh - 250px)" }} // Adjust height to allow scrolling only in this area
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
