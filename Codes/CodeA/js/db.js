const productOperations = {
    addProduct(productObject){
        try{
        firebase.database().ref('products/'+productObject.id).set(productObject);
        alert("Record Added....");
        }
        catch(e){
            throw new Error();
        }    
    },
    fetchAll(){
        var pr = new Promise((resolve, reject)=>{
            var prodRef = firebase.database().ref('products');
        prodRef.on('value',(snapshot)=>{
            var object = snapshot.val();
            resolve(object);
        });
        });
        return pr;
    },

    deleteRecord(id){
        var prodRef = firebase.database().ref('products/'+id);
        prodRef.remove();
        return this.fetchAll();
    },

    searchByPrice(){

    },
    sort(){
        var productRef = firebase.database().ref("products").orderBy('price');
        productRef.on('value',(snapshot)=>{
            var obj = snapshot.val();
            console.log("After Sort ",obj);
        })
    },
    searchAll(){
       /*  var prodRef = firebase.database().ref('products');
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
        }) */
       /*  var prodRef = firebase.database().ref('products');
        prodRef.on("child_added",(snapshot)=>{
            console.log("Snap Shot is ",snapshot.val());

        }) */
        var prodRef = firebase.database().ref('products');
        prodRef.on("child_changed", function(snapshot) {
            console.log("Child Changed Call ",snapshot);
            var obj = snapshot.val();
            console.log(">>>>>>>>>>>>>Updated from the DB..... " , obj);
          });
          prodRef.on("child_added", function(snap) {
            //count++;
            console.log("added", snap);
          });
          prodRef.on("child_removed", function(snapshot) {
            var obj = snapshot.val();
            console.log("Deleted ",obj);
          });
          // limitToFirst(2)
          // startAt(3)
          // equalTo(2000)  price ==2000
          prodRef.orderByChild("price").equalsTo(200).on("value",(snapshot)=>{
            console.log(snapshot.val());
          });
          // reverse order
          // firebase.database().ref().orderByChild('firstName').limitToFirst(5)
          prodRef.orderByChild("price").limitToLast(2).on("value", function(snapshot) {
            console.log(snapshot.val(),  " was ********* " ,snapshot.val().price );
          });
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