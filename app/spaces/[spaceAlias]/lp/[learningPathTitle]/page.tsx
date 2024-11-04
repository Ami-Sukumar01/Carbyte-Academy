import { fetchLearningPath } from "@/app/api/services/learningPaths"
import SpecificLearningPath from "@/components/LearningPath/Specific/SpecificLearningPath"
import { LearningPath } from "@prisma/client"

export default async function LearningPathPage({ params }: { params: { spaceAlias: string, learningPathTitle: string } }) {
  let learningPathData: LearningPath | null = null  // Use the LearningPath type here
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
        <SpecificLearningPath data={learningPathData} />
      ) : (
        <p>No learning path available</p>
      )}
    </>
  )
}