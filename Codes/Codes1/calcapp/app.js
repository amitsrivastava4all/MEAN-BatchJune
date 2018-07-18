const print = require("./app2");
const calcObject = {
  add(x,y){
    return (x + y) + " "+print(); ;
  }
}
module.exports = calcObject;
