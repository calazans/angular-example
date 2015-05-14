'use strict';

/**
 * @ngdoc overview
 * @name componentesAngularApp
 * @description
 * # componentesAngularApp
 *
 * Main module of the application.
 */
angular
  .module('componentesAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ]).config( function($stateProvider, $urlRouterProvider){
  		
  		$stateProvider.state('home',{url:'/home',templateUrl:'views/main.html',controller:'MainCtrl'});
  		$urlRouterProvider.otherwise('home');
  		
  });
