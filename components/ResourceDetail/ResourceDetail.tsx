"use client"
import { useState, useEffect } from "react";
import { Resource } from "@prisma/client";
import { Comment } from "@prisma/client";

interface TransformedComment extends Omit<Comment, '_count'> {
  commentUpvotes: number,
}

interface TransformedResource extends Omit<Resource, '_count' | 'commments'> {
  views: number,
  upvotes: number,
  comments: TransformedComment[]
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
      {/* Create a Contributor Component that takes "lastModifiedById" and returns the contributor name */}
      {/* Create a Resource Type component that takes resourceTypeId as prop */}
      {/* Create a Resource Level component that takes resourceTypeId as prop */}

    </>
  )
}