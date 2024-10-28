import LearningPathSection from "@/components/LearningPath/Overview/LearningPathSection"

export default async function LearningPathsPage({ params }: { params: { spaceAlias: string } }) {

  return (
    <>
      <div>Leaerning Paths Overview</div>
      <LearningPathSection spaceAlias={params.spaceAlias} />
    </>
  )
}