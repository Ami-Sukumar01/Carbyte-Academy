"use client"
import { AnyCnameRecord } from "dns"
import Link from "next/link"
import { SectionProps } from "@/app/types/learningPathTypes"

export function SecctionDetails({ spaceAlias, section }: { spaceAlias: string, section: SectionProps }) {

  return (
    <div className="border p-4">
      <p>{section.title}</p>
      <p>{section.description}</p>
      <p className="text-center">Resources:</p>
      <p>{section.resourceSections?.map((sectionResource) => (
        <div key={sectionResource.sectionId}>
          <Link href={`/spaces/${spaceAlias}/r/${sectionResource.resource.title}`} className="hover:bg-slate-500">
            <p key={sectionResource.sectionId}>{sectionResource?.resource.title}</p>
          </Link>
        </div>
      ))}</p>
    </div>
  )
}