import express from "express"
import {accrouter} from "./account.js"
import {userrouter} from "./user.js"


const router=express.Router()
router.use("/user",userrouter)
router.use("/accounts",accrouter)

export default router