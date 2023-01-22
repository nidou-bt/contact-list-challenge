import express, { Router } from "express";
import { addContact, deleteContact, getContacts, updateContact,  } from "../modules/contact/contact.controller";
import {  } from "../modules/contact/contact.service";

const router: Router = express.Router();

router.route("/").get(getContacts).post(addContact);
router.route("/:contactId").put(updateContact).delete(deleteContact);

export default router;
 