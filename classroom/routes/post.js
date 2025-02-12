const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("HI,GET for posts");
});
router.get("/:id",(req,res)=>{
    res.send("find the post id");
});
router.post("/",(req,res)=>{
    res.send("post for post");
});
router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
});

module.exports=router;