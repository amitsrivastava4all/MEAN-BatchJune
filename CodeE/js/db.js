const productOperations = {
    addProduct(productObject){
        firebase.database().ref('products/'+productObject.id).set(productObject);
        alert("Record Added....");

    }

}