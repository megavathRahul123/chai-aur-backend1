/*
 require("dotenv").config({path:'./env'});
we can create like this but it will no work because it will produce inconsistency in the code
so we have to create the .env file in the root directory
 */
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
import app from "./app.js";
const PORT = process.env.PORT || 5000;

dotenv.config({ 
    path:'.env' // this is the path of the .env file
})

connectDB()
  .then(() => {
    app.listen(PORT, () => { 
      console.log(`app is listening on PORT ${PORT}`); 
    });
  })
  .catch((error) => {
    console.log("ERROR", error);
  });















// this is the one of the process of the conecting the db
/*
(async()=>{
    try {
        await mongoose.connect('${process.env.MONGO_URI}/${')
        app.on("error",(error)=>{
            console.log("ERR",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is litening on PORT ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR",error)
        throw error
    }



}
)
*/