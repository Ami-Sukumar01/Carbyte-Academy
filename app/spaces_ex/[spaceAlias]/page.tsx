import SpaceHeader from "./SpacePageComponents"
import SpaceNavigation from "../SpaceNavigation"

export default async function SpacePage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <SpaceNavigation />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">

        {/* Page Content */}
        <div className="bg-white shadow-md rounded-lg p-6">

          <div className="mb-4">
            <SpaceHeader spaceAlias={spaceAlias} />
          </div>
        </div>
      </div>
    </div>
  )
}


// "use client"
// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"


// //TO DO: DEFINE a Type once EndPoint Ready

// export default function SpacePage({ params }: { params: { spaceAlias: string } }) {
//   const router = useRouter()
//   const spaceAlias = decodeURIComponent(params.spaceAlias)



//   const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}`) // Not ready to use

//   const handleRedirect = (spaceAlias: string) => {
//     router.push(`/spaces_ex/${encodeURIComponent(spaceAlias)}/r`)
//   }




//   return (
//     <div>
//       <h1>Space Page</h1>
//       <p>Alias: {spaceAlias}</p>
//       <button
//         className="border p-4"
//         onClick={() => handleRedirect(spaceAlias)}
//       >Resources</button>
//       <li>End point for this is not ready yet. Check Space Resources</li>
//     </div>
//   )
// }