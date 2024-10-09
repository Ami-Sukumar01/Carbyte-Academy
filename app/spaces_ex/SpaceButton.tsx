import { fetchSpaceAliases } from "@/lib/data";
import Link from 'next/link'


export default async function SpaceButton() {
  const spaces = await fetchSpaceAliases()



  console.log(spaces)
  return (
    spaces.map(space =>
      <Link key={space.alias} href={`/spaces_ex/${space.alias}`}>
        <div className="border p-4 hover:bg-lime-200 ">
          {space.alias}
        </div>
      </Link>
    )
  )
}