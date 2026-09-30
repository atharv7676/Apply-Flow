import asyncHandler from "../middleware/asyncHandler.js";

export const healthcheck = asyncHandler(async(req, res)=>{

    console.log("HEALTH ROUTE HIT");
    return res.status(200).json({
        success : true,
        message : "Successfully Working"
    })
})
