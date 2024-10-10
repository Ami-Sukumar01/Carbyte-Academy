/*
  Warnings:

  - You are about to drop the column `description` on the `PointRule` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `PointRule` table. All the data in the column will be lost.
  - Added the required column `actionId` to the `PointRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objectId` to the `PointRule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PointRule" DROP COLUMN "description",
DROP COLUMN "type",
ADD COLUMN     "actionId" INTEGER NOT NULL,
ADD COLUMN     "objectId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Object" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Object_name_key" ON "Object"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Action_name_key" ON "Action"("name");

-- AddForeignKey
ALTER TABLE "PointRule" ADD CONSTRAINT "PointRule_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Object"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointRule" ADD CONSTRAINT "PointRule_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
