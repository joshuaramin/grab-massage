import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";
const router = express.Router();

router.get("/getAllBranches", () => {});
router.get("/getBranchById/:id", () => {});
router.post("/createBranch", withAuth, () => {});
router.put("/updateBranch/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
