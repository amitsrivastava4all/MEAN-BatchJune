const calcObject = {
  add(a,b){
    return a + b;
  },
  sub(a,b){
    return a- b;
  }
}
const calcObject2 = {
  mul(a,b){
    return a * b;
  }
}
const allObject = {calcObject,calcObject2};
module.exports = allObject;
// function add(a,b){
//   return a + b ;
// }
// function subtract(a,b){
//   return a - b;
// }
// module.exports.add1 = add;
// module.exports.sub = subtract;
