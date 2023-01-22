import { PrismaClient } from "@prisma/client";
import { IContact } from "./contact.interface";

const prisma = new PrismaClient();

export const getContactsServ = async () => {
  const contacts = await prisma.contact.findMany();
  return { contacts };
};

export const createContactsServ = async ({ body }: { body: IContact }) => {
  const contact = await prisma.contact.create({
    data: body,
  });
  return { contact: contact };  
};

export const updateContactsServ = async () => {};

export const deleteContactsServ = async () => {};
