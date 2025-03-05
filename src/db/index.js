import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);//if there is no operation is perorming ,it will work on 
    }
}

export default connectDB;