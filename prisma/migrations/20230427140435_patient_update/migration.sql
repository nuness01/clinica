/*
  Warnings:

  - You are about to alter the column `contact` on the `patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- AlterTable
ALTER TABLE `patient` MODIFY `contact` INTEGER NOT NULL;
