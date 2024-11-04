import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { learningPathTitle: string } }) {
  const learningPathTitle = decodeURIComponent(params.learningPathTitle)
  try {
    const learningPath = await prisma.learningPath.findUnique({
      where: { title: learningPathTitle },
    })
    return NextResponse.json(learningPath, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "No learning path found." }, { status: 404 })
  }
}