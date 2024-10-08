"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


//TO DO: DEFINE a Type once EndPoint Ready

export default function SpacePage({ params }: { params: { spaceAlias: string } }) {
  const router = useRouter()
  const spaceAlias = decodeURIComponent(params.spaceAlias)



  const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}`) // Not ready to use

  const handleRedirect = (spaceAlias: string) => {
    router.push(`/spaces_ex/${encodeURIComponent(spaceAlias)}/r`)
  }




  return (
    <div>
      <h1>Space Page</h1>
      <p>Alias: {spaceAlias}</p>
      <button
        className="border p-4"
        onClick={() => handleRedirect(spaceAlias)}
      >Resources</button>
      <li>End point for this is not ready yet. Check Space Resources</li>
    </div>
  )
}