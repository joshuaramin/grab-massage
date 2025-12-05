import express from "express";
const router = express.Router();

router.get("/getAllServices", () => {});
router.get("/getServiceById/:id", () => {});
router.post("/createService", () => {});
router.put("/updateService/:id", () => {});
router.patch("/update/:id", () => {});

export default router;
