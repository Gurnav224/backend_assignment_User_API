import express from "express";
import {
  getUserProfile,
  login,
  signup,
  updateProfile,
} from "../controllers/user.controller.js";

import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", verifyToken, getUserProfile);
router.put('/me/:userId', verifyToken, updateProfile)

export default router;
