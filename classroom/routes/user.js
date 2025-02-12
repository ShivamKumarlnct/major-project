const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("HI,GET for users");
});
router.get("/:id",(req,res)=>{
    res.send("find the id");
});
router.post("/",(req,res)=>{
    res.send("post for users");
});
router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
});

module.exports=router;