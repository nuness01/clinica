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

const add = async (
  room: string,
  desc: string,
  medicid: string,
  patientid: string
) => {
  return prisma.consult.create({
    data: {
      room,
      desc,
      medic: {
        connect: {
          id: medicid,
        },
      },
      Patient: {
        connect: {
          id: patientid,
        },
      },
      deleted: false,
    },
    include: {
      medic: {
        select: {
          name: true,
        },
      },
      Patient: {
        select: {
          name: true,
        },
      },
    },
  });
};

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
