import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
import asyncHandler from "./asyncHandler.js";

const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).json({
            message: "UnAuthorized  Access",
            success: false
        })
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decoded.userId)

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Unauthorised "
        })
    }
    req.user = user;

    next();
})

export default protect;