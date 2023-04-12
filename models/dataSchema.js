import mongoose from "mongoose";
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        //unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});



const Data = mongoose.model('data', userSchema);

export default Data