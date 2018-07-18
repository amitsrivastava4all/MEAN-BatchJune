const obj = require("calc-app-saurabh");
const chalk = require("chalk");
console.log(chalk.red(obj.add(100,200)));
const fs = require("fs");
console.log("Wait for Changes....");




fs.watchFile('caller.js',(current,prev)=>{

  // fs.readFile('caller.js',(er,content)=>{

  // })
  console.log("File Change ",current, prev);
})
