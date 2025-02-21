import express from "express";
import { PORT } from "./config/env.js";
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authorize from "./middleware/auth.middleware.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(arcjetMiddleware)

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",authorize,userRouter)
app.use("/api/v1/subscription",subscriptionRouter)

app.use(errorMiddleware);

app.get("/",(req,res)=>{
    res.send("welcome to the subscription tracker API")
})
app.listen(PORT,async()=>{
console.log("Server runing on port 5500");

await connectToDatabase()
})

export default app;