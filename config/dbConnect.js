import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const Dbconnect = mongoose
  .connect("mongodb://127.0.0.1:27017/restAPI", {
    useNewUrlParser: true,
})

export default Dbconnect