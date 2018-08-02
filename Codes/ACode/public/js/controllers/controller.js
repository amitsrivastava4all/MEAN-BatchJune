app.controller("myctrl",($scope,myfactory)=>{
  $scope.getData = ()=>{
    var pr = myfactory.callServer();
    pr.then(data=>{
      $scope.result = data;
    },err=>{
      $scope.err = err;
    })
  }
})
