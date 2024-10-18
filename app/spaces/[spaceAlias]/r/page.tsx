import { ResourceCard } from "@/components/ResourcePage/ResourceCard";
import { Switch } from "@/components/ui/switch";
import { FilterPopover } from "@/components/ResourcePage/PopOver"; // Import the popover
import Link from "next/link";


export default async function ResourcesPage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="bg-white p-6 rounded border border-black w-[852px] h-[156px] shadow mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">{spaceAlias}</h1>
            <p className="text-gray-600 mt-2">
              The space resources aim to cover the following topics: ...
            </p>
          </div>
          <Link href={`/spaces/${spaceAlias}/add`}>
            <button className="bg-yellow-500 w-[218px] h-[46px] border border-black text-black py-2 px-4 rounded hover:bg-yellow-500 transition flex justify-center mb-[30px] items-center">
              <span className="text-[1.5rem] mr-1 mb-[4px]">+</span> Add resource
            </button>
          </Link>

        </div>


        {/* Resource Card */}
        <ResourceCard spaceAlias={spaceAlias} />
      </div>
    </>
  );
}

