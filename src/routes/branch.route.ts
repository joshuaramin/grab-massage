import express from "express";
const router = express.Router();

router.get("/getAllBranches", () => {});
router.get("/getBranchById/:id", () => {});
router.post("/createBranch", () => {});
router.put("/updateBranch/:id", () => {});
router.patch("/update/:id", () => {});

export default router;
