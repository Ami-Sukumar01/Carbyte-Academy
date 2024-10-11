"use client"

import { Resource } from '@prisma/client'
import { useState, useEffect } from 'react';

type ExtendedResource = Resource & {
  views: number;
  upvotes: number
}
export function ResourceCard({ spaceAlias }: { spaceAlias: string }) {
  const [resources, setResources] = useState<ExtendedResource[]>([])

  //Please check how to use useEffect properly i just made this for demostration
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${encodeURIComponent(spaceAlias)}/r`);
        if (!res.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data: ExtendedResource[] = await res.json()
        setResources(data)
      } catch (error) {
        console.log("Error fetching space resources", error)
      }
    }
    fetchData()
  }, [spaceAlias])
  console.log(resources) // Check the browser console. For the moment only E2E has resources

  return (
    <div>
      <h1>Resource Page of The Space <strong>
        {spaceAlias}
      </strong>
      </h1>
      <div>{resources.map(resource => (
        <div key={resource.id} className='p-4 border'>
          <p>{resource.title}</p>
          <p> Upvotres:{resource.upvotes}</p>
          <p>Views:{resource.views}</p>
        </div>
      ))}</div>
    </div>
  )
}