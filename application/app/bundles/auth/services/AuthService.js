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
			.error(function() {
				throw new Error('ajax error request: /sign-out ');
			});
	};

	var _checkAuth = function(callback) {		
			
			$http.get('http://localhost:9090/check-auth')
				.success(function(data){
						if (data.success === true)	{
							UserService.isLogged=true;	
							UserService.access = 2;				
							UserService.data=data.data;
						}
						if (callback) {
							callback.call(null,data);	
						}					
						
				})
				.error(function(){
					throw new Error('ajax error request: /check-auth ');
				}); 
	};

	return  {
		signOut: _signOut,
		checkAuth: _checkAuth
	};
}


module.exports=AuthService;