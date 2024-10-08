"use client"
import { useEffect, useState } from "react";
import { Space } from '@prisma/client'
import { useRouter } from "next/navigation";

// interface SpaceButton {
//}

type SpaceAlias = Pick<Space, 'id' | 'alias'>

export default function SpacePage() {

  //I fetch id  and alias for the space buttons, it might be good idea to make a separate component for the space buttons
  const [spaces, setSpaces] = useState<SpaceAlias[]>([]);
  const router = useRouter()


  useEffect(() => {
    const fecthSpaceAlias = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces`)
        const data: SpaceAlias[] = await res.json()
        setSpaces(data)
      } catch (error) {
        console.error('Error fetching spaces:', error)
      }
    }
    fecthSpaceAlias()
  }, [])
  const handleRedirect = (alias: string) => {
    //Redirect to dynamic route in space_ex
    router.push(`spaces_ex/${encodeURIComponent(alias)}`)

    //For Ami: here you have to use the following redirect:
    // router.push(`/spaces/${alias}`)


  }

  return (
    <div>
      <h1>Spaces</h1>
      <div>
        <p>Nav Bar</p>
        {spaces.map((space) => (
          <button
            key={space.id}
            className="border p-4"
            onClick={() => handleRedirect(space.alias)}
          >{space.alias}</button>
        ))}
      </div>
    </div>
  )
}