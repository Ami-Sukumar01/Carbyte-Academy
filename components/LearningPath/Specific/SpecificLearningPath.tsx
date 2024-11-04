"use client"
import { LearningPath } from "@prisma/client"

export default function SpecificLearningPath({ data }: { data: LearningPath }) {
  return (
    <>
      <p>Learning Path Details</p>
      <p>See here:</p>
      <p>{data.title}</p>
    </>
  )
}
