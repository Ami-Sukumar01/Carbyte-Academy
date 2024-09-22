"use client";

import PageHeader from "@/components/Header";
import { RiQuestionLine } from "react-icons/ri";
import { useState } from "react";

export default function SpacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <section
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: "#F8FAFE" }}
      >
        {/* Page Header (Navigation Bar) */}
        <PageHeader />

        {/* Main layout after the header */}
        <div className="flex flex-1 overflow-hidden mt-6">
          {/* Sidebar */}
          <div className="w-[251px] p-4">
            <div className="flex flex-col space-y-3 mt-6">
              {/* Sidebar buttons */}
              <button className="w-full h-[64px] bg-white shadow-md text-gray-700 rounded-lg border border-gray-300">
                E2E
              </button>
              <button className="w-full h-[64px] bg-white shadow-md text-gray-700 rounded-lg border border-gray-300">
                ADAS
              </button>
              <button className="w-full h-[64px] bg-white shadow-md text-gray-700 rounded-lg border border-gray-300">
                New Tech
              </button>
              <button className="w-full h-[64px] bg-white shadow-md text-gray-700 rounded-lg border border-gray-300">
                Cloud Solutions
              </button>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex-1 flex flex-col mt-6">
            {/* Back button navbar covering entire right side */}
            <div
              className="flex items-center justify-between"
              style={{
                backgroundColor: "rgba(128, 117, 177, 0.41)",
                borderRadius: "3px",
                height: "69px",
                width: "100%",
                marginTop: "17px",
                marginLeft: "20px",
                padding: "0 16px",
              }}
            >
              {/* Back Button */}
              <button
                className="bg-white text-black px-4 py-2 rounded-lg shadow-md"
                style={{
                  width: "150px",
                  height: "46px",
                  borderColor: "black",
                  borderWidth: "1.5px",
                }}
              >
                Back
              </button>

              {/* Request a Topic Button and Question Icon */}
              <div className="flex items-center space-x-2 relative">
                <button
                  className="bg-white text-black px-4 py-2 rounded-lg shadow-md"
                  style={{
                    width: "226px",
                    height: "46px",
                    borderColor: "black",
                    borderWidth: "1.5px",
                    marginRight: "10px",
                  }}
                >
                  Request a Topic
                </button>

                {/* Question Icon with Popover */}
                <div
                  className="relative group"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  style={{ zIndex: 9999, position: "relative" }} // Ensure popover is on top and has relative position
                >
                  <RiQuestionLine
                    size={24}
                    style={{
                      color: "purple",
                      cursor: "pointer",
                      marginRight: "50px",
                    }}
                  />

                  {/* Popover Box */}
                  {showTooltip && (
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-4 w-[246px] h-[100px] p-4 text-black bg-white border border-gray-300 rounded-lg shadow-md"
                      style={{
                        whiteSpace: "normal",
                        zIndex: 9999, // Ensure it's above everything else
                      }}
                    >
                      <p>This is a popover button.</p>

                      {/* Arrow (triangle) */}
                      <div
                        className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "15px solid transparent",
                          borderRight: "15px solid transparent",
                          borderTop: "15px solid white",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main content (under navbar) */}
            <div
              className="flex-1 p-4 overflow-y-auto"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "4px",
                marginLeft: "20px",
                marginTop: "0",
                maxHeight: "calc(100vh - 128px)",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

