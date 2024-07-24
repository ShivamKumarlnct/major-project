const mongoose=require("mongoose");
const Schema=new mongoose.Schema;

const listingSchema=new Schema({
    title:String,
    description:String,
    image:String,
    Price:Number,
    location:String,
    CountryString,
})