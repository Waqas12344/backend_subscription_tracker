import express from "express";
import { PORT } from "./config/env.js";
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/subscriptinos",subscriptionRouter)

app.use(errorMiddleware);

app.get("/",(req,res)=>{
    res.send("welcome to the subscription tracker API")
})
app.listen(PORT,async()=>{
console.log("Server runing on port 5500");

await connectToDatabase()
})

export default app;