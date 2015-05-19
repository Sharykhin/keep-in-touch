'use strict';		

function AuthController($scope,ValidationService) {

	$scope.matchEmail = ValidationService.patterns.email;	

	$scope.showErrors = false;

	function addUser(user) {
		if ($scope.userForm.$invalid) {
				$scope.showErrors = true;
		}
	}

	$scope.addUser = addUser;	

	$scope.getErrors = ValidationService.getErrors;
	
}

AuthController.$inject=['$scope','ValidationService'];

module.exports = AuthController;

	
