import React from "react";
import { fetchAudiences } from "@/lib/data";
import FilterControls from "@/components/LearningPath/Overview/FilterControls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Eye, ArrowBigUp, Bookmark } from "lucide-react";
import Link from "next/link";
import { LearningPath } from "@prisma/client";

interface LearningPathWithCounts extends LearningPath {
  _count: {
    views: number;
    upvotes: number;
  }
}

interface Audience {
  id: string;
  name: string;
  description: string;
}

async function fetchAudienceData(): Promise<Audience[]> {
  const res = await fetchAudiences();
  if (!res.ok) {
    throw new Error("Failed to fetch audiences");
  }
  return res.json();
}

async function fetchLearningPaths(spaceAlias: string): Promise<LearningPathWithCounts[]> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/spaces/${spaceAlias}/lp`, {
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch learning paths");
  }
  return res.json();
}

export default async function LearningPathSection({ spaceAlias }: { spaceAlias: string }) {
  try {
    const learningPaths = await fetchLearningPaths(spaceAlias);
    const audiences = await fetchAudienceData();
    const audienceNames = audiences.map((audience) => audience.name);

    const sortedLearningPaths = learningPaths.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const thisWeekPaths = sortedLearningPaths.slice(0, 4); // First 4 latest paths for "This Week"

    // Determine the "Last Week" paths
    let lastWeekPaths = sortedLearningPaths.slice(4, 6); // Next 2 for "Last Week"
    
    if (lastWeekPaths.length === 0) {
      // Check for "Last Month" if "Last Week" is empty
      const lastMonthPaths = sortedLearningPaths.slice(6, 8); // Next 2 for "Last Month"
      lastWeekPaths = lastMonthPaths.length > 0 ? lastMonthPaths : [];

      // If "Last Month" is also empty, display the oldest available paths
      if (lastWeekPaths.length === 0) {
        lastWeekPaths = sortedLearningPaths.slice(-2); // Fetch the oldest paths if no recent data
      }
    }

    const renderLearningPathCard = (lp: LearningPathWithCounts) => (
      <Link key={lp.id} href={`/spaces/${spaceAlias}/lp/${encodeURIComponent(lp.title)}`}>
        <Card className="hover:bg-yellow-50 flex rounded-xs w-[400px] h-[120px]">
          <div className="bg-purple-200 p-2 flex items-center justify-center w-[50px] h-full">
            <span className="text-sm font-medium rounded-xs transform -rotate-90 whitespace-nowrap">{spaceAlias}</span>
          </div>
          <CardContent className="p-4 flex-grow">
            <CardTitle className="flex flex-wrap items-center text-sm">
              <span className="underline mr-1">{lp.title}</span>
              <Bookmark className="w-4 h-4 ml-auto" />
            </CardTitle>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2 overflow-hidden">
              {lp.description}
            </p>
            <div className="flex items-center space-x-4 mt-2 text-yellow-900 text-sm pl-1">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{lp._count.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ArrowBigUp className="w-4 h-4" />
                <span>{lp._count.upvotes}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );

    return (
      <div className="p-6">
        <div className="border rounded-sm border-black w-[852px] h-[156px] p-4 flex justify-between items-center mb-6">
          <div className="w-[465px] h-[83px]">
            <h1 className="text-2xl font-semibold">Learning paths</h1>
            <p className="text-gray-600">
              A learning path is a guided way to study a topic section by section, created by the experts.
            </p>
          </div>
          <button className="bg-purple-300 w-[255px] h-[46px] rounded-xs text-black border border-black font-semibold py-2 px-4 hover:bg-purple-300">
            + Add learning path
          </button>
        </div>

        {/* Pass audienceNames as levels prop to FilterControls */}
        <FilterControls levels={audienceNames} />

        <h2 className="text-lg font-semibold mb-4">This week</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {thisWeekPaths.length === 0 ? (
            <p>No learning paths available for this week</p>
          ) : (
            thisWeekPaths.map(renderLearningPathCard)
          )}
        </div>

        <h2 className="text-lg font-semibold mb-4">Last week</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {lastWeekPaths.length === 0 ? (
            <p>No learning paths available for last week</p>
          ) : (
            lastWeekPaths.map(renderLearningPathCard)
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching learning paths", error);
    return <div>Failed to load learning paths</div>;
  }
}
