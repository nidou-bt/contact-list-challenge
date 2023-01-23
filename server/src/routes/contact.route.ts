import express, { Router } from "express";
import multer from "multer";
import { upload } from "../middlewares/upload";
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from "../modules/contact/contact.controller";
const router: Router = express.Router();

router.route("/").get(getContacts).post(upload.none(), addContact);
router
  .route("/:contactId")
  .put(upload.single("SearchImg"), updateContact)
  .delete(deleteContact);

export default router;
