'use strict';

UserService.$inject=['$http','$cookieStore'];

function UserService($http,$cookieStore) {
	var user = {
		isLogged: false,
		hash: null,
		access:1,
		data: {},
		checkAuth: function(callback) {		
			console.log($cookieStore)	
			
			$http.get("http://localhost:9090/check-auth")
				.success(function(data,status,headers,config){						
						callback.call(null,data);					
				}); 
		}

	};

	return user;
}

module.exports=UserService;