const express = require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapfunc.js");
const passport=require("passport");
const LocalStraregy=require("passport-local");
const userController=require("../controller/user.js");

router.route("/signup")
.get(wrapAsync(userController.rendersignup))      
.post(wrapAsync(userController.usersignup));

router.route("/login")
.get(userController.renderlogin)
.post(passport.authenticate('local', { failureRedirect: '/login' ,failureFlash:true}),userController.userlogin);





// router.get("/signup",userController.rendersignup);

// router.post("/signup",wrapAsync(userController.usersignup));

// router.get("/login",userController.renderlogin);


// router.post("/login",passport.authenticate('local', { failureRedirect: '/login' ,failureFlash:true}),userController.userlogin);
// this is logout method
router.get("/logout",userController.userlogout);




module.exports=router;

