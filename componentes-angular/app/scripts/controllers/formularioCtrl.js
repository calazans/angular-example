angular.module('componentesAngularApp')
  .controller('FormCtrl', function ($scope) {

  	$scope.validarHora= function(form){
  		$scope.form.horaSelecionada.$setValidity("horario",false);

  	};

  });