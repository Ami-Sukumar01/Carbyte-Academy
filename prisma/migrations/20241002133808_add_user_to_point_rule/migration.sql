/*
  Warnings:

  - Added the required column `lastModifiedById` to the `PointRule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PointRule" ADD COLUMN     "lastModifiedById" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "PointRule" ADD CONSTRAINT "PointRule_lastModifiedById_fkey" FOREIGN KEY ("lastModifiedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
