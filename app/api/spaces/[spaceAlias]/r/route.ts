import { NextResponse } from "next/server";
import { fetchResourceTypes } from "@/lib/data";
import prisma from "@/lib/prisma";


interface ResourceQueryParams {
  types?: string[]; //Accept an array of types
  sort?: string
  order?: string
}
export async function GET(req: Request, { params, query = {} }: { params: { spaceAlias: string }, query?: ResourceQueryParams }) {
  const spaceAlias = decodeURIComponent(params.spaceAlias);
  // Use URLSearchParams to parse query parameters
  const resourceTypes = await fetchResourceTypes()
  // console.log(resourceTypes)
  const {
    types = [],
    sort = "updatedAt",
    order = "desc"
  } = query;

  try {
    const space = await prisma.space.findUnique({
      where: { alias: spaceAlias }
    });

    if (!space) {
      return NextResponse.json({ error: "Space not found" }, { status: 404 });
    }
    // Construct the SQL query with parameterized inputs
    //   const typeFilter = types.length > 0 ? `AND rt.name IN (${types.map((_, i) => `$${i + 2}`).join(", ")})` : "";
    //   const orderBy = `ORDER BY r."${sort}" ${order.toUpperCase()}`;

    //   const sqlQuery = `
    //  SELECT rt.name as type, r.*, 
    //           COUNT(DISTINCT rv.id) as views, COUNT(DISTINCT ru.id) as upvotes

    //     FROM "Resource" r
    //     JOIN "ResourceType" rt ON r."resourceTypeId" = rt.id
    //     LEFT JOIN "ResourceView" rv ON rv."resourceId" = r.id
    //     LEFT JOIN "ResourceUpvote" ru ON ru."resourceId" = r.id
    //     WHERE r."spaceId" = $1::uuid AND r."isPrivat" = false ${typeFilter}
    //     GROUP BY rt.name, r.id
    //     ${orderBy}
    //   `;

    //   const parameters = [space.id, ...types];
    //   const resources2 = await prisma.$queryRawUnsafe(sqlQuery, ...parameters);
    //   // Convert BigInt values to numbers
    //   const data2 = resources2.map(resource => ({
    //     ...resource,
    //     views: Number(resource.views),
    //     upvotes: Number(resource.upvotes)
    //   }));



    // Fetch all resource types
    // const resourceTypes = await prisma.resourceType.findMany();

    // Map type names to IDs for filtering
    const typeIds = resourceTypes
      .filter(rt => types.includes(rt.name))
      .map(rt => rt.id);

    // Find resources in the space
    const resources = await prisma.resource.findMany({
      where: {
        spaceId: space.id,
        isPrivat: false,
        ...(typeIds.length > 0 && { resourceTypeId: { in: typeIds } }) // Filter by resourceTypeId
      },
      include: {
        _count: {
          select: {
            views: true,
            upvotes: true
          }
        },
        resourceType: true
      },
      orderBy: {
        [sort]: order
      }
    });

    const data = resources.map(({ _count, resourceType, ...resource }) => ({
      ...resource,
      resourceTypeName: resourceType.name,
      views: _count.views,
      upvotes: _count.upvotes
    }));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching space resources", error);
    return NextResponse.json({ Error: "Error fetching space resources" }, { status: 500 });
  }
}
