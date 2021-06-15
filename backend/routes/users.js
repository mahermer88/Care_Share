import { Router } from "express";
import getUser from "../controllers/get-user.js";
import updateUser from "../controllers/update-user.js";
import deleteUser from "../controllers/delete-user.js";

const router = Router();

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
