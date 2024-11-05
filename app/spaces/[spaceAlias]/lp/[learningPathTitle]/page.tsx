import { fetchLearningPath } from "@/app/api/services/learningPaths"
import SpecificLearningPath from "@/components/LearningPath/Specific/SpecificLearningPath"
import { LearningPath } from "@prisma/client"
import { Comment } from "@prisma/client"
interface SectionProps {
  id: string,
  title: string,
  description: string,
  subsections?: SectionProps[]
}

interface LearningPathData {
  id: string,
  title: string,
  description: string,
  lastModifiedBy: { name: string },
  audience: { name: string },
  estimatedTime: number,
  comments: Comment[],
  sections: SectionProps[]
}




export default async function LearningPathPage({ params }: { params: { spaceAlias: string, learningPathTitle: string } }) {
  let learningPathData: LearningPathData | null = null  // Use the LearningPath type here
  try {
    learningPathData = await fetchLearningPath(params.learningPathTitle)
    console.log(learningPathData)
  } catch (error) {
    // Handle the error appropriately
    console.log("Error calling fetchLearningPath service")
  }

  return (
    <>
      <p>
        Learning Path
      </p>
      {learningPathData ? (
        <SpecificLearningPath learningPathData={learningPathData} />
      ) : (
        <p>No learning path available</p>
      )}
    </>
  )
}