const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const reviewScheam=new Schema({
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:DataTransfer.now()
    }
})
module.exports=mongoose.model("Review",reviewScheam);