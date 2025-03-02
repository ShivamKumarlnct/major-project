const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Listing = require("./models/listing.js");
const path=require("path");
const methodoverride = require('method-override');
app.use(methodoverride('_method'));
const ejsMate=require("ejs-mate");


main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


// ------server-open-----------
app.get("/", (req, res) => {
    res.send("hi i m server");
});

// ---index.ejs-----------
app.get("/listings",async (req,res)=>{
   const alllistings= await Listing.find({});
   res.render("listing/index.ejs",{alllistings});
});

// new create

app.get("/listings/new", (req, res) => {
    res.render("listing/new.ejs");
});
app.post("/listings", async (req,res)=>{
  const newlisting=  new Listing(req.body.listing);
  await newlisting.save();
  res.redirect("/listings");
})

// show route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    // console.log(listing);
    res.render("listing/show.ejs", { listing });
});

// edit
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/edit.ejs", { listing });
});

// Update
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect("/listings");
});
// delete
app.delete("/listing/:id",async(req,res)=>{
        let { id } = req.params;
    await Listing.findByIdAndDelete(id, {...req.body.listing});
        res.redirect("/listings");


} )


// ------test listing-----------
// app.get("/testListing", async (req, res) => {
//     let sampling = new Listing({
//         title: "my new home",
//         description: "this is DN house",
//         Price: 20000000,
//         location: "BIHAR",
//         Country: "INDIA",
//     });
//     await sampling.save();
//     console.log("sampling was done");
//     res.send("Done");
// });
// create error handler

app.use((err,req,res,next),()=>{
    
})

// --------port---------------

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
