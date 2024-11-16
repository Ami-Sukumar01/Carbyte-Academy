"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { FilterPopover } from "@/components/ResourcePage/PopOver";
import { Video, ChartLine, Files, Podcast, ChartPie, SquareLibrary, Newspaper, BookOpen, BrainCircuit, Wrench } from "lucide-react"; // Importing the Video and Presentation icons
import { Eye, ArrowUp, Edit, Trash, Bookmark, SquareCheckBig } from "lucide-react"; // Icons for views and upvotes
import Link from "next/link";
// Type definition for the resources
type ExtendedResource = {
  id: string;
  title: string;
  views: number;
  upvotes: number;
  resourceTypeName: string;
  createdBy: string;
};

// ResourceCard component
export function ResourceCard({ spaceAlias }: { spaceAlias: string }) {
  const [resources, setResources] = useState<ExtendedResource[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // State for selected filter
  const currentUserId = "currentUserId";
  const [hoveredResource, setHoveredResource] = useState<string | null>(null); // State for hovered resource
  const [bookmarkedResources, setBookmarkedResources] = useState<string[]>([]); // State to track bookmarked resources
  const [popoverMessage, setPopoverMessage] = useState<string | null>(null); // State for popover message


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}/r`
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

  // Handle bookmark toggle
  const handleBookmarkToggle = (resourceId: string) => {
    const isBookmarked = bookmarkedResources.includes(resourceId);

    if (isBookmarked) {
      setBookmarkedResources(bookmarkedResources.filter((id) => id !== resourceId)); // Remove from bookmarked
      setPopoverMessage("Unbookmarked"); // Set popover message for unbookmarked
    } else {
      setBookmarkedResources([...bookmarkedResources, resourceId]); // Add to bookmarked
      setPopoverMessage("Bookmarked"); // Set popover message for bookmarked
    }

    // Show the popover message for a short duration
    setTimeout(() => {
      setPopoverMessage(null);
    }, 2000); 
  };

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
        return <Video className="mr-2" />; 
      case "presentation":
        return <ChartPie className="mr-2" />; 
      case "article":
        return <Newspaper className="mr-2" />; 
      case "book":
        return <BookOpen className="mr-2" />; 
      case "online course":
        return <ChartLine className="mr-2" />; 
      case "document":
        return <Files className="mr-2" />; 
      case "podcast":
        return <Podcast className="mr-2" />; 
      case "interactive content":
        return <BrainCircuit className="mr-2" />; 
      case "practical project":
        return <Wrench className="mr-2" />;   
      case "others":
        return <SquareLibrary className="mr-2" />; 
      default:
        return null; 
    }
  };

  // Function to render action icons (edit, delete, save) only on hover
  const renderActionIcons = (resourceId: string, createdBy: string) => {
    const isBookmarked = bookmarkedResources.includes(resourceId); 
    if (hoveredResource === resourceId) {
      return (
        <div className="flex items-center space-x-2">
          <Edit size={16} className="text-black" />
          <Bookmark
            size={16}
            className={isBookmarked ? "text-purple-600" : "text-black"} 
            onClick={() => handleBookmarkToggle(resourceId)} 
          />
          <Trash size={16} className="text-black" />
        </div>
      );
    }
    return null; 
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        {/* Filter Section */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Recently Added Switch */}
          <div className="flex items-center">
            <Switch id="recently-added" className="mr-2 bg-black" />
            <label htmlFor="recently-added" className="text-gray-700">
              Recently added
            </label>
          </div>

          {/* Most Upvoted Switch */}
          <div className="flex items-center">
            <Switch id="most-upvoted" className="mr-2 bg-gray-400" />
            <label htmlFor="most-upvoted" className="text-gray-700">
              Most upvoted
            </label>
          </div>

          {/* Filter Button with Popover */}
          <FilterPopover
            filters={Object.keys(groupedResources)} 
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div>
          {Object.keys(filteredResources).length > 0 ? (
            Object.keys(filteredResources).map((type) => (
              <div key={type} className="resource-group mb-10 ">
                <strong className="flex items-center mb-4 text-lg mt-[40px]">
                  {renderIcon(type)} {/* Render the icon based on resourceTypeName */}
                  {type}
                </strong>
                {filteredResources[type].map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center h-[25px] border-l-[1px] border-black mb-2"
                    onMouseEnter={() => setHoveredResource(resource.id)} 
                    onMouseLeave={() => setHoveredResource(null)} 
                  >
                    {/* Resource Title with Icons to the right */}
                    <div className="flex-1 flex space-x-2">
                      <Link
                        key={resource.id}
                        href={`/spaces/${spaceAlias}/r/${encodeURIComponent(resource.title)}`}>
                        <p className="ml-6">{resource.title}</p>
                      </Link>
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
                    {/* Action icons (Edit/Delete or Save) aligned to the right */}
                    {renderActionIcons(resource.id, resource.createdBy)}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No resources available</p>
          )}
        </div>
        {/* Popover message at the bottom of the screen */}
        {popoverMessage && (
          <div
            className={`fixed bottom-4 right-4 transform -translate-x-1/2 bg-success-100 border border-success-700 text-green-700 py-3 px-4 rounded-md shadow-lg flex items-center space-x-2 ${popoverMessage === "Bookmarked" ? "w-[312px] h-[64px]" : "w-[315px] h-[44px]"
              }`}
          >
            {/* Checkmark Icon */}
            <SquareCheckBig className="h-6 w-6 text-success-700" />

            {/* Dynamic Text Content */}
            <div>
              {popoverMessage === "Bookmarked" ? (
                <>
                  <p className="font-semibold text-black text-sm">Resource saved</p>
                  <p className="text-sm text-gray-500">You can see it in your saved collection</p>
                </>
              ) : (
                <p className="font-inter text-black text-sm">Resource removed from the collection</p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
