import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";

const router = express.Router();

router.get("/getAllProduct", () => {});
router.get("/getProductById/:id", () => {});
router.post("/createProduct", withAuth, () => {});
router.put("/updateProduct/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
