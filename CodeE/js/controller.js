
window.addEventListener("load",init);

var counter ;
var id ;
const increment=()=>{
    id = counter.next().value;
    document.querySelector("#pid").innerHTML = id;
}
function init(){
    document.querySelector("#add").addEventListener("click",add);
    counter = autGen();
    increment();
   
}
function add(){
    var price = document.querySelector("#price").value;
    var url = document.querySelector("#url").value;
    var productObject = new Product(id, price, url);
    productOperations.addProduct(productObject);
    increment();
}