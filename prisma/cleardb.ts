import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function clearDatabase() {
  console.log(`\n Clearing database...`)
  await prisma.commentUpvote.deleteMany({})
  await prisma.comment.deleteMany({})
  await prisma.resourceUpvote.deleteMany({})
  await prisma.resourceView.deleteMany({})
  await prisma.contribution.deleteMany({})
  await prisma.learningPath.deleteMany({})
  await prisma.resource.deleteMany({})
  await prisma.project.deleteMany({})
  await prisma.client.deleteMany({});
  await prisma.space.deleteMany({});
  await prisma.pointRule.deleteMany({});
  await prisma.action.deleteMany({});
  await prisma.object.deleteMany({});
  await prisma.resourceType.deleteMany({});
  await prisma.audience.deleteMany({})
  await prisma.user.deleteMany({});
  console.log(`Database cleared.`);
}

clearDatabase()