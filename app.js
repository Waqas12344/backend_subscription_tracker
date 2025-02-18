import express from "express";
import { PORT } from "./config/env.js";
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
const app = express();

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/subscriptinos",subscriptionRouter)

app.get("/",(req,res)=>{
    res.send("welcome to the subscription tracker API")
})
app.listen(PORT,()=>{
console.log("Server runing on port 3000")
})

export default app;