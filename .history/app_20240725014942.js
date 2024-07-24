const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("../models/listing.js")


main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

// ------server-open-----------
app.get("/",(req,res)=>{
    res.send("hi i m server");
})
// ------test listing-----------
app.get("/testLsting",(req,res)=>{
})





// --------port---------------
app.listen(8080,()=>{
    console.log("success");
})