import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";

const router = express.Router();

router.get("/getBooking", withAuth, () => {});
router.post("/createBooking", withAuth, () => {});
router.put("/updateBooking/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
