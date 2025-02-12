const express = require("express");
const path = require("path"); 
const app = express();
const userss = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const session = require("express-session");

app.use(cookieParser("secretcode"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
  secret: "mysupersecrestring",
  resave: false,
  saveUninitialized: true,
};

app.set("trust proxy", 1);
app.use(session(sessionOption));
app.use(flash());

app.use((req,res,next)=>{//middleware
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  next();
})

app.get("/register", (req, res) => {
  let { name = "Sk" } = req.query;
  req.session.name = name;

  if(name=="Sk"){
    req.flash("error", "User not registered");

  }else{
  req.flash("success", "User registered successfully!");
  }
  // console.log(req.session.name);
  // res.send(`Registered Name: ${name}`);
  res.redirect("/test");
});

app.get("/test", (req, res) => {
  res.render("page.ejs", { name: req.session.name }); 
});

app.listen(3000, () => {
  console.log("Hi, I am the server running on port 3000");
});
