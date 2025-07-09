import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./Routes/user.route.js"
dotenv.config();
const server=express()

// middlewares
server.use(express.json());


const port=process.env.PORT;

server.use("/api/v1/user",authRouter);

server.listen(port,()=>{
    connectDb();
    console.log("server is running on port",port);
})