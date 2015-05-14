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
    'ui.tree',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ui.calendar', 
    'ngDragDrop'
  ]).config( function($stateProvider, $urlRouterProvider){
  		
  		$stateProvider.state('home',{url:'/home',templateUrl:'views/main.html',controller:'MainCtrl'});
      $stateProvider.state('calendario',{url:'/calendario',templateUrl:'views/calendario.html',controller:'CalendarioCtrl'});
  		$urlRouterProvider.otherwise('home');
  		
  });
