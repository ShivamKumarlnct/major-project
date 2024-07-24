const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const listingSchema=new Schema({
    title:{
      type:String,
      required:true,

    },
    description:String,
    image:{
        String,
    Price:Number,
    location:String,
    CountryString,
});

const Listing=mongoose.model("Listing", listingSchema);

module.exports=Listing;