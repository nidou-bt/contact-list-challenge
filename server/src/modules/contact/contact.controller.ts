import { Request, Response } from "express";
import { createContactsServ, getContactsServ } from "./contact.service";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const { contacts } = await getContactsServ();
    return res.status(200).json({ data: contacts });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
export const addContacts = async (req: Request, res: Response) => {
    console.log('req', req.body)
  try {
    const body = req.body;
    const { contact } = await createContactsServ({ body });
    return res.status(200).json({ data: contact });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
