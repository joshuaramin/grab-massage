import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";

const router = express.Router();

router.get("/getAllAddresses", withAuth, () => {});
router.get("/getAddressById/:id", withAuth, () => {});
router.post("/createAddress", withAuth, () => {});
router.put("/updateAddress/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
