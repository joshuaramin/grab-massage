import { withAuth } from "@/lib/helpers/withAuth";
import express from "express";

const router = express.Router();

router.get("/getProfileById/:id", withAuth, () => {});
router.put("/updateRole/:id", withAuth, () => {});

export default router;
