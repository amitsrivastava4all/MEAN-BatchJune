app.controller("myctrl",function($scope){
    $scope.msg = "Hello Data coming from Controller";
})

app.controller("myctrl2",function($scope,$routeParams){
    $scope.data = $routeParams.name + " "+$routeParams.job;

});

app.controller("mainctrl",function($scope,$location){
    $scope.go=function(){
        $location.path('news');
    }

})