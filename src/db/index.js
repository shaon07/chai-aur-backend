import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const dbData = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Database connected on ✅ ${dbData.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;

