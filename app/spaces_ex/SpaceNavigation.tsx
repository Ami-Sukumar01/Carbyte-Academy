import { fetchSpaceAliases } from "@/lib/data";
import Link from 'next/link'


export default async function SpaceNavigation() {
  const spaces = await fetchSpaceAliases()
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