// import { useParams } from "next/navigation";

export default async function SpacePage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}`)



  return (
    <div>
      <h1>Space Page</h1>
      <p>Alias: {spaceAlias}</p>
    </div>
  )
}