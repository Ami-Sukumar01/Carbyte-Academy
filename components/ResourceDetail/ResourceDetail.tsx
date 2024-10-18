"use client"
import { useState, useEffect } from "react";
import { Resource } from "@prisma/client";
import { Comment } from "@prisma/client";

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

//Type for Resource
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
}


export function ResourceDetail({ spaceAlias, resourceTitle }: { spaceAlias: string, resourceTitle: string }) {
  const [resourceData, setResourceData] = useState<TransformedResource | null>(null)
  const [loading, setLoading] = useState(true)

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
        console.log(data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error)
      }
    };
    fetchData();
  }, [spaceAlias, resourceTitle]);

  if (loading) {
    return <p>Loading...</p>
  }
  if (!resourceData) {
    return <p>No resource found.</p>
  }

  return (
    <>

      <p>Resource Details:</p>
      <p>{resourceData.title}</p>
      <p>{resourceData.description}</p>
      {/* Check postman to see the request structure: http://localhost:3000/api/spaces/E2E/r/Security%20in%20End2End%20Solutions */}
      {/* You have to map over comment ;) */}

    </>
  )
}