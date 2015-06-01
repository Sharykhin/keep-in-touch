'use strict';

UserService.$inject=['$http'];

function UserService($http) {
	var user = {
		isLogged: false,
		hash: null,
		data: {},
		checkAuth: function(callback) {
			$http.get("http://localhost:9090/check-auth")
				.success(function(data,status,headers,config){	
					if (data.success === false) {
						callback.call(null,data);
					}
				}); 
		}

	};

	return user;
}

module.exports=UserService;