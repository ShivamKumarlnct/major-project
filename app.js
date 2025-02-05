const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodoverride = require('method-override');
const ejsMate = require("ejs-mate");

const Review = require("./models/review.js");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapfunc.js");
const Expresserror = require("./utils/Expresserror.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const listings = require("./routes/listing.js");
const reviews=require("./routes/review.js");

app.use(methodoverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

// Home Route
app.get("/", (req, res) => {
    res.send("Hi, I'm the server");
});





// Use Listings Router
app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);



// 404 Error Handling
app.all("*", (req, res, next) => {
    next(new Expresserror(404, "Page not found"));
});

// General Error Handling
app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("error.ejs", { message });
});

// Server Listening
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
