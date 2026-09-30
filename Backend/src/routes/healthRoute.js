import { healthcheck } from "../controllers/health.controller.js";
import express from "express";
 

const router = express.Router();

router.get("/", healthcheck)

export default router 

