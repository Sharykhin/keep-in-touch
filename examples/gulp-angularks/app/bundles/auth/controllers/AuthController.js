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

	function getErrors(error,patternName) {
		//console.log(error)
		if (angular.isDefined(error)) {
			if (error.required) {
				return 'This field is required';
			} else if (error.pattern) {
				return 'Enter valid ' + patternName;
			} else if (error.minlength) {
				return 'The field should contain at least 6 characters';
			} else if (error.compareTo) {
				return 'Confirm the value';
			}


		}
	}

	$scope.getErrors = getErrors;

	
}

AuthController.$inject=['$scope','ValidationService'];

module.exports = AuthController;

	
