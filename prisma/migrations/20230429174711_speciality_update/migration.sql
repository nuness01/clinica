/*
  Warnings:

  - You are about to drop the column `specialty` on the `medic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `medic` DROP COLUMN `specialty`,
    ADD COLUMN `specialtyId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Specialty` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `specialtyName` VARCHAR(255) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medic` ADD CONSTRAINT `Medic_specialtyId_fkey` FOREIGN KEY (`specialtyId`) REFERENCES `Specialty`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
