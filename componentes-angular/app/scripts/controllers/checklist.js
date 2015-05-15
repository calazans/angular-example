angular.module('componentesAngularApp')
  .controller('CheckListCtrl', function ($scope) {

  	$scope.lista = [
  		{nome:'Material 1',valor:5},
  		{nome:'Material 2',valor:7},
  		{nome:'Material 3',valor:8},
  		{nome:'Material 4',valor:9},
  		{nome:'Material 5',valor:3},
  		{nome:'Material 6',valor:4},
  		{nome:'Material 7',valor:2},
  		{nome:'Material 8',valor:1},
  		{nome:'Material 9',valor:15}
  	];

  	$scope.listaSelecionado=[{nome:'Material 8',valor:1}];

  	$scope.arrumarLista = function(){

  		//$scope.listaSelecionado= JSON.stringify($scope.listaSelecionado);
  	};


  $scope.isChecked = function(id){
      var match = false;
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == id){
          match = true;
        }
      }
      return match;
  };
  
  $scope.allOptions = [
    {
      "id": "1",
      "data": "one",
    },
    {
      "id": "2",
      "data": "two",
    },
    {
      "id": "3",
      "data": "three",
    },
  ];
    
  $scope.data = [
    {
      "id": "1",
      "data": "one",
    },
    {
      "id": "3",
      "data": "three",
    },
  ];

  $scope.sync = function(bool, item){
    if(bool){
      // add item
      $scope.data.push(item);
    } else {
      // remove item
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == item.id){
          $scope.data.splice(i,1);
        }
      }      
    }
  };
  

  });