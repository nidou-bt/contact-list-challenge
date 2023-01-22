import express, { Router } from "express";

const router: Router = express.Router();

router.route("/").get();
// router.route("/:contactId").put().post();

export default router;
 