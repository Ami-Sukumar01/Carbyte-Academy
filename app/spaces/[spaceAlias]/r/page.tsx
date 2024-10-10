import { ResourceCard } from "@/components/ResourcePage/ResourceCard"

export default async function ResourcesPage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  return (
    <>
      <div>Resources of {spaceAlias}</div>
      <div>Resources Card</div>
      <ResourceCard spaceAlias={spaceAlias} />
    </>
  )
}