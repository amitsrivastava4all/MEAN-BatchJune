
window.addEventListener("load",init);

var counter ;
var id ;

function deleteRecord(){
    var id = this.getAttribute("pid");
    console.log("Id for Deletion is ",id);
    var pr = productOperations.deleteRecord(id);
    pr.then(object=>{
        console.log("After Delete Records are ",object);
        printTable(object);
    }).catch(err=>console.log("Error is ",err));
    
}
function printTable(object){
    document.querySelector("#productlist").innerHTML='';
for(let key in object){
    console.log("Key ",key);
   printRecord(object[key]);
}
}

function createIcon(id){
    var img = document.createElement("img");
    img.setAttribute("pid",id);
    img.src="images/delete.png";
    img.className = 'icon';
    img.addEventListener("click",deleteRecord);
    return img;
}
function printRecord(productObject){
    var tbody = document.querySelector("#productlist");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in productObject){
        tr.insertCell(index).innerHTML = productObject[key];
        index++;
    }
    //tr.insertCell(index).innerHTML = "<img src='/images/delete.png' pid="+productObject.id+" onclick="+>";
    tr.insertCell(index).appendChild(createIcon(productObject.id));
    
}

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
    counter = autGen();  // autGen() get the Reference
    increment();
   document.querySelector("#showhide").className = 'hide';
}
function add(){
    var price = document.querySelector("#price").value;
    var url = document.querySelector("#url").value;
    var productObject = new Product(id, price, url);
    productOperations.addProduct(productObject);
    printRecord(productObject);
    increment();
}