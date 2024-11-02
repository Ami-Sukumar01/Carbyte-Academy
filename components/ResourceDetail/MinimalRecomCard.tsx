import React from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

interface RecomendationCardProps {
  title: string;
  description: string;
  link: string;
}

const RecomendationCard: React.FC<RecomendationCardProps> = ({ title, description, link }) => {
  // Limit content to first 150 characters
  const truncatedDescription = description?.length > 150 ? `${description.slice(0, 150)}...` : description;

  return (
    <Link href={link}>
      <Card className="w-[265px] h-[265px] border border-black cursor-pointer pt-sm pr-2xl pb-3xl pl-2xl rounded-sm shadow-md">
        {/* Card Header - Title Section */}
        <CardTitle className="text-lg font-inter font-semibold mb-2">{title}</CardTitle>

        {/* Line after title */}
        <hr className="my-2 border-t border-black" />

        {/* Card Description */}
        <CardDescription className="text-sm mt-[20px] text-gray-600">
          {truncatedDescription}
        </CardDescription>
      </Card>
    </Link>
  );
};

export default RecomendationCard;
