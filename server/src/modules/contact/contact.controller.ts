import { Request, Response } from "express";
import { getContactsServ } from "./contact.service";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const { users } = await getContactsServ();
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
