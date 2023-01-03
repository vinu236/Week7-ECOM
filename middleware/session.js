exports.verifyUser=((req,res,next)=>{
   if(req.session.userId && req.session.isLoggedIn){
    next();
   }else{
      res.redirect('/login')
   }
})