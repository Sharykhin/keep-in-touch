define([
	'../module',
	'../module.config',
	'../../../config'
],function(module, moduleConfig,appConfig){
	'use strict';		
	
	module.controller(moduleConfig.name + '.AuthController',['$scope','validationService',function($scope,validationService){

			$scope.matchEmail = validationService.patterns.email;	

			$scope.showErrors = false;

			$scope.addUser = function(user) {
				if (user.password !== user.confirm_password) {
					$scope.userForm.$invalid = true;
					$scope.userForm.confirm_password.$invalid=true;
				}
				if ($scope.userForm.$invalid) {
						$scope.showErrors = true;
				}
				
			};

			$scope.getErrors = function(error,patternName) {
				console.log(error)
				if (angular.isDefined(error)) {
					if (error.required) {
						return "This field is required";
					} else if (error.pattern) {
						return "Enter valid " + patternName;
					} else if (error.minlength) {
						return "The field should contain at least 6 characters";
					}


				}
			};
			$scope.compareTo = function(sourceValue, compareValue) {
				return sourceValue == compareValue;
			}	

	}]);
});