import { Router } from "express";
import signup from "../controllers/signup.js";
import login from "../controllers/login.js";
import createCheckoutSession from "../api/checkout.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/create-checkout-session", createCheckoutSession);

export default router;
