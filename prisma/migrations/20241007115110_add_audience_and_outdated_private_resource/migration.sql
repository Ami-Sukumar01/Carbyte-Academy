/*
  Warnings:

  - You are about to alter the column `url` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2083)`.
  - You are about to alter the column `url` on the `Resource` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2083)`.
  - A unique constraint covering the columns `[url]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `audienceId` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "url" SET DATA TYPE VARCHAR(2083);

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "audienceId" UUID NOT NULL,
ADD COLUMN     "isOutdated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPrivat" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "url" SET DATA TYPE VARCHAR(2083);

-- CreateTable
CREATE TABLE "Audience" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Audience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Audience_name_key" ON "Audience"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_url_key" ON "Client"("url");

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_audienceId_fkey" FOREIGN KEY ("audienceId") REFERENCES "Audience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
