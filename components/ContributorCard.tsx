"use client";

import React from "react";
import { LibraryBig, Route } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// AsideContent Component
// TO DO: ADD TYPE TO POST
export default function ContributorCard({ post }: { post: any }) {

  // Check if post or post.contributors is undefined or not an array
  if (!post || !Array.isArray(post.contributors)) {
    return <p>No contributors available</p>; // Fallback message when there's no data
  }

  // Helper function to get contributor initials
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastInitial = nameParts[1]?.charAt(0).toUpperCase() || "";
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <aside className="w-[358px] h-[326] flex flex-col space-y-4">
      <div className="w-[358px] h-auto rounded-sm border border-black bg-blue-300">
        <div className="w-full h-[46px] rounded-t-xs bg-blue-900">
          <h2 className="text-white text-left ml-[10px] leading-[46px]">
            Top contributors
          </h2>
        </div>
        <div className="p-4 space-y-3">
          {post.contributors.slice(0, 3).map((contributor: any) => (
            <div
              key={contributor.contributorId}
              className="flex items-center p-2 rounded-md"
            >
              {/* Shadcn Avatar */}
              <Avatar className="bg-white w-[37.5px] h-[37.5px]">
                {contributor.avatarUrl ? (
                  <AvatarImage src={contributor.avatarUrl} alt={contributor.name} />
                ) : (
                  <AvatarFallback className="bg-white text-black text-md">
                    {getInitials(contributor.name)}
                  </AvatarFallback>
                )}
              </Avatar>

              {/* Name and Icons/Stats with underline */}
              <div className="flex-1 ml-3">
                <div className="w-[260.5px] border-b border-black pb-1 flex justify-between items-center mx-auto">
                  {/* Contributor Name */}
                  <p className="font-medium text-black text-md font-inter">
                    {contributor.name}
                  </p>

                  {/* Icons and Stats */}
                  <div className="flex items-center space-x-4 text-black text-sm">
                    <div className="flex items-center space-x-1">
                      <LibraryBig size={16} /> <span>{contributor.resourcesTotal}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Route size={16} /> <span>{contributor.learningPathsTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
