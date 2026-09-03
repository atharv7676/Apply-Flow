import asyncHandler from "../middleware/asyncHandler.js"
import express from "express";
 

const router = express.Router();

const healthcheck = asyncHandler(async(req, res, next)=>{
    return res.status(200).json({
        success : true,
        message : "Successfully Working"
    })
})

router.get("/", healthcheck)

export default router 

