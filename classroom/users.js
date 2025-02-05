const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("HI,i m root");
});

app.listen(3000,()=>{

})