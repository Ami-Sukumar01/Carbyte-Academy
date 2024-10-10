import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

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