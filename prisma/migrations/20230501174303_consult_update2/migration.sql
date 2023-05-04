/*
  Warnings:

  - You are about to drop the column `consultId` on the `patient` table. All the data in the column will be lost.
  - You are about to drop the `consulttomedic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `consulttomedic` DROP FOREIGN KEY `ConsultToMedic_consultId_fkey`;

-- DropForeignKey
ALTER TABLE `consulttomedic` DROP FOREIGN KEY `ConsultToMedic_medicId_fkey`;

-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_consultId_fkey`;

-- AlterTable
ALTER TABLE `consult` ADD COLUMN `medicId` VARCHAR(191) NULL,
    ADD COLUMN `patientId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `consultId`,
    ADD COLUMN `medicId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `consulttomedic`;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_medicId_fkey` FOREIGN KEY (`medicId`) REFERENCES `Medic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consult` ADD CONSTRAINT `Consult_medicId_fkey` FOREIGN KEY (`medicId`) REFERENCES `Medic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consult` ADD CONSTRAINT `Consult_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
