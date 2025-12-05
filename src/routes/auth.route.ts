import express from "express";
const router = express.Router();

router.get("/auth/login", async (req, res) => {
  // Handle login logic here
  res.send("Login Page");
});
