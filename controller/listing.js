const Listing = require("../models/listing");
module.exports.index=async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listing/index.ejs", { alllistings });
};

module.exports.renderform=async (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.createlisting = async (req, res, next) => {
    if (!req.file) {
        req.flash("error", "Image upload failed or no image provided");
        return res.redirect("/listings/new");
    }

    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url, filename);

    const listing = new Listing(req.body.listing);
    listing.owner = req.user._id;
    listing.image = { url, filename };
    await listing.save();

    req.flash("success", "Successfully made a new listing!");
    res.redirect("/listings");
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
    let originalImageUrl=listing.image.url;
        originalImageUrl.replace("/upload","/upload/w_250,h_300,c_thumb");
    res.render("listing/edit.ejs", { listing,originalImageUrl });
};

module.exports.updatelisting=async (req, res) => {
    let { id } = req.params;
  let listing= await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file!== "undefined" ){

    let url=req.file.path;
    let filename=req.file.filename;
    listing.image = { url, filename };
    await listing.save();
    }
   
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

