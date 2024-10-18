import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



// Specific resource Page Data: Resource + Views + Upvotes + Comments + CommentUpvotes
export async function GET(req: Request, { params }: { params: { spaceAlias: string, resourceTitle: string } }) {
  const resourceTitle = decodeURIComponent(params.resourceTitle)
  try {
    const resource = await prisma.resource.findUnique({
      where: {
        title: resourceTitle,
        isPrivat: false,
      },
      select: {
        id: true,
        title: true,
        description: true,
        url: true,
        audience: {
          select: {
            name: true
          }
        },
        isOutdated: true,
        lastModifiedBy: {
          select: {
            name: true
          }
        },
        resourceType: {
          select: {
            name: true
          }
        },
        _count: {
          select: {
            views: true,
            upvotes: true
          }
        },
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
        }
      },
    })
    if (!resource) {
      return NextResponse.json({ error: "Resource not found", status: 404 })
    }
    // Format commentupvotes
    const transformedComments = resource.comments?.map(comment => {
      const { _count, ...rest } = comment
      return {
        ...rest,
        commentUpvotes: comment._count.commentUpvotes,
      }
    })

    //Format resource to include views and upvotes avoid _count, add transformedComments
    const { _count, ...restResource } = resource
    const data = {
      ...restResource,
      views: _count.views,
      upvotes: _count.upvotes,
      comments: transformedComments
    }
    return NextResponse.json(data)

  } catch (error) {
    console.log("Error fetching resource data", error)
    return NextResponse.json({ error: "Error fetching resource data" }, { status: 500 })
  }
}