'use strict';

/**
 * @ngdoc overview
 * @name componentesAngularApp
 * @description
 * # componentesAngularApp
 *
 * Main module of the application.
 */

/**
 * Searches an array for an object with a specified property.
 * 
 * Example usage:
 * <code>var index = myArray.indexOfObjectWithProperty('id', 123);</code>
 * 
 * @param propertyName the name of the property to inspect
 * @param propertyValue the value to match
 * @returns the (zero-based) index at which the object was found, or -1 if no
 * such object was found
 */
Array.prototype.indexOfObjectWithProperty = function(propertyName, propertyValue)
{
  for (var i = 0, len = this.length; i < len; i++)
  {
    if (this[i][propertyName] === propertyValue) return i;
  }

  return -1;
};


/**
 * Test if an array of objects contains an object with a specified property.
 * 
 * Example usage:
 * <code>var isPresent = myArray.containsObjectWithProperty('id', 123);</code>
 * 
 * @param propertyName the name of the property to inspect
 * @param propertyValue the value to match
 * @returns true if an object was found, false otherwise
 */
Array.prototype.containsObjectWithProperty = function(propertyName, propertyValue)
{
  return this.indexOfObjectWithProperty(propertyName, propertyValue) != -1;
};
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
    'ngDragDrop',
    'gm.datepickerMultiSelect'
  ]).config( function($stateProvider, $urlRouterProvider){
  		
  		$stateProvider.state('home',{url:'/home',templateUrl:'views/main.html',controller:'MainCtrl'});
      $stateProvider.state('calendario',{url:'/calendario',templateUrl:'views/calendario.html',controller:'CalendarioCtrl'});
      $stateProvider.state('checklist',{url:'/checklist',templateUrl:'views/checkboxList.html',controller:'CheckListCtrl'});
      $stateProvider.state('data',{url:'/datepicker',templateUrl:'views/datepicker.html',controller:'DataCtrl'});
      $stateProvider.state('formulario',{url:'/formulario',templateUrl:'views/formulario.html',controller:'FormCtrl'});
  		$urlRouterProvider.otherwise('home');
  		
  });
