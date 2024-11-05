import { sectionData } from "./mockdata"

import prisma from "../lib/prisma"


export async function createLearningPathSection() {
  console.log(`\n- Creating learning path sections`)
  for (const lps of sectionData) {
    const section = await prisma.section.create({
      data: lps
    })
    console.log(`Created or modified: ${section.title}`)
  }
}