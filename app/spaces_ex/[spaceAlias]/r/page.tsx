import SpaceNavigation from "../../SpaceNavigation"
import { ResourceCard } from "./ResourcePageComponents"

export default async function SpacePage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <SpaceNavigation />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">

        {/* Page Content */}
        <div className="bg-white shadow-md rounded-lg p-6">

          <div className="mb-4">
            <ResourceCard spaceAlias={spaceAlias} />
          </div>
        </div>
      </div>
    </div>
  )
}
