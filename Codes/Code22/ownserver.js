'use strict'
const http = require("http");
const server = http.createServer(handleRequestResponse);
server.listen(process.env.PORT || 1234,()=>{
  console.log("Server Start....");
});
function isStaticFile(url){
  const staticArr = [".html",".js",".jpeg",".css"];
  var ext = "."+url.split(".")[1];
  return staticArr.indexOf(ext)>=0;
}

function handleRequestResponse(request, response){
  var url = request.url;
  var method = request.method;
  response.writeHead(200,{'content-type':'text/html'});
  console.log("URL is ",url);
  // if(url=='/images/login.jpeg' && method=='GET'){
  //   // response.end('login Page');
  //   const path =require("path");
  //   const fullPath = path.join(__dirname,"/public/images/login.jpeg");
  //   const fs = require("fs");
  //   const rstream = fs.createReadStream(fullPath);
  //   rstream.pipe(response);
  //  }
  //  else
  // if(url=='/css/design.css' && method=='GET'){
  //   // response.end('login Page');
  //   response.writeHead(200,{'content-type':'text/css'});
  //   const path =require("path");
  //   const fullPath = path.join(__dirname,"/public/css/design.css");
  //   const fs = require("fs");
  //   const rstream = fs.createReadStream(fullPath);
  //   rstream.pipe(response);
  //  }
  //  else
  // if(url=='/login' && method=='GET'){
  //  // response.end('login Page');
  //  const path =require("path");
  //  const fullPath = path.join(__dirname,"/public/login.html");
  //  const fs = require("fs");
  //  const rstream = fs.createReadStream(fullPath);
  //  rstream.pipe(response);
  // }
 // else

  if(url=='/' && method=='GET')
  {
    url = "/index.html";
    // console.log("Current Dir ",__dirname);
    // const path =require("path");
    // const fullPath = path.join(__dirname,"/public/index.html");
    // console.log("Full Path is ",fullPath);
    // const fs  = require("fs");
    // fs.readFile(fullPath,(err,content)=>{
    //   if(err){
    //     response.end('File Not Found....');
    //   }
    //   else{
    //     response.end(content);
    //   }
    }
    if(isStaticFile(url)){
      if(url.endsWith(".css")){
        response.writeHead(200,{'content-type':'text/css'});
      }
      const path =require("path");
       const fullPath = path.join(__dirname,"/public"+url);
       const fs = require("fs");
       const rstream = fs.createReadStream(fullPath);
       rstream.pipe(response);
    }

    if(url=='/dologin' && method=='POST'){
      //request.headers
      var mydata='';
      request.on('data',(chunk)=>{
        mydata+=chunk;
      });
      request.on('end',()=>{
        console.log("Data is ",mydata);
        var qs = require("querystring");
        var qsObject = qs.parse(mydata);
        console.log("Qs Object ",qsObject);
        if(qsObject.userid == qsObject.pwd){
          response.end('Welcome '+qsObject.userid);
        }
        else{
          response.end('Invalid Userid or Password');
        }
      });



    }

    const urlObject = require("url");
    var urlDetails = urlObject.parse(url,true);
    console.log("URL Details are ",urlDetails);



    if(urlDetails.pathname=='/dologin' && method=='GET'){
      var userid = urlDetails.query.userid;
      var password = urlDetails.query.pwd;
      if(userid==password){
        response.end('Welcome '+userid);
      }
      else{
        response.end('Invalid Userid or Password');
      }
    }

  // console.log("Url is "+url + " and Method is "+method);
    //response.end('<h1>Home Page</h1> <a href="login">Login</a>');




}
