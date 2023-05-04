/*
  Warnings:

  - You are about to drop the `_ordertopatient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ordertopatient` DROP FOREIGN KEY `_OrderToPatient_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ordertopatient` DROP FOREIGN KEY `_OrderToPatient_B_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_userId_fkey`;

-- DropTable
DROP TABLE `_ordertopatient`;

-- DropTable
DROP TABLE `order`;
