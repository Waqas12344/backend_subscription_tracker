import { Router } from "express";


const userRouter=Router();

userRouter.get("/",(req,res)=>{
    return res.send(
        {title:"get all users"}
    )
})
userRouter.get("/:id",(req,res)=>{
    return res.send(
        {title:"get user details"}
    )
})
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