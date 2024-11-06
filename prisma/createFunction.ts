import {
  resourceSectionData,
  sectionData,
  subsectionData
} from "./mockdata"
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

export async function createSectionResources() {
  console.log(`\n- Create section resources`)
  for (const rs of resourceSectionData) {
    const sectionResource = await prisma.resourceSection.create({
      data: rs
    })
    console.log(`Added resource: ${sectionResource.resourceId} to section ${sectionResource.sectionId}`)
  }
}