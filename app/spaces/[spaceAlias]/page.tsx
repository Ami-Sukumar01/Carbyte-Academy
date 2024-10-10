import Link from "next/link"

export default function SpacePage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  return (
    <>
      <div>{spaceAlias}</div>
      <div>First Section: Description, Resources Button, Learning Path Button </div>
      <p className="text-red-950 text-xl">Only E2E Space has content!</p>
      <Link href={`/spaces/${encodeURIComponent(spaceAlias)}/r`}>
        <div className="p-4 border hover:bg-blue-200">Resources _Number_ </div>
      </Link>
      <Link href={`/spaces/${encodeURIComponent(spaceAlias)}/lp`}>
        <div className="p-4 border hover:bg-blue-200">Learning Paths _Number_ </div>
      </Link>
      <div>Projects</div>
      <div>Recommendations</div>
    </>
  )
}