const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapfunc.js");

const Listing = require("../models/listing.js");
const {isLoggedIn,isowner,validateListing}=require("../middleware.js");
// const { list } = require("parser");
const listingController=require("../controller/listing.js");

const multer  = require('multer')

const {storage} = require("../cloudconfig.js");
const upload = multer({ storage });

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
upload.single('listing[image]')  ,wrapAsync(listingController.createlisting));




//New listing form
router.get("/new",isLoggedIn,wrapAsync(listingController.renderform));

router.route("/:id")
.get(wrapAsync(listingController.showlisting))
.put(isLoggedIn,isowner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updatelisting))
.delete(isLoggedIn,isowner, wrapAsync(listingController.deletelisting));


// Edit listing form
router.get("/:id/edit",isLoggedIn,isowner, wrapAsync(listingController.editlisting));
// router.get("/:id/edit",isLoggedIn, isowner, wrapAsync(listingController.editlisting));



module.exports = router;
