import JWT_SECRET from "./config.js"

import jwt from "jsonwebtoken"
export default function(req,res,next){
    const authentication=req.headers.authentication
    
    const token=authentication

    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        if (decoded.userId){
            req.userId=decoded.userId
            next()

        }else{
            return res.status(403).json({
                message:"wrong jwt"
            })
        }
        
        
    }catch(err){
        return res.status(403).json({
            message:"something went wrong"
        })
    }

}

