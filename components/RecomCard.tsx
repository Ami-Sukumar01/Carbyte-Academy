import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RecomendationCardProps {
  title: string;
  description: string;
  spaceAlias: string;
}


const RecomendationCard: React.FC<RecomendationCardProps> = ({ title, description, spaceAlias }) => {
  console.log("Alias from recomended;", spaceAlias)
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Limit content to first 150 characters in collapsed mode
  const truncatedDescription = description?.length > 150 ? `${description?.slice(0, 150)}...` : description;

  return (
    <Link href={`/spaces/${spaceAlias}/r/${encodeURIComponent(title)}`}>
      <Card
        onClick={toggleExpand}
        className={`w-[265px] border border-black justify-between cursor-pointer pt-xl pr-2xl pb-3xl pl-2xl rounded-sm ${isExpanded ? 'h-auto' : 'h-[250px]'}`}
      >
        {/* Card Header - Title Section */}
        <CardTitle className="text-lg font-inter">{title}</CardTitle>

        {/* Line after title */}
        <hr className="my-2 border-t border-black" /> {/* Or custom styling */}

        <CardDescription className="text-sm mt-[20px]">
          {isExpanded ? description : truncatedDescription}
        </CardDescription>
      </Card>
    </Link>
  );
};

export default RecomendationCard;

