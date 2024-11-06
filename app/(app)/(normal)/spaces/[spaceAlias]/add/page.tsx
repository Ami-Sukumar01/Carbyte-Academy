import { fetchResourceTypes } from "@/lib/data";
import AddResourceClient from "@/components/ResourcePage/AddResourceClient";

// This is a server-side component
export default async function AddResourcePage({ params }: { params: { spaceAlias: string } }) {
const resourceTypes = await fetchResourceTypes(); // Fetch resource types on the server-side
  
  return (
    <div className="w-[867px] h-[2245px] border border-black mx-auto p-6 md:px-14">
      <h1 className="text-sm font-inter text-grey-900 mb-[40px]">
        Spaces / {params.spaceAlias} / Add resource
      </h1>
      {/* Pass the fetched resource types as a prop to the client-side component */}
      <AddResourceClient resourceTypes={resourceTypes} spaceAlias={params.spaceAlias} />
    </div>
  );
}
