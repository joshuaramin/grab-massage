import { getAllUser } from "@/controller/user.controller";
import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";
const router = express.Router();

router.get("/getAllUsers", withAuth, getAllUser);
router.get("/getUserById/:id", withAuth, () => {});
router.post("/createUser", () => {});
router.put("/updateUser/:id", withAuth, () => {});
router.patch("/update/:id", withAuth, () => {});

export default router;
