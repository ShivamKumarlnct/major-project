const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapfunc.js");
const Expresserror = require("../utils/Expresserror.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isowner, isLoggedIn, isAuthor} = require("../middleware.js");
const reviewController=require("../controller/review.js");


// create Review
router.post("/",isLoggedIn,
     validateReview, 
     wrapAsync(reviewController.createReview));

// Delete Review
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewController.deleteReview));

module.exports=router;