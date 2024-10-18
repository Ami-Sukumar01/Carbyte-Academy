"use client"
import { Button } from "../ui/button"
import { ChevronUp } from "lucide-react"
// import { upvoteResource } from "@/lib/resourceService"

export default function UpvoteButton({ resourceId, userId }: { resourceId: string, userId: string }) {
  console.log(resourceId)
  console.log(userId)
  return (
    <Button className="hover:bg-green-300" variant="outline" >
      <ChevronUp />
    </Button>
  )
}