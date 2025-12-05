import express from "express";

const router = express.Router();

router.get("/getAllProduct", () => {});
router.get("/getProductById/:id", () => {});
router.post("/createProduct", () => {});
router.put("/updateProduct/:id", () => {});
router.patch("/update/:id", () => {});

export default router;
