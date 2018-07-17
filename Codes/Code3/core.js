const fs = require("fs");
console.log("Rec Request from Outside");
var content = fs.readFileSync("calc.js");

console.log("First File Content is "+content);

var content2 = fs.readFileSync("caller.js");
console.log("Second` File Content is "+content2);


// fs.readFile('calc.js',(error,content)=>{
//   if(error){
//       console.log("Error is ",error);
//   }
//   else{
//     console.log("Data is ::::::: "+content);
//   }
// });
// fs.readFile('caller.js',(error,content)=>{
//   if(error){
//     console.log("Error is ",error);
//   }
//   else{
//       console.log("Data is $$$$$$ "+content);
//   }
// });
console.log("Now I am Free , What can i do for u");
