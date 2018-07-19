const fs = require("fs");
var rstream = fs.createReadStream("/Volumes/AmitPassPort/Class-Recording/ReactiveForms.mov");
var wstream = fs.createWriteStream("/Volumes/AmitPassPort/Class-Recording/ReactiveForms22.mov");

console.log("Pipe Start....");
// rstream.on('data',(chunk)=>{
//   wstream.write(chunk);
// })
// rstream.on('error',(err)=>{
//   console.log("Error in Stream");

// })
// rstream.on('end',()=>{

// })
rstream.pipe(wstream);
/*fs.readFile("/Volumes/AmitPassPort/Class-Recording/ReactiveForms.mov",(err, content)=>{
  if(err){
    console.log("Invalid Path ",err);
  }
  else{

    console.log("File Read Done ...");
    fs.writeFile("/Volumes/AmitPassPort/Class-Recording/ReactiveFormsCopy.mov",content,(err)=>{
      if(err){
        console.log("Error in Write....");
      }
      else{
        console.log("Write Done...");
      }
    })
  }
})*/
console.log("Waiting ......");
