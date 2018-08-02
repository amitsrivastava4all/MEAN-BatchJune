app.factory("myfactory",($http,$q,URL)=>{
var object = {
  callServer(){
    var defer = $q.defer();
    $http.get(URL).then(response=>{
      defer.resolve(response);
    },err=>{
      defer.reject(err);
    })
    return defer.promise;
  }

}
return object;
})
