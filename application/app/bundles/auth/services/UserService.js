'use strict';

UserService.$inject=['$http'];

function UserService($http) {
	var user = {
		isLogged: false,
		hash: null,
		access:1,
		data: {}		

	};

	return user;
}

module.exports=UserService;