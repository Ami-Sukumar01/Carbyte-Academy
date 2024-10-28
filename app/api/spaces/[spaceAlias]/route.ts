import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { spaceAlias: string } }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  try {
    const space = await prisma.space.findUnique({
      where: {
        alias: spaceAlias,
        isPublic: true
      },
      include: {
        contributions: {
          include: {
            pointRule: {
              select: {
                points: true
              }
            }
          }
        },
        projects: {
          include: {
            client: {
              select: {
                name: true
              }
            }
          }
        }
      }

    })
    if (!space) {
      return NextResponse.json({ error: "Space not found" }, { status: 404 })
    }
    //Calculate the counts in the space
    const resourceCount = await prisma.resource.count({
      where: { spaceId: space.id }
    })
    const learningPathCount = await prisma.learningPath.count({
      where: { spaceId: space.id }
    })


    //Aggregate points by contributorId
    const contributors = await prisma.$queryRaw`
      SELECT 
        c."contributorId", 
        u.name, 
        COALESCE(p."avatarUrl", '') AS "avatarUrl",
        CAST(SUM(pr.points) AS INTEGER) AS "pointTotal",
        CAST(COUNT(DISTINCT r.id) AS INTEGER) AS "resourcesTotal",
        CAST(COUNT(DISTINCT lp.id) AS INTEGER) AS "learningPathsTotal"
      FROM "Contribution" c
      JOIN "PointRule" pr ON c."pointRuleId" = pr.id
      JOIN "User" u ON c."contributorId" = u.id
      LEFT JOIN "Profile" p ON u.id = p."userId"
      LEFT JOIN "Resource" r ON c."resourceId" = r.id
      LEFT JOIN "LearningPath" lp ON c."learningPathId" = lp.id
      WHERE c."spaceId" = ${space.id}::uuid
      GROUP BY c."contributorId", u.name, p."avatarUrl"
      ORDER BY "pointTotal" DESC;;`;

    // Fetch the top 3 most upvoted resources

    const recommended = await prisma.resource.findMany({
      where: { spaceId: space.id },
      orderBy: {
        upvotes: {
          _count: 'desc'
        }
      },
      take: 3,
      select: {
        id: true,
        title: true,
        description: true,
      }
    });

    // Transform the projects to include client name as a string
    const projects = space.projects.map(project => ({
      ...project,
      client: project.client.name
    }));

    //Find the Fundamental Learning Path Title 
    let fundamentalLearningPathTitle;
    if (space.fundamentalLearningPathId) {
      const learningPath = await prisma.learningPath.findUnique({
        where: { id: space.fundamentalLearningPathId },
        select: {
          title: true
        }
      });
      fundamentalLearningPathTitle = learningPath?.title || "";
    }

    // Construct the response without the resources and learning paths arrays
    const data = {
      ...space,
      projects,
      resourceCount,
      learningPathCount,
      contributors,
      recommended,
      fundamentalLearningPathTitle
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log("Error fetching space data", error)
    return NextResponse.json({ error: "Error fetching space data" }, { status: 500 })
  }

}