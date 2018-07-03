app.controller("ctrl", ($scope, calcfactory) => {
    console.log("Controller Loaded...");
    $scope.addIt = () => {
        console.log('Add call ', $scope.firstnumber, " ", $scope.secondnumber);
        // var sum = parseInt($scope.firstnumber) + parseInt($scope.secondnumber);
        $scope.result = calcfactory.add($scope.firstnumber, $scope.secondnumber);
    }
});