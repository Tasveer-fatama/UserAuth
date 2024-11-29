import mongoose from 'mongoose'


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:Number,
        required:true,
        trim:true
    },
    cpassword:{
        type:Number,
        required:true,
        trim:true
    },
})

const  User =mongoose.model("users",userSchema);
export default User;