app.controller("myctrl",function($scope,myfactory){
    $scope.show=function(){
       $scope.result =  $scope.firstNumber + $scope.secondNumber;
    }
    $scope.print=function(){
        $scope.result2 = myfactory.add(90,90);
    }
});