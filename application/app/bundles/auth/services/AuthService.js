'use strict';

AuthService.$inject=['$http','UserService'];

function AuthService($http,UserService) {

	var _signOut = function(callback) {
		$http.get('http://localhost:9090/sign-out')
			.success(function(data,status,headers,config){
				UserService.isLogged = false;
				UserService.access = 1;
				UserService.data = {};
				if (callback) {callback(data,status,headers,config);}
			})
			.error(function(data, status, headers, config) {

			});
	}

	return  {
		signOut: _signOut
	};
}


module.exports=AuthService;