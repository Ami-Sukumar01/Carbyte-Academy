import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";



export async function fetchResourceTypes() {
  try {
    const types = await prisma.resourceType.findMany()
    return types
  } catch (error) {

    console.error('Database Error', error)
    throw new Error('Failed to fetch resource types')
  }

}

export async function fetchSpaceAliases() {
  try {
    const spaces = await prisma.space.findMany({
      where: { isPublic: true },
      orderBy: { alias: 'asc' },
      select: { alias: true }
    })
    return spaces
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to fetch space aliases.")
  }
}

export async function fetchAudiences() {
  try {
    const audiences = await prisma.audience.findMany({
      select: {
        id: true,
        name: true,
        description: true
      }
    })
    return NextResponse.json(audiences, { status: 200 })
  } catch (error) {
    console.error("Database errror", error)
    throw new Error("Failed to fetch audiences")
  }
}
export async function fetchSpaceId(spaceAlias: string): Promise<string | null> {
  const decodedSpaceAlias = decodeURIComponent(spaceAlias)
  try {
    const space = await prisma.space.findUnique({
      where: { alias: decodedSpaceAlias },
      select: { id: true }
    })
    if (!space) {
      console.error('Space not found')
      throw new Error("Space not found!")
    }
    return space.id
  } catch (error) {
    console.error("Error fetching spaceId", error)
    return null
  }
}

//TODO: fetchUserId
