import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  date: string;
  title: string;
  description: string;
  client: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ date, title, description, client }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Limit content to first 200 characters in collapsed mode
  const truncatedDescription = description.length > 200 ? `${description.slice(0, 150)}...` : description;

  return (
    <Card
      onClick={toggleExpand}
      className={`w-[300px] border-2 border-black transition-all flex flex-col justify-between cursor-pointer px-0 ${isExpanded ? 'h-auto' : 'h-[250px]'}`} // Removed padding from the card
    >
      {/* Card Header - Title Section */}
      <CardHeader className="p-0"> {/* Ensure no padding */}
        <CardTitle className="text-xs text-gray-500">{date}</CardTitle> {/* Smaller, subtle date */}
        <CardDescription className="text-lg bg-gray-200 w-full font-semibold p-2 hover:bg-purple-700 hover:text-white ">{title}</CardDescription> {/* Project name with emphasis, full width */}
      </CardHeader>

      {/* Card Content - Description Section */}
      <CardContent className="p-2 relative text-sm overflow-hidden transition-all">
        <p>{isExpanded ? description : truncatedDescription}</p> {/* Show truncated content or full content based on expansion */}
      </CardContent>

      {/* Card Footer - Client Section */}
      <CardFooter className="p-2 bg-black  h-[32px] pt-2 text-sm text-white">
        <p>Client: <span className="font-semibold">{client}</span></p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
