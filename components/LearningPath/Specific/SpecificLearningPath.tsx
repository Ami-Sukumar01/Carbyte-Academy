"use client";
import { SecctionDetails } from "./SectionDetails";
import { LearningPathData, SectionProps } from "@/app/types/learningPathTypes";
import { useState } from "react";
import SideBar from "./SpecificpageSidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SquareCheckBig } from "lucide-react";
import Link from "next/link";

export default function SpecificLearningPath({
  spaceAlias,
  learningPathData,
}: {
  spaceAlias: string;
  learningPathData: LearningPathData;
}) {
  const [selectedSection, setSelectedSection] = useState<SectionProps | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Calculate dynamic completion percentage
  const completedSections = learningPathData.sections.filter(section => section.subsections && section.subsections.length > 0).length;
  const totalSections = learningPathData.sections.length;
  const completionPercentage = Math.round((completedSections / totalSections) * 100);

  const userAvatar = "/path/to/avatar.png"; // Replace with actual avatar path

  const handleBackToOverview = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar container */}
      <div className="fixed left-0 h-[958px] w-[636px] bg-gray-100">
        <SideBar spaceAlias={spaceAlias} learningPathData={learningPathData} />
      </div>

      {/* Scrollable content area */}
      <div className="ml-[636px] overflow-x-auto h-full w-full flex flex-col items-start px-4 py-8 mb-[200px] relative">
        {/* User Info and Progress Bar Section */}
        <div className="flex items-center space-x-4 mb-8">
          {/* User Card */}
          <div className="flex items-center w-[222px] h-[72px] bg-black text-white p-4 rounded-md">
            <Image src={userAvatar} alt="User Avatar" width={40} height={40} className="rounded-full" />
            <div className="ml-4">
              <div className="font-bold">{learningPathData.lastModifiedBy.name}</div>
              <div className="text-yellow-400 border-t-2 border-yellow-400 mt-1">{learningPathData.audience.name}</div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex flex-col">
            <span>{completionPercentage}% completed</span>
            <div className="w-[300px] h-4 bg-black rounded-md overflow-hidden mt-1">
              <div className="bg-yellow-400 h-full" style={{ width: `${completionPercentage}%` }}></div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed positioning */}
        <div className="fixed top-4 right-4 flex space-x-4 z-10">
          <Button className="px-4 py-2 text-black hover:bg-white bg-white border border-black rounded-xs" onClick={handleBackToOverview}>
            Back to overview
          </Button>
          <Button className="px-4 py-2 text-black hover:bg-white bg-white border border-black rounded-xs">
            Finish
          </Button>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-md shadow-md max-w-md w-[614px] h-[166px] relative">
              <button onClick={handleClosePopup} className="absolute top-2 right-2 text-gray-600">
                &times;
              </button>
              <div className="flex items-center mb-4">
                <SquareCheckBig className="text-2xl mr-2 text-black" />
                <span className="font-semibold text-lg">Your progress will be saved</span>
              </div>

              <div className="flex space-x-4 mt-6">
                <Button onClick={handleClosePopup} className="px-4 py-2 bg-white text-black hover:bg-white border w-[200px] h-[46px] border-black rounded-xs">
                  Continue learning path
                </Button>
                <Link href={`/spaces/${spaceAlias}/lp`} passHref>
                  <Button onClick={handleClosePopup} className="px-4 py-2 bg-white text-black hover:bg-white border w-[200px] h-[46px] border-black rounded-xs">
                    Back to overview
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Horizontal alignment for section titles and subsections */}
        <div className="flex space-x-8 items-center relative">
          {learningPathData.sections.map((section: SectionProps, index) => {
            const subsections = section.subsections || [];
            const topSubsections = subsections.slice(0, 4);
            const bottomSubsections = subsections.slice(4);

            return (
              <div key={section.id} className="flex flex-col items-center min-w-[200px] relative">
                <div className="w-[250px] h-[250px] flex flex-col-reverse items-center justify-start mb-3 gap-3">
                  {topSubsections.length > 0 ? (
                    topSubsections.map((subsection: SectionProps) => (
                      <div
                        key={subsection.id}
                        className="border bg-blue-100 text-md w-[165px] h-[75px] flex items-center justify-center mb-2 px-4"
                        onClick={() => setSelectedSection(subsection)}
                      >
                        {subsection.title}
                      </div>
                    ))
                  ) : (
                    <div className="w-[280px] h-[60px] mb-2"></div>
                  )}
                </div>

                <div className="relative flex flex-col items-center w-[195px] mb-4">
                  {index > 0 && (
                    <div className="absolute left-[-89px] top-1/2 transform -translate-y-1/2 w-[90px] h-[2px] bg-black" />
                  )}
                  <div
                    className="text-lg border cursor-pointer bg-blue-300 inline-flex items-center justify-center px-4 py-2 w-full"
                    onClick={() => setSelectedSection(section)}
                  >
                    {section.title}
                  </div>
                </div>

                <div className="w-[250px] h-[250px] flex flex-col items-center justify-start gap-3 mt-3">
                  {bottomSubsections.length > 0 ? (
                    bottomSubsections.map((subsection: SectionProps) => (
                      <div
                        key={subsection.id}
                        className="border bg-blue-100 text-md w-[165px] h-[56px] flex items-center justify-center mb-2 px-4"
                        onClick={() => setSelectedSection(subsection)}
                      >
                        {subsection.title}
                      </div>
                    ))
                  ) : (
                    <div className="w-[280px] h-[60px] mb-2"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popover for section details */}
      {selectedSection && (
        <div
          className="fixed w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedSection(null)}
        >
          <div
            className="bg-white rounded-lg relative w-96 max-h-[80vh] overflow-y-auto shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSection(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold border-none"
            >
              ×
            </button>
            <SecctionDetails spaceAlias={spaceAlias} section={selectedSection} />
          </div>
        </div>
      )}
    </div>
  );
}
