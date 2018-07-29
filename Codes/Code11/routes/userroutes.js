const express = require("express");
const passport  = require("passport");
const userRoute = express.Router();

userRoute.get('/changeProfile',(request,response)=>{
  if(request.session && request.session.userid){
  response.send('U can Update Your Profile....');
  }
  else{
    response.redirect("login.html");
    //const path = require("path");
        //  var tempPath = path.normalize(__dirname+"/..");
        //  console.log("Temp Path ",tempPath);
        //  var fullPath = path.join(tempPath,"/public/login.html");
        // console.log("Full path ",fullPath);
        // console.log("Session Key is ",request.session.id);

        //  response.sendFile(fullPath);

  }
})
userRoute.post('/dologin',(request,response)=>{
  var userid = request.body.userid;
  var pwd = request.body.pwd;
  var User = require("../models/UserModel");
  var userObject = new User(userid, pwd);
  const userOperations = require("../db/useroperation");
  userOperations.fetchUser(userObject,request,response);
  /*
  if(userid == pwd){
      response.send('Welcome User '+userid);
    }
    else{
      response.send('Invalid Userid or Password');
    }*/
  });
  userRoute.get('/loginwithgoogle',passport.authenticate('google',{
    scope:['profile']
  }));
  userRoute.get('/google/callback',passport.authenticate('google',{session:false}),(request,response)=>{
    response.send('welcome');
  });
 userRoute.get('/questions',(request,response)=>{
   var questions = {id:10, name:'JS Stands for',ans1:'JavaScript',ans2:'Java Snake',ans3:'Both',ans4:'None of These',score:5};
   //var json = JSON.stringify(questions);
   response.json(questions);
 })
 userRoute.get('/download',(request,response)=>{
   const fileLocation = '/Users/amit/Documents/MeanBatchJuneExamples/exam/assets/downloads/mobile.jpeg';
   response.download(fileLocation);
 })
module.exports = userRoute;
