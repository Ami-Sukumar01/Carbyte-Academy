"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { FilterPopover } from "@/components/ResourcePage/PopOver";
import { Video, Presentation } from "lucide-react"; // Importing the Video and Presentation icons
import { Eye, ArrowUp } from "lucide-react"; // Icons for views and upvotes

// Type definition for the resources
type ExtendedResource = {
  id: string;
  title: string;
  views: number;
  upvotes: number;
  resourceTypeName: string;
};

// Async function for the Resources Page
export default async function ResourcesPage({ params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias);

  return <ResourceCard spaceAlias={spaceAlias} />;
}

// ResourceCard component
export function ResourceCard({ spaceAlias }: { spaceAlias: string }) {
  const [resources, setResources] = useState<ExtendedResource[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // State for selected filter

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${encodeURIComponent(spaceAlias)}/r`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data: ExtendedResource[] = await res.json();
        setResources(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching resources");
        setLoading(false);
      }
    };
    fetchData();
  }, [spaceAlias]);

  if (loading) {
    return <div>Loading resources...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Group resources by resourceTypeName
  const groupedResources = resources.reduce(
    (acc: Record<string, ExtendedResource[]>, resource) => {
      if (!acc[resource.resourceTypeName]) {
        acc[resource.resourceTypeName] = [];
      }
      acc[resource.resourceTypeName].push(resource);
      return acc;
    },
    {}
  );

  // Handle filter selection
  const handleFilterChange = (selected: string) => {
    setSelectedFilter(selected); // Set the selected filter
  };

  // Get filtered resources
  const filteredResources = selectedFilter
    ? { [selectedFilter]: groupedResources[selectedFilter] || [] }
    : groupedResources;

  // Function to render icons conditionally based on resourceTypeName
  const renderIcon = (resourceTypeName: string) => {
    switch (resourceTypeName.toLowerCase()) {
      case "video":
        return <Video className="mr-2" />; // Video icon from lucide
      case "presentation":
        return <Presentation className="mr-2" />; // Presentation icon from lucide
      default:
        return null; // No icon for other types (you can add more cases if needed)
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        {/* Filter Section */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Recently Added Switch (Black) */}
          <div className="flex items-center">
            <Switch id="recently-added" className="mr-2 bg-black" />
            <label htmlFor="recently-added" className="text-gray-700">
              Recently added
            </label>
          </div>

          {/* Most Upvoted Switch (Grey) */}
          <div className="flex items-center">
            <Switch id="most-upvoted" className="mr-2 bg-gray-400" />
            <label htmlFor="most-upvoted" className="text-gray-700">
              Most upvoted
            </label>
          </div>

          {/* Filter Button with Popover */}
          <FilterPopover
            filters={Object.keys(groupedResources)} // Pass resourceTypeName as filter options
            selectedFilter={selectedFilter} // Pass the currently selected filter
            onFilterChange={handleFilterChange} // Function to handle filter changes
          />
        </div>

        {/* <h1>
          Resource Page of The Space <strong>{spaceAlias}</strong>
        </h1> */}
        <div>
          {Object.keys(filteredResources).length > 0 ? (
            Object.keys(filteredResources).map((type) => (
              <div key={type} className="resource-group mb-10">
                <h2 className="flex items-center mb-4">
                  {renderIcon(type)} {/* Render the icon based on resourceTypeName */}
                  {type}
                </h2>
                {filteredResources[type].map((resource) => (
  <div key={resource.id} className="flex items-center h-[25px] border-l-[1px] border-black mb-2">
    {/* Resource Title with Icons to the right */}
    <div className="flex-1 flex items-center space-x-2">
      <p className="ml-2">{resource.title}</p>
      {/* Views and Upvotes aligned to the right of the title */}
      <div className="flex items-center space-x-2 text-gray-400">
        <div className="flex items-center space-x-1">
          <Eye size={16} className="text-black" />
          <span>{resource.views}</span>
        </div>
        <div className="flex items-center space-x-1">
          <ArrowUp size={16} className="text-black" />
          <span>{resource.upvotes}</span>
        </div>
      </div>
    </div>
  </div>
))}
              </div>
            ))
          ) : (
            <p>No resources available</p>
          )}
        </div>
      </div>
    </div>
  );
}
