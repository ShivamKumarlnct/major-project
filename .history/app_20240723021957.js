const express=require("express");
const app=express();
const mongoose=require("mongoose");



main().then(()=>{
    console.log("connected to db");
}).catch()
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

// ------server-open-----------
app.get("/",(req,res)=>{
    res.send("hi i m server");
})
// --------port---------------
app.listen(8080,()=>{
    console.log("success");
})