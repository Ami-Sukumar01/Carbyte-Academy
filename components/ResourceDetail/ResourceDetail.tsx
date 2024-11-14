"use client";
import { useState, useEffect } from "react";
import { Resource } from "@prisma/client";
import { Comment } from "@prisma/client";
import { Eye, ArrowBigUp, Bookmark, Pencil, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import RecomendationCard from "@/components/ResourceDetail/MinimalRecomCard";
import ButtonWithPopup from "@/components/ResourceDetail/ButtonWithPopup";
import Image from "next/image";

// Type for Resource Comment
interface TransformedComment extends Pick<Comment, 'id' | 'content' | 'createdAt'> {
  commentUpvotes: number,
  user: {
    name: string,
    profile: {
      avatarUrl?: string
    }
  }
}

// Type for Recommended Resources
interface Recommended {
  id: string,
  title: string,
  description: string
}

// Type for Resource
interface TransformedResource extends Pick<Resource, 'id' | 'title' | 'description' | 'url' | 'isOutdated'> {
  audience: {
    name: string
  },
  lastModifiedBy: {
    name: string
  },
  resourceType: {
    name: string
  },
  views: number,
  upvotes: number,
  comments: TransformedComment[],
  recommended: Recommended[]
}

export function ResourceDetail({ spaceAlias, resourceTitle }: { spaceAlias: string, resourceTitle: string }) {
  const [resourceData, setResourceData] = useState<TransformedResource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}/r/${resourceTitle}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch resource details");
        }
        const data: TransformedResource = await res.json();
        setResourceData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, [spaceAlias, resourceTitle]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!resourceData) {
    return <p>No resource found.</p>;
  }

  // Utility function to get initials from a name
  const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  const recentCommenters = resourceData.comments.slice(-5).reverse();
  const lastCommenterName = recentCommenters.length > 0 ? recentCommenters[0].user.name : "Name Surname";

  return (
    <div className="flex">
      {/* Left Side */}
      <div className="w-[784px]">
        {/* Main Resource Content */}
        <div className="w-[785px] ml-0 p-6 bg-white shadow-md rounded-lg relative">
          {/* Title */}
          <h2 className="text-gray-800 font-inter font-normal text-2xl leading-[43.57px]">
            {resourceData.title}
          </h2>

          {/* Buttons Section */}
          <div className="absolute right-0 top-0 flex flex-col space-y-2">
            <Button className="px-4 w-[125px] h-[44px] py-2 bg-grey-500 text-grey-900 mt-[20px] rounded-xs hover:text-white">
              {resourceData.resourceType.name}
            </Button>
            <Button className="px-4 w-[125px] h-[44px] py-2 bg-grey-500 text-grey-900 mr-[10px] rounded-xs hover:text-white">
              {resourceData.audience.name}
            </Button>
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
            <div className="flex items-center text-lg space-x-1">
              <Eye size={24} />
              <span>{resourceData.views}</span>
            </div>
            <div className="flex items-center text-lg space-x-1">
              <ArrowBigUp size={24} />
              <span>{resourceData.upvotes}</span>
            </div>
            <span>{resourceData.lastModifiedBy.name}</span>
          </div>

          {/* Description and URL */}
          <p className="text-gray-700 mt-[35px] mb-4">{resourceData.description}</p>
          <a
            href={resourceData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 w-[550px] hover:underline mb-6 inline-block"
          >
            {resourceData.url}
          </a>

          {/* Buttons with Popup */}
          <ButtonWithPopup className="mb-6" />
        </div>

        {/* Comments Section */}
        <div className="w-[784px] ml-0 p-6 bg-white shadow-md rounded-lg mt-4">
          <div className="flex items-center space-x-4 mb-6">
            <p className="text-lg font-medium">{resourceData.comments.length} comments</p>
            <label className="flex items-center space-x-3">
              <Switch />
              <span>Most upvoted</span>
            </label>
          </div>

          {/* Recent Commenters */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex -space-x-3">
              {recentCommenters.map((comment, index) => (
                <div key={index} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                  {comment.user.profile.avatarUrl ? (
                    <Image
                      src={comment.user.profile.avatarUrl}
                      alt={comment.user.name}
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    <span>{getInitials(comment.user.name)}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-gray-500">{lastCommenterName} and others commented</p>
          </div>

          {/* Add Comment */}
          <div className="flex items-center mb-9 mt-9">
            <div className="w-10 mr-6 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
              <span>{getInitials("Current User")}</span>
            </div>
            <input type="text" placeholder="Add a comment..." className="border-b border-black w-full py-2 px-4 focus:outline-none focus:border-gray-500" />
          </div>

          {/* Render Comments */}
          <div className="space-y-4">
            {resourceData.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4 items-start mb-4">
                <div className="w-10 mr-2 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                  {comment.user.profile.avatarUrl ? (
                    <Image
                      src={comment.user.profile.avatarUrl}
                      alt={comment.user.name}
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    <span>{getInitials(comment.user.name)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{comment.user.name}</p>
                  <p className="text-gray-600">{comment.content}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                    <button className="flex items-center space-x-1">
                      <ArrowBigUp size={16} />
                      <span>Upvote</span>
                    </button>
                    <span>{comment.commentUpvotes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Resources */}
      <div className="flex flex-col items-center ml-[30px] justify-center min-h-screen">
        <h2 className="text-[25px] font-semibold mb-4 text-center">Recommended</h2>
        <div className="space-y-4 flex flex-col items-center">
          {resourceData.recommended?.slice(0, 2).length ? (
            resourceData.recommended.slice(0, 2).map((recommended) => (
              <RecomendationCard
                key={recommended.id}
                title={recommended.title}
                description={recommended.description}
                link={`/spaces/${spaceAlias}/r/${encodeURIComponent(recommended.title)}`}
              />
            ))
          ) : (
            <p className="text-gray-500">No recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
