'use strict';		

function AuthController($scope,ValidationService,$http) {

	$scope.matchEmail = ValidationService.patterns.email;	

	$scope.showErrors = false;

	function addUser(user) {
		console.log($scope.userForm.name.$error);
		if ($scope.userForm.$invalid) {
				$scope.showErrors = true;
				return false;
		}
		console.log(user);
		$http.post('http://localhost:9090/users',user,{
        	headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}        	
    	})
			.success(function(data,status,headers,config){
				console.log(data)
				if (data.success === false) {
					$scope.userForm.name.$invalid=true;
					$scope.userForm.name.$error={required:true};
					$scope.showErrors = true;
				} else {
					$scope.showErrors = false;
				}

			})
			.error(function(data, status, headers, config) {
				console.log("ERROR");
			    console.log(data)
			});

	}

	$scope.addUser = addUser;	

	$scope.getErrors = ValidationService.getErrors;
	
}

AuthController.$inject=['$scope','ValidationService','$http'];

module.exports = AuthController;

	
