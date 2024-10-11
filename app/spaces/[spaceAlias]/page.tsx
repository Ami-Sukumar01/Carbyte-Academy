import { SpaceContent } from "@/components/SpacePage/SpacePage"

export default function SpacePage({ params }: { params: { spaceAlias: string } }) {
  // const spaceAlias = decodeURIComponent(params.spaceAlias)
  return (
    <>
      <SpaceContent spaceAlias={params.spaceAlias} />
    </>
  )
}