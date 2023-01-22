import express, { Router } from "express";
import { addContacts, getContacts } from "../modules/contact/contact.controller";

const router: Router = express.Router();

router.route("/").get(getContacts).post(addContacts);
// router.route("/:contactId").put().post();

export default router;
 