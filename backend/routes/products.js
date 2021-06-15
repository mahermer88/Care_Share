import { Router } from "express";
import getProducts from "../controllers/get-products.js";
import createProduct from "../controllers/create-product.js";

const router = Router();

router.get("/", getProducts);

router.post("/", createProduct);

export default router;
