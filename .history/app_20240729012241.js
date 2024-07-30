const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Listing = require("./models/listing.js");

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

// ------server-open-----------
app.get("/", (req, res) => {
    res.send("hi i m server");
});
app.get("/listings",(req,res)=>{
    Listing.find({}).then((res)=>{
        console.log(res);
    });
})
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

// --------port---------------
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
