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
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
