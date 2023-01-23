import { Request, Response } from "express";
import { IContact } from "./contact.interface";
import {
  createContactsServ,
  deleteContactsServ,
  getContactsServ,
  updateContactsServ,
} from "./contact.service";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const { contacts } = await getContactsServ();
    return res.status(200).json({ data: contacts });
  } catch (err) {
    return res
      .status(400)
      .json({ err: "Something went wrong, please try again" });
  }
};

export const addContact = async (req: Request, res: Response) => {
  try {
    const body: IContact = req.body;
    if (req.file) {
      body.picture = req.file.filename;
    }
    body.phoneNumber = Number(body.phoneNumber);
    const { contact } = await createContactsServ(body);
    return res.status(200).json({ data: contact });
  } catch (err) {
    console.log("err", err);
    return res
      .status(400)
      .json({ err: "Something went wrong, please try again" });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { contactId } = req.params;
    const id = Number(contactId);
    const { contact } = await deleteContactsServ({ id });
    return res.status(200).json({ contact });
  } catch (err) {
    return res
      .status(400)
      .json({ err: "Something went wrong, please try again" });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { contactId } = req.params;
    body.id = Number(contactId);
    if (req.file) {
      body.picture = req.file.filename;
    }
    if (body.phoneNumber) {
      body.phoneNumber = Number(body.phoneNumber);
    }

    const { contact } = await updateContactsServ(body);
    return res.status(200).json({ contact });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ err: "Something went wrong, please try again" });
  }
};
