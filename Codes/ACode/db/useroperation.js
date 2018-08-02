const User = require("./schema/userschema");
const passwordHash = require("password-hash");
const logger = require("../utils/applogs");
const userOperations = {

  addNewUser(userObject){
    console.log("Before Password Generate ",userObject.password);
    userObject.password = passwordHash.generate(userObject.password);
    console.log("After Password Generate ",userObject.password);
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
  fetchUser(userObject,request,response){
    logger.debug('Inside Fetch ',userObject.userid);
   // User.find({'userid':userObject.userid,'password':userObject.password},(err,docs)=>{
    User.find({'userid':userObject.userid},(err,docs)=>{
      if(err){
        response.send("Error During Fetch");
      }
      else{
        if(docs && docs.length>0){
          var dbPassword = docs[0].password;
          var result = passwordHash.verify(userObject.password,dbPassword);
          console.log("After Verify ",result);
          if(result){
            request.session.userid  = docs[0].userid;
            // response.send("<h1>Welcome...."+docs[0].userid+"</h1>");
            const path = require("path");
            var tempPath = path.normalize(__dirname+"/..");
            console.log("Temp Path ",tempPath);
            var fullPath = path.join(tempPath,"/public/pages/dashboard.html");
           console.log("Full path ",fullPath);
           console.log("Session Key is ",request.session.id);
           response.render('dashboard',{uid:request.session.userid});
          }
          else{
            response.send('Invalid Userid or password');
          }

        // response.sendFile(fullPath);
        }
        else{
          response.send("Invalid Userid or Password");
        }
      }
    })
  }
}
module.exports = userOperations;
