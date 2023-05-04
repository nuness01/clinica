import { PrismaClient, Consult } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.consult.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.consult.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (room: string, desc: string, medicId: string, patientId: string) =>
  prisma.consult.create({
    data: {
      room,
      desc,

      medic: {
        connect: {
          id: medicId,
        },
      },
      Patient: {
        connect: {
          id: patientId,
        },
      },
      deleted: false,
    },
  });

const update = (id: string, consult: Consult) =>
  prisma.consult.update({
    where: { id },
    data: consult,
  });

const remove = (id: string) =>
  prisma.consult.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
