const User = require("./userschema");
console.log("User Object is ",User);
const userOperations = {
    addNewUser(userObject){
        var userObject = User.build(userObject);
       userObject.save().then(()=>console.log("Record Added")).catch(err=>console.log("Error in Addition"));
    },
    searchUser(userObject){
          User.findOne({
              where:{userid:userObject.userid}
          }).then(user=>{
              console.log("User is ",user);
          }).catch(err=>console.log("Error is ",err));  
    }

}
module.exports = userOperations;