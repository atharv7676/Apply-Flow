import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb Connected")
    } catch (error) {
        console.error(`Connection Error : `, error)
        throw error;
    }
}

export default connectDb;

