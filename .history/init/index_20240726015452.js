const mongoose=require("mongoose");
const initdb=require("./data.js");
const Listing=require("./models/listing.js");

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wander');
}

const initdb= async ()=>{
    Listing.deleteMany({});
    
}