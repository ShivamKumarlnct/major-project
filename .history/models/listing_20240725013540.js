const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const listingSchema=new Schema({
    title:{
      type:String,
      required:true,

    },
    description:String,
    image:{
      type:String,
      re
    }
        ,
    Price:Number,
    location:String,
    CountryString,
});

const Listing=mongoose.model("Listing", listingSchema);

module.exports=Listing;