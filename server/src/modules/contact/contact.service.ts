import { PrismaClient } from "@prisma/client";
import { IContact } from "./contact.interface";

const prisma = new PrismaClient();

export const getContactsServ = async () => {
  const contacts = await prisma.contact.findMany();
  return { contacts };
};

export const createContactsServ = async (body: IContact) => {
  const contact = await prisma.contact.create({
    data: body,
  });
  if (!contact) {
    throw new Error();
  }
  return { contact: contact };
};

export const updateContactsServ = async ({
  id,
  ...body
}: Partial<IContact>) => {
  const contact = await prisma.contact.update({
    where: { id: id },
    data: body,
  });
  return { contact };
};

export const deleteContactsServ = async ({ id }: { id: string }) => {
  const contact = await prisma.contact.delete({
    where: {
      id: Number(id),
    },
  });
  return { contact };
};
