'use strict';

/**
 * @ngdoc function
 * @name yoexmapleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoexmapleApp
 */
angular.module('yoexmapleApp')
  .controller('MainCtrl', ['$scope',function (s) {
    s.name = "AMIT";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
