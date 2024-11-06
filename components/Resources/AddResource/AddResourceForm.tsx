"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function AddResourceForm({ spaceAlias, spaceId, userId }: { spaceAlias: string, spaceId: string, userId: string }) {
  const [message, setMessage] = useState<string | null>(null)
  const data = {
    title: "test 3 add book resource", //Title input
    description: "test 1 description", // Description input
    url: "https://perldocss.perlss.orsg/Test2",// Url input
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } }, //Selected audienceId
    lastModifiedBy: { connect: { id: "55fc2914-20e2-41a9-9478-222896d2365a" } }, //Add contributorId
    resourceType: { connect: { id: "8eed1d9f-a1bd-4d34-b3e5-532d0c92416b" } }, //Select resourceTypeId
    space: { connect: { id: spaceId } } //Add spaceId
  }

  const handleAddAResource = () => {

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceAlias}/r/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          //If response is an error, parse JSON to get the error message
          return res.json().then(err => { throw new Error(err.message) })
        }
        return res.json()
      })
      .then(response => {
        setTimeout(() => {
          console.log(response.message)
        }, 2000)
      })
      .catch(error => {
        console.error(error.message)
      })
  }
  return (
    <>
      <p>Add resource Form</p>
      <p>{spaceAlias}</p>
      <Button className="border hover:bg-blue-400" onClick={handleAddAResource}>Send form</Button>
    </>
  )
};
