import { ResourceDetail } from "@/components/ResourceDetail/ResourceDetail"


export default async function ResourcePage({ params }: { params: { spaceAlias: string, resourceTitle: string } }) {

  return (
    <>
      {/* <p className="text-2xl hover:bg-green-400" >Specific Resource Page</p> */}
      <ResourceDetail spaceAlias={params.spaceAlias} resourceTitle={params.resourceTitle} />
    </>
  )
}