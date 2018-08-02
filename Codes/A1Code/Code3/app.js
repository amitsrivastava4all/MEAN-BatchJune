const express = require("express");
const app =express();

var multer = require("multer");
const path = require("path");
app.use(express.static("public"));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'/uploads/'); // null represent error
    },
    filename: function (req, file, cb) {
        console.log("File ",file);
      cb(null, file.originalname );
    }
  })
   
  var upload = multer({fileFilter: function (req, file, cb) {
      console.log("File is ",file);
    if (path.extname(file.originalname) !== '.xls') {
        
      return cb(new Error('Only XLS are allowed'),false);
    }
else{
    return cb(null,true);
}
}, storage: storage , limits: { fileSize: 1024*1024*2 }}); //2 MB


var uploading = upload.single('imageupload');
app.post('/uploads',(req,res,next)=>{
    uploading(req,res,(err)=>{
        console.log("Inside Uploading..... ");
        if(err){
            console.log("Inside If Condition....");
            res.send("Error Happens ");
        
        }
        else{
            res.send("File Uploaded Done....");
        }
    })
   
});

app.listen(1234,()=>{
	console.log("Server Start...");
})