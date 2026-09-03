import "./config/env.js";
import app from "./app.js";
import connectDb from "./config/db.js";

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log(`The Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server");
    }
};

startServer();