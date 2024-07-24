const express = require("express");
const app = express();
const mongoose = require("mongoose");

console.log("Current directory:", __dirname);
console.log("Trying to require listing.js from:", path.resolve(__dirname, '../models/listing.js'));

const listing = require("../models/listing.js");

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

// ------test listing-----------
app.get("/testListing", async (req, res) => {
    let sampling = new listing({
        title: "my new home",
        description: "this is DN house",
        price: 20000000,
        location: "BIHAR",
        Country: "INDIA",
    });
    await sampling.save();
    console.log("sampling was done");
    res.send("Done");
});

// --------port---------------
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
