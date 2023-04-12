import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

mongoose.set("strictQuery", false);
const Dbconnect = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})

export default Dbconnect