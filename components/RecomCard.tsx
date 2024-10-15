import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RecomendationCardProps {
  title: string;
  description: string;
  spaceAlias: string;
}

const RecomendationCard: React.FC<RecomendationCardProps> = ({ title, description, spaceAlias }) => {
  console.log("Alias from recommended:", spaceAlias);

  // Limit content to first 150 characters
  const truncatedDescription = description?.length > 150 ? `${description?.slice(0, 150)}...` : description;

  return (
    <Link href={`/spaces/${spaceAlias}/r/${encodeURIComponent(title)}`}>
      <Card
        className="w-[265px] h-[265px] border border-black cursor-pointer pt-sm pr-2xl pb-3xl pl-2xl rounded-sm " // Add horizontal margin
      >
        {/* Card Header - Title Section */}
        <CardTitle className="text-lg font-inter">{title}</CardTitle>

        {/* Line after title */}
        <hr className="my-2 border-t border-black" />

        <CardDescription className="text-sm mt-[20px]">
          {truncatedDescription}
        </CardDescription>
      </Card>
    </Link>
  );
};

export default RecomendationCard;
