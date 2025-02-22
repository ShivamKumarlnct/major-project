const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

const initdb= async ()=>{
   await Listing.deleteMany({});
   initdata.data=initdata.data.map((obj)=>({...obj,owner:"67b23497e9ee73f7dc51a8a4"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initalised");
}
initdb();