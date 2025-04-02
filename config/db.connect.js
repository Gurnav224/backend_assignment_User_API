import mongoose from "mongoose";
import { config } from "dotenv";
config()


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}`,{dbName:'user_DB'});
        if(connection){

            console.log(`successfully connected to database`)
        }
    } catch (error) {
        console.error(`failure to connect the database`)
    }
}