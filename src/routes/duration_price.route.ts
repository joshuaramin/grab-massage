import express from "express";

const router = express.Router();

router.get("/getAllDurationPrices", () => {});
router.get("/getDurationPriceById/:id", () => {});
router.post("/createDurationPrice", () => {});
router.put("/updateDurationPrice/:id", () => {});
router.patch("/update/:id", () => {});

export default router;
