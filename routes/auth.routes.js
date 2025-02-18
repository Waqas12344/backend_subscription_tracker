import { Router } from "express";

const authRouter =Router();
authRouter.post("/sign-up",(req,res)=>{
    return res.send({
        title:"Sign UP"
    })
});

authRouter.post("/sign-in",(req,res)=>{
    return res.send({
        title:"Sign in"
    })
})
authRouter.post("/sign-out",(req,res)=>{
    return res.send({
        title:"Sign out"
    })
})


export default authRouter