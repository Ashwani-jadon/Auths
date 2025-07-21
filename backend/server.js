import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./Routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const server=express()

// middlewares
server.use(express.json());
server.use(cookieParser());  //alow to parse cookie and chek auth 
server.use(cors({
    origin: "http://localhost:5173", // React app origin
    credentials: true,               // allows cookies to be sent
}));

const port=process.env.PORT;
server.use("/api/v1/user",authRouter);
server.listen(port,()=>{
    connectDb();
    console.log("server is running on port",port);
})