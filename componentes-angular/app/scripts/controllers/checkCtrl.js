

angular.module('componentesAngularApp')
  .controller('CheckCtrl', function ($scope) {

  	$scope.allPermissions = [
	{
		"id" : 1,
		"name" : "ROLE_USER"
	},
	{
		"id" : 2,
		"name" : "ROLE_ADMIN"
	},
	{
		"id" : 3,
		"name" : "ROLE_READ"
	},
	{
		"id" : 4,
		"name" : "ROLE_WRITE"
	} ];


	$scope.selectedPermissions = [
	{
		"id" : 1,
		"name" : "ROLE_USER"
	},
	{
		"id" : 3,
		"name" : "ROLE_READ"
	} ];
    

	$scope.toggleSelection = function toggleSelection(permission)
	{
		var index = $scope.selectedPermissions.indexOfObjectWithProperty('id', permission.id);

		if (index > -1)
		{
			// Is currently selected, so remove it
			$scope.selectedPermissions.splice(index, 1);
		}
		else
		{
			// Is currently unselected, so add it
			$scope.selectedPermissions.push(permission);
		}
	};


  });