import express from "express";

const router = express.Router();

router.get("/getAllAddresses", () => {});
router.get("/getAddressById/:id", () => {});
router.post("/createAddress", () => {});
router.put("/updateAddress/:id", () => {});
router.patch("/update/:id", () => {});

export default router;
