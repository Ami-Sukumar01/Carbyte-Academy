"use client"
import { SecctionDetails } from "./SectionDetails"
import { LearningPathData, SectionProps } from "@/app/types/learningPathTypes"


export default function SpecificLearningPath({ spaceAlias, learningPathData }: { spaceAlias: string, learningPathData: LearningPathData }) {
  return (
    <>
      <p>Learning Path Details</p>
      <p>See here:</p>
      <p className="text-3xl">{learningPathData.title}</p>
      <p className="text-xl">Sections</p>
      <ul>{learningPathData.sections.map((section: SectionProps) =>
      (
        <div key={section.id}>
          <li key={section.id} className="border text-xl hover:bg-gray-500">{section.title}</li>
          <p className="bg-yellow-200">Section Details - Popover</p>
          <SecctionDetails spaceAlias={spaceAlias} section={section}></SecctionDetails>
          {/* 
          {section.resourceSections?.map((resource) => (
            <p key={resource.sectionId}>{resource.resource.title}</p>
          ))} */}
          {/* <SecctionDetails title={section.title} description={section.description} resourceSection={section.resourceSections}></SecctionDetails> */}
          <p className="bg-lime-400">Subsections:</p>
          <ul>
            {section.subsections?.map((subsection: SectionProps) => (

              <li key={subsection.id}> {subsection.title}
                <SecctionDetails spaceAlias={spaceAlias} section={subsection}></SecctionDetails>
              </li>
            ))}
          </ul>
        </div>

      )
      )}</ul>
    </>
  )
}
