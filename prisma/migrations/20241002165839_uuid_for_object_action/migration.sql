/*
  Warnings:

  - The primary key for the `Action` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Action` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Object` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Object` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `actionId` on the `PointRule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `objectId` on the `PointRule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "PointRule" DROP CONSTRAINT "PointRule_actionId_fkey";

-- DropForeignKey
ALTER TABLE "PointRule" DROP CONSTRAINT "PointRule_objectId_fkey";

-- AlterTable
ALTER TABLE "Action" DROP CONSTRAINT "Action_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Action_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Object" DROP CONSTRAINT "Object_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Object_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PointRule" DROP COLUMN "actionId",
ADD COLUMN     "actionId" UUID NOT NULL,
DROP COLUMN "objectId",
ADD COLUMN     "objectId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "PointRule" ADD CONSTRAINT "PointRule_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Object"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointRule" ADD CONSTRAINT "PointRule_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
