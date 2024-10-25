import { notFound } from "next/navigation"
import AddResourceForm from "@/components/Resources/AddResource/AddResourceForm"
import { fetchSpaceId } from "@/lib/data"

export default async function AddResource({ params }: { params: { spaceAlias: string } }) {
  const spaceId = await fetchSpaceId(params.spaceAlias) //Get spaceId
  if (!spaceId) {
    notFound() //404 if no spaceId found
  }

  //Get Us
  const userId = "55fc2914-20e2-41a9-9478-222896d2365a" //TODO: User LOGIN -> USER ID in popscle Fetch from Popscle Users
  return (
    <>
      <p>Add a resource</p>
      <AddResourceForm spaceAlias={params.spaceAlias} spaceId={spaceId} userId={userId} />
    </>
  )
}