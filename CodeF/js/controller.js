
window.addEventListener("load",init);

var counter ;
var id ;
const increment=()=>{
    id = counter.next().value;
    document.querySelector("#pid").innerHTML = id;
}
function doSearch(){
    document.querySelector("#showhide").className = 'show';
    document.querySelector("#searchid").addEventListener("blur",()=>{
        var id = document.querySelector("#searchid").value;
        var pr = productOperations.searchById(id);
        pr.then(data=>{
            document.querySelector("#result").innerHTML = data.id + " "+data.price+" "+data.url;
        }).catch(err=>{
            console.log("Error is ",err);
        })
        console.log("Change Call ", document.querySelector("#searchid").value);
   
    });
}
function init(){
    
    document.querySelector("#searchall").addEventListener("click",()=>{
        productOperations.searchAll();
    });
    document.querySelector("#search").addEventListener("click",doSearch);
    document.querySelector("#add").addEventListener("click",add);
    counter = autGen();
    increment();
   document.querySelector("#showhide").className = 'hide';
}
function add(){
    var price = document.querySelector("#price").value;
    var url = document.querySelector("#url").value;
    var productObject = new Product(id, price, url);
    productOperations.addProduct(productObject);
    increment();
}