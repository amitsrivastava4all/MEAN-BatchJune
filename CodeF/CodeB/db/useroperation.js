const User = require("./schema/userschema");
const userOperations = {

  addNewUser(userObject){
    User.create(userObject,(err)=>{
        if(err){
          console.log("Error in Record added...");
        }
        else{
          console.log("record Added");
        }
    })
  },
  fetchUser(userObject){
    User.find({'userid':userObject.uid,'password':userObject.pwd},(err,docs)=>{
      if(err){
        console.log("Error During Fetch");
      }
      else{
        if(docs && docs.length>0){
          console.log("record Found....",docs[0]);
        }
        else{
          console.log("Invalid Userid or Password");
        }
      }
    })
  }
}
module.exports = userOperations;
