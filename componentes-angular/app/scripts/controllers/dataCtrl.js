angular.module('componentesAngularApp')
  .controller('DataCtrl', function ($scope, $timeout) {
  	$scope.activeDate;
  	$scope.selectedDates = [];
  	$scope.type = 'individual';

   $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  	$scope.open = function() {
    $timeout(function() {
      $scope.opened = true;
    });
  };

 });