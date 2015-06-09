'use strict';

UserService.$inject=['$http'];

function UserService($http) {
	var user = {
		isLogged: false,
		hash: null,
		access:1,
		data: {},
		checkAuth: function(callback) {				
			var $this = this;
			
			$http.get("http://localhost:9090/check-auth")
				.success(function(data,status,headers,config){
						if (data.success === true)	{
							$this.isLogged=true;	
							$this.access = 2;				
							$this.data=data.data;
						}
						if (callback) {
							callback.call(null,data);	
						}					
						
				}); 
		}

	};

	return user;
}

module.exports=UserService;