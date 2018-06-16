   // Controller is a file which talk to the view and logic
 window.addEventListener("DOMContentLoaded",init);

 function init(){
     bindEvents();
     fillWithZeros();
 }

   function computeSalary() {
    var salary = document.querySelector("#salary").value;
    console.log("compute Call " + salary);
    salaryOperations.takeSalary(parseFloat(salary));
    printResult();
}

function fillWithZeros(){
    var spans = document.querySelectorAll("span");
    for(let span of spans){
        span.innerText='0';
    }
}

function printResult(){
// document.querySelector("#hra").innerHTML = salaryOperations.hra();
// document.querySelector("#ta").innerHTML = salaryOperations.ta();
for(let key in salaryOperations){
    if(typeof salaryOperations[key]==="function"){
        if(key=='takeSalary'){
            continue;
        }
        document.querySelector('#'+key).innerHTML = salaryOperations[key]();
    }
}
}

function bindEvents(){
    document.querySelector("#compute").addEventListener("click",computeSalary);
}
