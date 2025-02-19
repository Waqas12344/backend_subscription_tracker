import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name is required"],
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type:String,
        required:[true,"user email is required"],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,"please fill a valid email address"],

    },
    password:{
        type:String,
        required:[true,"user password is required"],
        trim:true,
        minLength:6,
       
    }
},{Timestamp:true})


const user = mongoose.model("User",userSchema)
export default user