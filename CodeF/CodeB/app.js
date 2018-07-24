const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoute  = require("./routes/userroutes");
const cors = require("./utils/middlewares/cors");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors);
app.use("/",userRoute);

// app.get('/dologin',(request, response)=>{
//   var userid = request.param('userid');
//   var password = request.param('pwd');
//   if(userid == password){
//     response.send('Welcome User '+userid);
//   }
//   else{
//     response.send('Invalid Userid or Password');
//   }
// })
app.listen(process.env.PORT || 1234,()=>{
  console.log("Server Start...");
})
