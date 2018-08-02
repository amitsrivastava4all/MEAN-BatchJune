const express = require("express");
const passport  = require("passport");
const userRoute = express.Router();
const logger = require("../utils/applogs");
userRoute.get('/givemejson',(req,res)=>{
  // call to the DB and get the JSON
  var object = {id:1001,name:'Ram',status:'A'};
  res.json(object);
})
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
  logger.debug('I am Inside DO Login '+userid);
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
    logger.debug('I am Outside DO Login '+userid);
  });
  userRoute.get('/loginwithgoogle',passport.authenticate('google',{
    scope:['profile']
  }));
  userRoute.get('/google/callback',passport.authenticate('google',{session:false}),(request,response)=>{
    response.render('dashboard',{'uid':'amit'});
    //response.send('welcome');
  });
 userRoute.get('/questions/:id/:name',(request,response)=>{
   var id = request.params['id'];
   console.log("Id ",id);
   var question = {id:10, name:'JS Stands for',ans1:'JavaScript',ans2:'Java Snake',ans3:'Both',ans4:'None of These',score:5};
   var question2 = {id:11, name:'JVM Stands for',ans1:'JavaScript',ans2:'Java Snake',ans3:'Both',ans4:'None of These',score:5};

   var questions = [question,question2];
   questions = questions.filter(questionObject =>{
    return questionObject.id==id;
   });
   var responseJSON = {
     questions:questions,
     status : 200
   }

   //var json = JSON.stringify(questions);
   response.json(responseJSON);
 })
 userRoute.get('/download',(request,response)=>{
   const fileLocation = '/Users/amit/Documents/MeanBatchJuneExamples/exam/assets/downloads/mobile.jpeg';
   response.download(fileLocation);
 })
module.exports = userRoute;
