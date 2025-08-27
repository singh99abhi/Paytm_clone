import mongoose from "mongoose"


mongoose.connect("mongodb://localhost:27017").then(()=>{console.log("connected to mongo")})
const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    lastName:{type:String,required:true},
    firstName:{type:String,required:true}

})

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }

})

const User=mongoose.model("users",userSchema)
const account=mongoose.model("accounts",accountSchema)

export {User,account}