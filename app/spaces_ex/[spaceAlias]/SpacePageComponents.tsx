"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"


export default function SpaceHeader({ spaceAlias }: { spaceAlias: string }) {
  const [spaceData, setSpaceData] = useState<{ name: string; description: string }>() //Type should come from Prisma?
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}`);
        const data = await response.json();
        setSpaceData(data);
      } catch (error) {
        console.error("Error fetching space data:", error);
      }
    };

    fetchData();
  }, [spaceAlias]);
  console.log(spaceData)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{spaceData?.name}</h1>

      <p className="text-gray-700">{spaceData?.description}</p>

      <Link href={`/spaces_ex/${encodeURIComponent(spaceAlias)}/r`}>
        <div className="m-4  p-10 border hover:bg-green-100">
          Resources
        </div>
      </Link>
      <Link href={`/spaces_ex/${encodeURIComponent(spaceAlias)}/lp`}>
        <div className="m-4  p-10 border hover:bg-green-100">
          Learning Paths
        </div>
      </Link>
      <li>End point for this is not ready yet. Check Space Resources</li>
    </div>
  )
}