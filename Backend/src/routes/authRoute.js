import express from "express";
import protect from "../middleware/protect.js";
import {registerUser, loginUser, getMe} from "../controllers/user.controller.js"


const router = express.Router();

router.get("/me", protect, getMe)
router.post("/login", loginUser)
router.post("/register", registerUser)

export default router 