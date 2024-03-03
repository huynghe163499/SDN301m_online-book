import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

// method connection to Mongodb
const connectDB = () => {
    try {
        const db = mongoose.connect(process.env.URI_MONGODB);
        console.log("connection to MongoDB");
        return db;
    } catch (error) {
        throw new Error(error.toString());
    }
}
export default connectDB;