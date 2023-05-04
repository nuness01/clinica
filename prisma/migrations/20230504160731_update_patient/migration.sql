/*
  Warnings:

  - You are about to drop the column `medicId` on the `patient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_medicId_fkey`;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `medicId`;
