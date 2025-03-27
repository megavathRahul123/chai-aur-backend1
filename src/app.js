import express from "express";
import cookieParser from "cookie-parser";//user ka cookies acess karo and set karo
import cors from "cors";
import userRouter from "./routes/user.router.js"; // this is the router which is used to route the user request to the user controller

const app = express();


app.use(cors(
    {                                  // this is the middleware which is used to allow the request from the different origin means different domain name 
        origin:process.env.CORS_ORIGIN,//its conects the frontend and backend
        credentials:true
    }
));

//thess are the basic configuration of the express
app.use(express.json({limit:"16kb"}));  // this is the middleware which is used to parse the json data means json data ko bhi aceppt krega
app.use(express.urlencoded({extended:true})); // this is the middleware which is used to parse the urlencoded data  example :url me jake data ko encode krke bhejna
app.use(express.static("public")); // this is the middleware which is used to serve the static files
app.use(cookieParser()); // this is the middleware which is used to parse the cookies

//routes decleration

app.use("/api/v1/users",userRouter); // this is the middleware which is used to use the userRouter

app.get("/",(req,res)=>{ // this is the get request which is used to get the response
    res.send("API is running....") // this is the response which is send to the user
})
export default app;

//localhost:5000/users

