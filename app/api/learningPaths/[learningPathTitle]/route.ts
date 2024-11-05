import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { learningPathTitle: string } }) {
  const learningPathTitle = decodeURIComponent(params.learningPathTitle)
  try {
    const learningPath = await prisma.learningPath.findUnique({
      where: { title: learningPathTitle, isPublic: true },
      select: {
        id: true,
        title: true,
        description: true,
        lastModifiedById: true,
        lastModifiedBy: {
          select: {
            name: true
          }
        },
        audience: {
          select: { name: true }
        },
        estimatedTime: true,
        comments: {
          select: {
            id: true,
            content: true,
            user: {
              select: {
                name: true,
                profile: {
                  select: {
                    avatarUrl: true
                  }
                }
              }
            },
            createdAt: true,
            _count: {
              select: {
                commentUpvotes: true
              }
            }
          }
        },
        sections: {
          select: {
            id: true,
            title: true,
            description: true,
            subsections: true
          }
        }

      }
    })
    return NextResponse.json(learningPath, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "No learning path found." }, { status: 404 })
  }
}