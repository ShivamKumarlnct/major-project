const mongoose=require("mongoose");
const schema=mongoose.Schema;

const listingSchema=new Schema({
    title:String,
    description:String,
    image:String,
    Price:Number,
    
})