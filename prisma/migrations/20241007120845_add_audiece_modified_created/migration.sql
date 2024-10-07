/*
  Warnings:

  - Added the required column `lastModifiedById` to the `Audience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Audience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Audience" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastModifiedById" UUID NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Audience" ADD CONSTRAINT "Audience_lastModifiedById_fkey" FOREIGN KEY ("lastModifiedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
