import { LearningPath } from "@prisma/client"
import Link from "next/link";
import { fetchAudiences } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface LearningPathWithCounts extends LearningPath {
  _count: {
    views: number;
    upvotes: number;
  }
}
interface Audience {
  id: string,
  name: string,
  description: string
}

async function fetchAudienceData(): Promise<Audience[]> {
  const res = await fetchAudiences()
  if (!res.ok) {
    throw new Error("Failed to fetch audiences")
  }
  return res.json()
}


async function fetchLearningPaths(spaceAlias: string): Promise<LearningPathWithCounts[]> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/spaces/${spaceAlias}/lp`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed to fetch learning paths")
  }
  return res.json()
}

export default async function LearningPathSection({ spaceAlias }: { spaceAlias: string }) {
  try {
    const learningPaths = await fetchLearningPaths(spaceAlias)
    const audiences = await fetchAudienceData()
    return (
      <div>

        <div>Learning Path Section</div>
        {learningPaths.length === 0 ? (
          <p>No learning paths available</p>
        ) : (
          <div>
            {learningPaths.map((lp) => (
              //Create a LearningPathCard
              <Link
                key={lp.id}
                href={`/spaces/${spaceAlias}/lp/${encodeURIComponent(lp.title)}`}

              >
                <div className="hover:bg-yellow-400 p-2">


                  {lp.title} - Views: {lp._count.views}, Upvotes: {lp._count.upvotes}
                </div>



              </Link>
            ))}

          </div>
        )}
        <div>Data for dropdown button</div>
        {audiences.map((audience) => (
          <Button key={audience.id}>{audience.name}</Button> //You also have id and description
        ))}
      </div>
    )

  } catch (error) {
    console.error("Error fetching learning paths", error)
    return <div>Failed to load learning paths</div>
  }
}