import express, { Router } from "express";
import { upload } from "../middlewares/upload";
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../modules/contact/contact.controller";
const router: Router = express.Router();

router.route("/").get(getContacts).post(upload.single("contactImg"), addContact);
router
  .route("/:contactId")
  .put(upload.single("contactImg"), updateContact)
  .delete(deleteContact);

export default router;
