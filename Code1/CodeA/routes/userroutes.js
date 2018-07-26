const express = require("express");
const userRoute = express.Router();
userRoute.post('/dologin',(request,response)=>{
  var userid = request.body.userid;
  var pwd = request.body.pwd;
  var User = require("../models/UserModel");
  var userObject = new User(userid, pwd);
  const userOperations = require("../db/useroperation");
  userOperations.fetchUser(userObject,response);
  /*
  if(userid == pwd){
      response.send('Welcome User '+userid);
    }
    else{
      response.send('Invalid Userid or Password');
    }*/
  });
 userRoute.get('/questions',(request,response)=>{
   var questions = {id:10, name:'JS Stands for',ans1:'JavaScript',ans2:'Java Snake',ans3:'Both',ans4:'None of These',score:5};
   //var json = JSON.stringify(questions);
   response.json(questions);
 })
module.exports = userRoute;
