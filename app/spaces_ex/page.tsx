import SpaceNavigation from "./SpaceNavigation";

export default async function SpacesPage() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4">
          <SpaceNavigation />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8">
          {/* Header */}


          {/* Page Content */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Spaces</h1>
            <p className="text-gray-700 mb-2">Pick a space to start!</p>
            <p>Only E2E has resources!</p>

          </div>
        </div>
      </div>

    </>


  )
}