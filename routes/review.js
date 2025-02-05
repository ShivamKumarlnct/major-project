const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapfunc.js");
const Expresserror = require("../utils/Expresserror.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body); 
    if (error) {
        const message = error.details.map(err => err.message).join(', ');
        throw new Expresserror(400, message);
    } else {
        next();
    }
};


router.post("/", validateReview, wrapAsync(async (req, res) => {
    console.log(req.params.id);
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
}));

// Delete Review
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

module.exports=router;