import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import healthRoute from "./routes/healthCheckRoute.js"

const app = express();

app.use(cors({
    origin: process.env.Client_URL,
    methods:["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/health", healthRoute)

export default app