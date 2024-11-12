"use client";
import { LearningPathData, SectionProps } from "@/app/types/learningPathTypes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Timer, Target, ArrowBigUp, Bookmark, Share } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Import Avatar from shadcn

export default function SideBar({ spaceAlias, learningPathData }: { spaceAlias: string, learningPathData: LearningPathData }) {
  const [selectedSection, setSelectedSection] = useState<SectionProps | null>(null);


  // Extract initials from lastModifiedBy name
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    return nameParts.length >= 2
      ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
      : name[0].toUpperCase();
  };

  return (
    <div className="flex flex-col items-start px-4xl py-3xl">
      {/* Learning Path Label */}
      <Button className="border bg-black text-white mb-4">Learning path</Button>

      {/* Title and Description */}
      <p className="text-3xl font-bold mb-2">{learningPathData.title}</p>
      <p className="text-base text-gray-700 mb-6">{learningPathData.description}</p>

      {/* Time to Complete and Level Buttons */}
      <div className="flex flex-col gap-2 mb-6">
        <Button className="flex items-center justify-between w-[262px] h-[46px] bg-yellow-700 border-2 border-black text-black px-4 py-2 rounded-xs hover:bg-yellow-700">
          <Timer className="mr-2" /> Time to complete: <span className="font-bold">{learningPathData.estimatedTime} min</span>
        </Button>
        <Button className="flex items-center mt-[10px] justify-between w-[185px] h-[46px] border-2 border-black rounded-xs bg-yellow-700 text-black px-4 py-2 hover:bg-yellow-700 ">
          <Target className="mr-2" /> Level: <span className="font-bold ">{learningPathData.audience.name} </span>
        </Button>
      </div>

      {/* Icon Buttons at the Bottom */}
      <div className="flex gap-4 mt-auto">
        <Button
          variant="ghost"
          className="p-2 border bg-black text-white rounded-xs w-[74px] h-[46px] hover:bg-black hover:text-white flex items-center justify-center"
        >
          <ArrowBigUp className="text-white transition-colors duration-200" size={30} />
        </Button>
        <Button variant="ghost" className="p-2 border bg-purple-700 text-white w-[74px] rounded-xs h-[46px] hover:bg-purple-700">
          <Bookmark size={30} />
        </Button>
        <Button variant="ghost" className="p-2 ml-[150px] rounded-xs bg-transparent w-[74px] h-[46px] bg-white border border-black">
          <Share size={30} />
        </Button>
      </div>


      {/* Comments and Likes Section */}
      <div className="flex flex-col w-full border-t border-gray-200 pt-4 mt-4">
        <p className="font-semibold text-gray-900 mb-2">{learningPathData.comments.length} comments</p>


        {/* Comment Input */}
        <div className="flex items-center border-t border-gray-200 pt-2">
          <div className="mr-2 rounded-full bg-white p-1 border border-gray-300">
            <Avatar className="rounded-full">
              <AvatarImage src="/path/to/current-user-avatar.jpg" alt="Current User" />
              <AvatarFallback>{getInitials(learningPathData.lastModifiedBy.name)}</AvatarFallback>
            </Avatar>
          </div>
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none focus:ring-0 text-gray-600"
          />

        </div>
      </div>
    </div>
  );
}
