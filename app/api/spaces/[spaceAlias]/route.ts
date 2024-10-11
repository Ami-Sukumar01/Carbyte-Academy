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
      SELECT c."contributorId", u.name, CAST(SUM(pr.points) AS TEXT) AS "pointTotal"
      FROM "Contribution" c
      JOIN "PointRule" pr ON c."pointRuleId" = pr.id
      JOIN "User" u ON c."contributorId" = u.id
      WHERE c."spaceId" = ${space.id}::uuid
      GROUP BY c."contributorId", u.name;`


    // Construct the response without the resources and learning paths arrays
    const data = {
      ...space,
      resourceCount,
      learningPathCount,
      contributors

    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log("Error fetching space data", error)
    return NextResponse.json({ error: "Error fetching space data" }, { status: 500 })
  }

}

// export async function GET(request: Request, { params }: any) { //Property of params to review
//   //We need to find a way to do not have the spaceId on the Url,
//   // But the alias of the Spaces connected by hyphens
//   const spaceId = params.spaceId
//   const data = [{
//     "name": "E2E Solution Architecture",
//     "alias": "E2E",
//     "description": "We bring in-depth software and product expertise to our customers' end-to-end IoT solutions. With our many years of experience in IoT projects, we provide targeted support in product development and integrate seamlessly into the product lifecycle management process.",
//     "resources_count": 12,
//     "learning_paths_count": 3,
//     "contributors": [
//       {
//         "contributor_user_id": "a1f5c81d-bde2-4a8d-94b9-dc0b45b4c013",
//         "avatar_url": "MJ",
//         "name": "Maria Juergens",
//         "resources_total": 5,
//         "learning_paths_total": 1,
//         "points_total": 50
//       },
//       {
//         "contributor_user_id": "f3d9c98a-cc7d-483b-9718-d903e01492d2",
//         "avatar_url": "DK",
//         "name": "David Kurz",
//         "resources_total": 4,
//         "learning_paths_total": 1,
//         "points_total": 10
//       },
//       {
//         "contributor_user_id": "g5ac5f3c-1346-47df-bbe2-7de8c69d99df",
//         "avatar_url": 'EE',
//         "name": "Erhan Evin",
//         "resources_total": 3,
//         "learning_paths_total": 1,
//         "points_total": 40,
//       }
//     ],
//     "activities": [
//       {
//         "contribution_id": "b1f5c81d-bde2-4a8d-94b9-dc0b45b4c014",
//         "contributor_name": "Erhan",
//         "action": "added resource",
//         "entity_title": "E2E Architecture Guide",
//         "entity_url": "#",
//         "timestamp": "20 min ago"
//       },
//       {
//         "contribution_id": "c2d9c98a-cc7d-483b-9718-d903e01492d3",
//         "contributor_name": "Maria",
//         "action": "created learning path",
//         "entity_title": "IoT Product Lifecycle",
//         "entitly_url": "#",
//         "timestamp": "07:23 am"
//       },
//       {
//         "contribution_id": "d3ac5f3c-1346-47df-bbe2-7de8c69d99e0",
//         "contributor_name": "Maria",
//         "action": "commented on",
//         "entity_title": "E2E Integration Practices",
//         "entity_url": "#",
//         "timestamp": "07:06 am"
//       },
//       {
//         "contribution_id": "e4b9db1d-cce8-4519-ada4-6537e4fcf757",
//         "contributor_name": "David",
//         "action": "flagged resource",
//         "entity_title": "Agile SAFe Methodologies",
//         "timestamp": "06:23 am"
//       },
//       {
//         "contribution_id": "f5d9c98a-cc7d-483b-9718-d903e01492d4",
//         "contributor_name": "Daria",
//         "action": "upvoted resource",
//         "entity_title": "Azure Fundamentals",
//         "entity_url": "#",
//         "timestamp": "06:23 am"
//       }
//     ],

//     "projects": [
//       {
//         "project_id": "g6d5c81d-bde2-4a8d-94b9-dc0b45b4c015",
//         "name": "Cloud-Optimierung Connected Car",
//         "description": "The aim of the project was to reduce the number of existing systems and thus significantly reduce complexity. We not only supported the technical implementation, but also took on the coordination of all stakeholders. The result is a robust, future-proof IT landscape.",
//         "client": "VW"
//       },
//       {
//         "project_id": "h7c9c98a-cc7d-483b-9718-d903e01492d5",
//         "name": "Implementing CI/CD for seamless integration and accelerated product development",
//         "description": "By implementing CI/CD practices with nightly releases and robust variant handling, we have achieved seamless integration, rapid deployment and reliable delivery. This enables the development of the highest quality products with improved responsiveness.",
//         "client": "VW"
//       },
//       {
//         "project_id": "i8ac5f3c-1346-47df-bbe2-7de8c69d99e1",
//         "name": "Efficient and cost-optimized cloud infrastructure: from complexity to sustainability",
//         "description": "Thanks to our expertise in optimizing cloud infrastructures, we were able to significantly increase a customer's competitiveness. We transformed an inefficient cloud solution, reduced communication nodes, eliminated redundancies and optimized development processes. The result: significantly lower infrastructure costs, improved efficiency and a sustainably reduced ecological footprint.",
//         "client": "VW"
//       },
//       {
//         "project_id": "j9b9db1d-cce8-4519-ada4-6537e4fcf758",
//         "name": "Community-Driven EdTech SaaS",
//         "description": "Our self-developed P2P Learning Platform promotes personal development. It facilitates orientation and knowledge transfer, increases satisfaction and shortens training times. Community-driven learning makes it possible to explore topics based on the needs of the users.",
//         "client": "VW"
//       },

//     ],

//     "recomended": [
//       {
//         "resource_id": "k1f5c81d-bde2-4a8d-94b9-dc0b45b4c016",
//         "title": "E2E Architecture Guide",
//         "description": "Comprehensive guide on E2E architecture best practices."
//       },
//       {
//         "resource_id": "l2d9c98a-cc7d-483b-9718-d903e01492d6",
//         "title": "IoT Product Lifecycle",
//         "description": "In-depth analysis of IoT product lifecycle management."
//       },
//       {
//         "resource_id": "m3ac5f3c-1346-47df-bbe2-7de8c69d99e2",
//         "title": "Agile SAFe Methodologies",
//         "description": "Explore agile SAFe methodologies for E2E projects."
//       }
//     ],
//   }]

//   return NextResponse.json(data)
// }