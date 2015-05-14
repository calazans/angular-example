'use strict';

/**
 * @ngdoc function
 * @name componentesAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the componentesAngularApp
 */
angular.module('componentesAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
