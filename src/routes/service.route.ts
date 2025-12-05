import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";
const router = express.Router();

router.get("/getAllServices", () => {});
router.get("/getServiceById/:id", () => {});
router.post("/createService", withAuth, () => {});
router.put("/updateService/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
