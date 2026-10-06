import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import healthRoute from "./routes/healthRoute.js"
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import protect from "./middleware/protect.js";
import authRoute from "../src/routes/authRoute.js"

const app = express();

app.use(cors({
    origin: process.env.Client_URL,
    methods:["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/health", healthRoute)
app.use("/api/auth", authRoute)

app.use(notFound)
app.use(errorHandler)


export default app