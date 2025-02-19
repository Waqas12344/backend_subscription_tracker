import { Router } from "express";
import { getUser, getUsers } from "../contrillers/user.controller.js";


const userRouter=Router();

userRouter.get("/",getUsers)
userRouter.get("/:id",getUser)
userRouter.post("/",(req,res)=>{
    return res.send(
        {title:"create new users"}
    )
})
userRouter.put("/:id",(req,res)=>{
    return res.send(
        {title:"update user "}
    )
})
userRouter.delete("/:id",(req,res)=>{
    return res.send(
        {title:"delete user "}
    )
})

export default userRouter