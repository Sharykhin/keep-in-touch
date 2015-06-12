'use strict';		

function AuthController($scope,ValidationService,UserService,$http,$location,AuthService) {
	/* jshint validthis: true */
	var vm = this;

	$scope.matchEmail = ValidationService.patterns.email;	

	$scope.showErrors = false;

	$scope.addUser = addUser;	

	$scope.signIn = signIn;

	function addUser(user) {	
		console.log(user)	;
		if ($scope.userForm.$invalid) {
				$scope.showErrors = true;
				return false;
		}		
		$http.post('http://localhost:9090/users',user,{
        	headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}        	
    	})
			.success(function(data,status,headers,config){				
				$scope.showErrors = false;			
				if (data.success === false) {
					if (angular.isDefined(data.errors.validation)) {
						ValidationService.compare($scope.userForm,data.errors.validation);					
						$scope.showErrors = true;	
					}					
				} else {
					$location.path('/');
				}
				



			})
			.error(function(data, status, headers, config) {
				throw 'Error with http request: ' + data;
			});

	}

	function signIn(user) {		
		$scope.FlashMessage=null;
		if ($scope.userForm.$invalid) {
			$scope.showErrors = true;
			return false;
		}

		$http.post('http://localhost:9090/sign-in',user,{
        	headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}        	
    	})
			.success(function(data,status,headers,config){
			
				$scope.showErrors = false;			
				if (data.success === false) {
					if (angular.isDefined(data.errors.validation)) {
						ValidationService.compare($scope.userForm,data.errors.validation);					
						$scope.showErrors = true;	
					} else {
						$scope.FlashMessage = data.errors;
					}					
				} else {					
					UserService.isLogged=true;	
					UserService.access = 2;				
					UserService.data=data.data;
					$location.path('/');
				}
				



			})
			.error(function(data, status, headers, config) {
				throw 'Error with http request: ' + data;
			});


	}	

	$scope.getErrors = ValidationService.getErrors;
	
	
}

AuthController.$inject=['$scope','ValidationService','UserService','$http','$location','AuthService'];

module.exports = AuthController;

	
