'use strict';

/**
 * @ngdoc filter
 * @name yoexmapleApp.filter:titlecase
 * @function
 * @description
 * # titlecase
 * Filter in the yoexmapleApp.
 */
angular.module('yoexmapleApp')
  .filter('titlecase', function () {
    return function (name,arg) {
      return arg+" " +name.charAt(0).toUpperCase() +name.substring(1) ;
      // + name.substring(1).toLowerCase();
    };
  });
