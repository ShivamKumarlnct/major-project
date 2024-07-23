const express=require("express");
const app=express();
const mongoose=require("mongoose");




async function main(){
    await mongoose.connect("");
}



// ------server-open-----------
app.get("/",(req,res)=>{
    res.send("hi i m server");
})
// --------port---------------
app.listen(8080,()=>{
    console.log("success");
})