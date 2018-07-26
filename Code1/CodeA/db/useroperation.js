const User = require("./schema/userschema");
const userOperations = {

  addNewUser(userObject){
// var user = new User({'userid':userObject.a,'password':userObject.b});
// user.save(err=>{
//   if(err){

//   }
//   else{

//   }
// })

    User.create(userObject,(err)=>{
        if(err){
          console.log("Error in Record added...");
        }
        else{
          console.log("record Added");
        }
    })
  },
  fetchUser(userObject,response){
    User.find({'userid':userObject.userid,'password':userObject.password},(err,docs)=>{
      if(err){
        response.send("Error During Fetch");
      }
      else{
        if(docs && docs.length>0){
         // response.send("<h1>Welcome...."+docs[0].userid+"</h1>");
         const path = require("path");
         var tempPath = path.normalize(__dirname+"/..");
         console.log("Temp Path ",tempPath);
         var fullPath = path.join(tempPath,"/public/pages/dashboard.html");
        console.log("Full path ",fullPath);
         response.sendFile(fullPath);
        }
        else{
          response.send("Invalid Userid or Password");
        }
      }
    })
  }
}
module.exports = userOperations;
