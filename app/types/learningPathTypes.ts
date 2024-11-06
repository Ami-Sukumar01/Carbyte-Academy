import { Comment } from "@prisma/client"

export interface SectionProps {
  id: string,
  title: string,
  description: string,
  subsections?: SectionProps[],
  resourceSections?: resourceSections[]
}

interface resourceSections { ////Define in some place to be used in different places
  sectionId: string,
  resource: {
    id: string,
    title: string,
    url: string
  }
}

export interface LearningPathData {
  id: string,
  title: string,
  description: string,
  lastModifiedBy: { name: string },
  audience: { name: string },
  estimatedTime: number,
  comments: Comment[],
  sections: SectionProps[]
}
