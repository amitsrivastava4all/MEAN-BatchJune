window.addEventListener("load",init);
function init(){
    bindEvents();
}
const convert=(currentNumber)=>isNaN(parseInt(currentNumber))?0:parseInt(currentNumber);

function operation(){
    var firstNumber = convert(document.querySelector("#firstno").value);
    var secondNumber = convert(document.querySelector("#secondno").value);
    var currentOperation = this.getAttribute("data-myoperation");
    console.log("Operation call ",currentOperation);
    var result = mathOperations[currentOperation](firstNumber, secondNumber);
    document.querySelector("#result").innerHTML = result;
}
//const bindEvents=()=>document.querySelectorAll(".opr").forEach(button=>button.addEventListener("click",operation));
function bindEvents(){
    // document.querySelectorAll(".opr").forEach(button=>button.addEventListener("click",operation));
    var buttons = document.querySelectorAll('.opr');
    if(buttons){
    buttons.forEach(button=>button.addEventListener("click",operation));
    }
 }