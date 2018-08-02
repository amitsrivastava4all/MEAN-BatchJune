const cron = require("node-cron");
cron.schedule("59 23 * * *",()=>{
  console.log("Wish Birthday...");
})
