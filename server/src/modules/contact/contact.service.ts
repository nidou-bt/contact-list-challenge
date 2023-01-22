import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getContactsServ = async () => {
  const users = await prisma.contact.findMany();
  return { users };
};
