import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface LearningPathQueryParams {
  sort?: string,
  order?: string
}

export async function GET(req: Request, { params, query = {} }: { params: { spaceAlias: string }, query?: LearningPathQueryParams }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)

  const {
    sort = "createdAt",
    order = "desc"
  } = query;

  try {
    const space = await prisma.space.findUnique({
      where: { alias: spaceAlias }
    })
    if (!space) {
      return NextResponse.json({ error: "Space not found" }, { status: 404 })
    }
    //Find learning paths in the space
    const learningPaths = await prisma.learningPath.findMany({
      where: {
        spaceId: space.id,
        isPublic: true
      },
      include: {
        _count: {
          select: {
            views: true,
            upvotes: true
          }
        }
      },
      orderBy: {
        [sort]: order
      }
    })
    return NextResponse.json(learningPaths, { status: 200 })
  } catch (error) {
    console.error("Error fetching learning paths", error)
    return NextResponse.json({ Error: "Error fetching space learning paths" }, { status: 500 })
  }
}