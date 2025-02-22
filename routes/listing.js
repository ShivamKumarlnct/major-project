const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapfunc.js");

const Listing = require("../models/listing.js");
const {isLoggedIn,isowner,validateListing}=require("../middleware.js");
const { list } = require("parser");
const listingController=require("../controller/listing.js");


router.route("/")
.get(wrapAsync(listingController.index))
.post(validateListing,isLoggedIn, wrapAsync(listingController.createlisting));

//New listing form
router.get("/new",isLoggedIn,wrapAsync(listingController.renderform));

router.route("/:id")
.get(wrapAsync(listingController.showlisting))
.put(isLoggedIn,isowner, validateListing, wrapAsync(listingController.updatelisting))
.delete(isLoggedIn,isowner, wrapAsync(listingController.deletelisting));


// Edit listing form
router.get("/:id/edit",isLoggedIn,isowner, wrapAsync(listingController.editlisting));

module.exports = router;
