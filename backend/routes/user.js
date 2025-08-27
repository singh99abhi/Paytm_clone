import express from "express";

const userrouter=express.Router()
import { account, User } from "../db.js"
import {z} from "zod"
import jwt from "jsonwebtoken"
import JWT_SECRET from "../config.js"
import  authmiddleware  from "../middleware.js";
const app=express()
app.use(express.json())

const signupschema=z.object({
    username:z.string(),
    password:z.string(),
    lastName:z.string(),
    firstName:z.string()
})
const updateschema=z.object({
    firstName:z.string().optional(),
    lastName:z.string().optional(),
    password:z.string().optional()

})
userrouter.post("/signup",async(req,res)=>{
    
    const body=req.body
    const {success}=signupschema.safeParse(req.body)
    if(!success){
        return res.json({
            message:'incorrect inputs'
        })

        
    }
    
    const exists=await User.findOne({
        username:body.username
    })
    if(exists){
        return res.status(411).json({
            message:"email already taken"
        })
    }
        const user=await User.create(body)
        await account.create({
            userId:user._id,
            balance:1+Math.random()*1000
        })
        return res.status(200).json({
            message:"successfully signed up"
        })

})

userrouter.post("/signin",async(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const user=await User.findOne({username,password})
    if(user){
        const token=jwt.sign({userId:user._id},JWT_SECRET)
        res.json({
            token
        })
    }
    else{
        res.json({
            message:"invalid username or password"
        })
    }
})

userrouter.put("",authmiddleware,async (req,res)=>{
    
    const {success}=updateschema.safeParse(req.body)
    if (!success){
        return res.status(411).json({
            message:"enter good inputs to change"
        })

    }
   
    
        await User.updateOne({_id:req.userId},{
            $set: req.body
        })
        return res.status(200).json({
            message:"user details updated"
        })
    
    
      
})

userrouter.get("/bulk",authmiddleware,async(req,res)=>{
    const filter=req.query.filter || ""
    const users=await User.find({
        $or:[{
            firstName:{
                "$regex":filter

            }
        },{lastName:{
            "$regex":filter
        }}]
    })
          res.json({
            user:users.map(user =>({
                username:user.username,
                firstName:user.firstName,
                lastName:user.lastName,
                userid:user._id

            }))
          })

})
export  {userrouter}