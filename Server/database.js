import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const connectDB = () => {
    try {
        const db = mongoose.connect(process.env.URI_MONGODB);
        console.log("Connect successfully");
        return db;
    } catch (error) {
        throw new Error(error.toString());
    }
}
export default connectDB;