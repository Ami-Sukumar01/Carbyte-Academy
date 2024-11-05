"use client"
import { LearningPath } from "@prisma/client"
import { Section } from "@prisma/client"
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

export default function SpecificLearningPath({ learningPathData }: { learningPathData: LearningPathData }) {
  return (
    <>
      <p>Learning Path Details</p>
      <p>See here:</p>
      <p className="text-3xl">{learningPathData.title}</p>
      <p className="text-xl">Sections</p>
      <ul>{learningPathData.sections.map((section: SectionProps) =>
      (
        <>
          <li key={section.id} className="border text-xl hover:bg-gray-500">{section.title}</li>
          <ul>
            {section.subsections?.map((subsection: SectionProps) => (

              <li key={subsection.id}> {subsection.title}
              </li>
            ))}
          </ul>
        </>

      )
      )}</ul>
    </>
  )
}
