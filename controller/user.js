
const User=require("../models/user");

module.exports.rendersignup=(async(req,res)=>{
    res.render("user/signup.ejs");
});



module.exports.usersignup=(async(req,res)=>{
    try{
    
    let {username ,email,password}=req.body;
    const newUser=new User({email,username});
    console.log(newUser);
    const registerUser=await User.register(newUser,password);
    console.log(registerUser);
    req.login(registerUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","user was registered successfully");
        res.redirect("/listings");
    })
  
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
});

module.exports.renderlogin=(async(req,res)=>{
    res.render("user/login.ejs");
});

module.exports.userlogin=(async(req,res)=>{
    req.flash("success","welcome to WanderLust You are logged in!")
    res.redirect("/listings");
});

module.exports.userlogout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
        next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listings");
    });
}
