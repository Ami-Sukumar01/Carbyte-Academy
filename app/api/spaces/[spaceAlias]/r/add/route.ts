import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";


export async function POST(req: Request, { params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  try {
    const resource = await req.json() as Prisma.ResourceCreateInput //Add Resource type for expected response
    const space = await prisma.space.findUnique({
      where: { alias: spaceAlias },
      select: {
        id: true
      }
    })
    if (!space) {
      return NextResponse.json({ message: "No space found" }, { status: 400 })
    }

    console.log(resource)
    console.log("Working 1")
    await prisma.resource.create({
      data: resource
    })
    return NextResponse.json({ message: "Resource created successfully" }, { status: 201 })


  } catch (error) {
    console.error("Error creating a new resource", error)
    return NextResponse.json({ message: "Error creating a new resource" }, { status: 500 })
  }
}