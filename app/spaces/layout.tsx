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
      <section
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#F8FAFE" }}
      >
        {/* Page Header (Navigation Bar) */}
        <PageHeader />

        {/* Flex container for SideBar and Navbar */}
        <div className="flex flex-1">
          {/* Sidebar on the left */}
          <SideBar className="w-[251px] ml-[20px] "/>

          {/* Navbar on the right, take up remaining space */}
          <div className="flex-grow mt-[40px]">
            <Navbar />
          </div>
        </div>
      </section>
    </>
  );
}


