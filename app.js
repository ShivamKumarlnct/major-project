if(process.env.NODE_ENV !== "production"){
require('dotenv').config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodoverride = require('method-override');
const ejsMate = require("ejs-mate");
const session=require("express-session");
const Review = require("./models/review.js");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapfunc.js");
const Expresserror = require("./utils/Expresserror.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const listingsrouter = require("./routes/listing.js");
const reviewsrouter=require("./routes/review.js");
const Userrouter=require("./routes/user.js");

const flash = require("connect-flash");
app.use(methodoverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
const passport=require("passport");
const LocalStraregy=require("passport-local");
const User=require("./models/user.js");

main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

// use session

const sessionOption = {
    secret: "mysupersecrestring",
    resave: false,
    saveUninitialized: true,

    cookie:{
        expires:Date.now() + 1000*60*60*24*7,
        maxAge:1000*60*60*24*7,
        httpOnly:true
    },
  };

  // Home Route
// app.get("/", (req, res) => {
//     res.send("Hi, I'm the server");
// });

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStraregy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
});

// demoUser
// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     });
// let registredUser=await User.register(fakeUser,"helloworld");
//     // console.log(registredUser);
//     res.send(registredUser);

// })





// Use Listings Router
app.use("/listings", listingsrouter);
app.use("/listings/:id/reviews",reviewsrouter);
app.use("/",Userrouter);


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


