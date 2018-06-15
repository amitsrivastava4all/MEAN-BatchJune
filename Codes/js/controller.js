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
salaryOperations.hra();
}

function bindEvents(){
    document.querySelector("#compute").addEventListener("click",computeSalary);
}
