const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js");
const User=require("./user.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    image: {
        default:"https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: String,
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
     
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
});
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
    await Review.deleteMany({_id : {$in: listing.reviews}});
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
