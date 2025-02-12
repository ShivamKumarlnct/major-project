const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapfunc.js");
const { listingSchema,reviewSchema } = require("../schema.js");
const Expresserror = require("../utils/Expresserror.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const message = error.details.map(err => err.message).join(', ');
        throw new Expresserror(400, message);
    } else {
        next();
    }
};

// Get all listings
router.get("/", wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listing/index.ejs", { alllistings });
}));

// New listing form
router.get("/new", wrapAsync(async (req, res) => {
    res.render("listing/new.ejs");
}));

// Create new listing
router.post("/",validateListing, wrapAsync(async (req, res) => {
    const newlisting = new Listing(req.body.listing);
    console.log(newlisting);
    
    await newlisting.save();
    req.flash("success","Listing Credit");
    res.redirect("/listings");
}));

// Show a listing
router.get("/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        req.flash("error", "Sorry, listing not found");
       return res.redirect("/listings");
        throw new Expresserror(404, "Listing not found");
    }
    res.render("listing/show.ejs", { listing });
}));

// Edit listing form
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/edit.ejs", { listing });
}));

// Update listing
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect("/listings");
}));

// Delete listing
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
        throw new Expresserror(404, "Listing not found");
    }
    res.redirect("/listings");
}));


module.exports = router;
