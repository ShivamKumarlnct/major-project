const Listing = require("../models/listing");
module.exports.index=async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listing/index.ejs", { alllistings });
};

module.exports.renderform=async (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.createlisting=async (req, res) => {
    const listing = new Listing(req.body.listing);
    listing.owner = req.user._id;
    await listing.save();
    req.flash("success", "Successfully made a new listing!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.showlisting=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing) {
        req.flash("error", "Sorry, listing not found");
        return res.redirect("/listings");
    }
    res.render("listing/show.ejs", { listing });
};

module.exports.editlisting=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Sorry, listing not found");
        return res.redirect("/listings");
    }
    res.render("listing/edit.ejs", { listing });
};

module.exports.updatelisting=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.deletelisting=async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
        throw new Expresserror(404, "Listing not found");
    }
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}

