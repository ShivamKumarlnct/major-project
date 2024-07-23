const express=require("express");
const app=express();
const mongoose=require("mongoose");



app.get("/",(req,res)=>{
    res.send("hi i m server");
})
// --------
app.listen(8080,()=>{
    console.log("success");
})