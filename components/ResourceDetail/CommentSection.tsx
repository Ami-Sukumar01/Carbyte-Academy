"use client";
import { useState, useEffect } from "react";
import { Resource } from "@prisma/client";
import { Comment } from "@prisma/client";
import { ArrowBigUp } from "lucide-react";
import { Button } from "@/components/ui/button";
// import {RightSidebar} from "@/components/"

// Type for Resource Comment
interface TransformedComment extends Pick<Comment, 'id' | 'content' | 'createdAt'> {
  commentUpvotes: number,
  user: {
    name: string,
    profile: {
      avatarUrl: string
    }
  }
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
  comments: TransformedComment[]
}

export function ResourceDetail({ spaceAlias, resourceTitle }: { spaceAlias: string, resourceTitle: string }) {
  const [resourceData, setResourceData] = useState<TransformedResource | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMostUpvoted, setIsMostUpvoted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}/r/${encodeURIComponent(resourceTitle)}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch resource details");
        }
        const data: TransformedResource = await res.json();
        setResourceData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resource data", error);
        setLoading(false);
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

  const recentCommenters = resourceData.comments.slice(-5).reverse();
  const lastCommenterName = recentCommenters.length > 0 ? recentCommenters[0].user.name : "Name Surname";

  return (
    <div className="w-[784px] ml-0 p-6 bg-white shadow-md rounded-lg">
      {/* Comments Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-medium">{resourceData.comments.length} comments</p>
        <label className="flex items-center space-x-2">
          <span>Most upvoted</span>
          <input 
            type="checkbox" 
            className="toggle" 
            checked={isMostUpvoted} 
            onChange={() => setIsMostUpvoted(!isMostUpvoted)} 
          />
        </label>
      </div>

      {/* Display Recent Commenters */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex -space-x-3">
          {recentCommenters.map((comment, index) => (
            <img
              key={index}
              src={comment.user.profile.avatarUrl || "https://i.pravatar.cc/150"}
              alt={comment.user.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <p className="text-gray-500">{lastCommenterName} and others commented</p>
      </div>

      {/* Add a comment section */}
      <div className="flex items-center mb-6">
        <img
          src="https://i.pravatar.cc/150?img=3" // Placeholder for user avatar
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-b border-gray-300 w-full py-2 px-4 focus:outline-none focus:border-gray-500"
        />
        </div>


      {/* Render the comments list */}
      <div className="space-y-4">
        {resourceData.comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4 items-start mb-4">
            {/* Avatar */}
            <img
              src={comment.user.profile.avatarUrl || "https://i.pravatar.cc/150"}
              alt={comment.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              {/* User name */}
              <p className="font-medium">{comment.user.name}</p>
              {/* Comment content */}
              <p className="text-gray-600">{comment.content}</p>
              {/* Timestamp and Upvote */}
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
  );
}
