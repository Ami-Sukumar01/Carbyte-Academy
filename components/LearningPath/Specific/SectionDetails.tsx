"use client"
import Link from "next/link"
import { SectionProps } from "@/app/types/learningPathTypes"

export function SecctionDetails({ spaceAlias, section }: { spaceAlias: string, section: SectionProps }) {
  return (
    <div className="border px-9 py-9">
      <p className=" text-lg font-bold mb-6">{section.title}</p>
      <p className=" mb-6">{section.description}</p>
      <p className=" font-semibold mb-6">Resources:</p>
      <div>
        {section.resourceSections?.map((sectionResource) => (
          <div key={sectionResource.sectionId} className="mt-1 text-purple-600 ml-4">
            <Link href={`/spaces/${spaceAlias}/r/${sectionResource.resource.title}`} className="hover:bg-slate-500">
              <p>{sectionResource?.resource.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
