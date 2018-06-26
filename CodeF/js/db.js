const productOperations = {
    addProduct(productObject){
        firebase.database().ref('products/'+productObject.id).set(productObject);
        alert("Record Added....");

    },
    searchAll(){
        var prodRef = firebase.database().ref('products');
        prodRef.on('value',(snapshot)=>{
            var object = snapshot.val();
            console.log("Object is ",object);
            for(let key in object){
                //console.log(object[key]);
                var obj = object[key];
                for(let k in obj){
                    console.log(obj[k]);
                }
            }
        })
    },
    searchById(id){
        var pr = new Promise((resolve, reject)=>{
            var prodRef = firebase.database().ref('products/'+id);
            // prodRef.remove();
             prodRef.on('value',(snapshot)=>{
                 var object = snapshot.val();
                 resolve(object);
                 console.log("Object is ",object);
     
                 // Printing Code
             })
        })
       return pr;
    }

}