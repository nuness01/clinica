import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.specialty.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.specialty.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, detail };
