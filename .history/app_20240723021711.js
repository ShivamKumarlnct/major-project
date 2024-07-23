const express=require("express");
const app=express();
const mongoose=require("mongoose");




aasync function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');


// ------server-open-----------
app.get("/",(req,res)=>{
    res.send("hi i m server");
})
// --------port---------------
app.listen(8080,()=>{
    console.log("success");
})