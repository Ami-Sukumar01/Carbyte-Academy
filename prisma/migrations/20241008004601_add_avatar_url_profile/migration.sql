/*
  Warnings:

  - A unique constraint covering the columns `[avatarUrl]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "avatarUrl" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_avatarUrl_key" ON "Profile"("avatarUrl");
