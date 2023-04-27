import { PrismaClient, Patient } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.patient.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.patient.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (
  name: string,
  age: number,
  gender: string,
  adress: string,
  contact: number
) =>
  prisma.patient.create({
    data: {
      name,
      age,
      gender,
      adress,
      contact,
    },
  });

const update = (id: string, patient: Patient) =>
  prisma.patient.update({
    where: { id },
    data: patient,
  });

const remove = (id: string) =>
  prisma.patient.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
