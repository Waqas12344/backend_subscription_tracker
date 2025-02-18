import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to the subscription tracker API")
})
app.listen(PORT,()=>{
console.log("Server runing on port 3000")
})

export default app;