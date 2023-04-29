import { PrismaClient, Medic } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.medic.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.medic.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (name: string, specialtyName: string) =>
  prisma.medic.create({
    data: {
      name,
      specialty: {
        create: {
          specialtyName,
        },
      },
    },
  });

const update = (id: string, medic: Medic) =>
  prisma.medic.update({
    where: { id },
    data: medic,
  });

const remove = (id: string) =>
  prisma.medic.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
