import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";
const router = express.Router();

router.get("/getAllRoles", withAuth, () => {});
router.get("/getRoleById/:id", withAuth, () => {});
router.post("/createRole", withAuth, () => {});
router.put("/updateRole/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
