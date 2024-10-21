"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  BookOpen,
  Video,
  Newspaper,
  SquareLibrary,
  Podcast,
  ChartPie,
  MousePointerClick,
  ChartLine,
  Files,
  Wrench
} from 'lucide-react'; // Import icons from Lucide

interface ResourceTypeCardProps {
  name: string;
  description: string | null;
}

// Mapping resource names to icons
const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "book":
      return <BookOpen size={32} className="text-black" />;
    case "video":
      return <Video size={32} className="text-black" />;
    case "article":
      return <Newspaper size={32} className="text-black" />;
    case "interactive content":
      return <MousePointerClick size={32} className="text-black" />;
    case "practical project":
      return <Wrench size={32} className="text-black" />;
    case "podcast":
      return <Podcast size={32} className="text-black" />;
    case "online course":
      return <ChartLine size={32} className="text-black" />;
    case "presentation":
      return <ChartPie size={32} className="text-black" />;
    case "document":
      return <Files size={32} className="text-black" />;
    default:
      return <SquareLibrary size={32} className="text-black" />;
  }
};

// Card component to display each resource type using shadcn's Card component
const ResourceTypeCard = ({ name, description }: ResourceTypeCardProps) => (
  <Card className="w-[330px] rounded-sm h-[130px] flex items-center border border-black px-4">
    {/* Icon on the left */}
    <div className="mr-4">
      {getIcon(name)}
    </div>
    {/* Text content (name and description) on the right */}
    <div className="flex flex-col justify-center text-left">
      <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      <CardDescription className="text-gray-500 mt-1">
        {description ? description : "No description available"}
      </CardDescription>
    </div>
  </Card>
);

interface ResourceTypeClientProps {
  resourceTypes: Array<{ id: string; name: string; description: string | null }>; // Handle possible null values
}

// Client-side component
const ResourceTypeClient = ({ resourceTypes }: ResourceTypeClientProps) => {
  if (!resourceTypes || resourceTypes.length === 0) {
    return <p>No resource types available</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <h2 className=" font-bold mb-1 text-xl">Content Types</h2>
      <p className="text-grey-900 mb-8 text-md">Select a type of content you’re submitting</p>

      {/* Grid with 2 columns and reduced gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {resourceTypes.map((type) => (
          <ResourceTypeCard key={type.id} name={type.name} description={type.description} />
        ))}
      </div>
    </div>
  );
};

export default ResourceTypeClient;
