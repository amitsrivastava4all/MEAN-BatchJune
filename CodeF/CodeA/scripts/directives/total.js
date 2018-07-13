'use strict';

/**
 * @ngdoc directive
 * @name yoexmapleApp.directive:total
 * @description
 * # total
 */
angular.module('yoexmapleApp')
  .directive('total', function () {
    return {
      //template:'<h2>I am a Directive</h2>'
      templateUrl:'../../views/total.html',
      restrict:'EA',
      link:function(scope,element,args){
        //element[0].innerHTML = element[0].innerHTML + "<h3>New HTML is </h3>";

        var button = document.createElement("button");
        button.innerHTML="Click Me";
        button.addEventListener("click",()=>{
          console.log("Button click");
        })
        element[0].appendChild(button);
        var result = "Amount is "+scope.amount;
        console.log("Result is ",result);
        console.log("Dom is ",element[0]);
        console.log("Args is ",args.tax);
      }
      // controller:function($scope){
      //   $scope.amount = 99000;
      // }
    }
  });
