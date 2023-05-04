/*
  Warnings:

  - Made the column `specialtyId` on table `medic` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `consultId` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `medic` DROP FOREIGN KEY `Medic_specialtyId_fkey`;

-- AlterTable
ALTER TABLE `medic` MODIFY `specialtyId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `patient` ADD COLUMN `consultId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Consult` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `room` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(255) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConsultToMedic` (
    `consultId` VARCHAR(191) NOT NULL,
    `medicId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`consultId`, `medicId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_consultId_fkey` FOREIGN KEY (`consultId`) REFERENCES `Consult`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medic` ADD CONSTRAINT `Medic_specialtyId_fkey` FOREIGN KEY (`specialtyId`) REFERENCES `Specialty`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConsultToMedic` ADD CONSTRAINT `ConsultToMedic_consultId_fkey` FOREIGN KEY (`consultId`) REFERENCES `Consult`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConsultToMedic` ADD CONSTRAINT `ConsultToMedic_medicId_fkey` FOREIGN KEY (`medicId`) REFERENCES `Medic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
