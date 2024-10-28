/*
  Warnings:

  - A unique constraint covering the columns `[fundamentalLearningPathId]` on the table `Space` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "fundamentalLearningPathId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Space_fundamentalLearningPathId_key" ON "Space"("fundamentalLearningPathId");

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_fundamentalLearningPathId_fkey" FOREIGN KEY ("fundamentalLearningPathId") REFERENCES "LearningPath"("id") ON DELETE SET NULL ON UPDATE CASCADE;
