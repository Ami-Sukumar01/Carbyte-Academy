import { sectionData } from "./mockdata"
import { subsectionData } from "./mockdata"

import prisma from "../lib/prisma"


export async function createLearningPathSections() {
  console.log(`\n- Creating learning path sections`)
  for (const lps of sectionData) {
    const section = await prisma.section.create({
      data: lps
    })
    console.log(`Created section: ${section.title}`)
  }
}

export async function createLearningPathSubsections() {
  console.log(`\n- Creating leaarning path subsections`)
  for (const lpss of subsectionData) {
    const subsection = await prisma.section.create({
      data: lpss
    })
    console.log(`Created subsection: ${subsection.title}`)
  }
}