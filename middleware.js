const Listing=require("./models/listing");
const Expresserror = require("./utils/Expresserror.js");
const { listingSchema, reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { 
        req.flash("error", "You must be logged in to create a listing!");
        return res.redirect("/login");
    }
    next(); 
};

module.exports.saveredirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isowner=async(req,res,next)=>{
    let { id } = req.params;
    let listing= await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error","you don't have permission ");
    return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const message = error.details.map(err => err.message).join(', ');
        throw new Expresserror(400, message);
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body); 
    if (error) {
        const message = error.details.map(err => err.message).join(', ');
        throw new Expresserror(400, message);
    } else {
        next();
    }
};
