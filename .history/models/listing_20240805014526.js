const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        default:"https://unsplash.com/photos/a-pair-of-oranges-and-a-green-bag-on-a-rock-46npZfVf5hk",
        type: String,
        set: (v) => v === "" ? "https://unsplash.com/photos/a-pair-of-oranges-and-a-green-bag-on-a-rock-46npZfVf5hk" : v,
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
