import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.model.js";
import { accessToken, refreshToken } from "../utils/generateTokens.js";

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        return res.status(409).json({
            success: false,
            message: "Email already exist"
        })
    }

    const createdUser = await User.create({
        email,
        name,
        password,

    })

    const registeredUser = {
        email,
        name
    }

    return res.status(201).json({
        success: true,
        data: registeredUser,
    })
})

const loginUser = asyncHandler(async (req, res) => {
    const { password, email, } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({
            success: false,
            message: " Invalid Credentials "
        })
    };

    const isPassCorrect = await user.comparePassword(password);

    if (!isPassCorrect) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        })
    }

    const generatedRefreshToken = refreshToken(user._id);


    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    }
    res.cookie(
        "refreshToken",
        generatedRefreshToken,
        options,
    )
    const generatedAccessToken = accessToken(user._id);


    res.cookie(
        "accessToken",
        generatedAccessToken,
        options,
    )

    return res.status(200).json({
        success: true,
        message: "Successfull login",
    })

})


const getMe = asyncHandler(async (req, res) => {
    const {name, role, email} = req.user;

    res.status(200).json({
        success:true,
        data:{name, role, email},
        message : "data fetched successfully"
    })
});


export { registerUser, loginUser, getMe };