'use strict';

API.$inject=['$http']

function API($http) {

	var API_HOST = 'http://localhost:9090';

	var user = {
		signIn: function(data) {
				 
				var promise = $http.post(API_HOST + '/sign-in',data,{
        			headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}        	
    			});
    			return promise;
		},
		signUp: function(data) {
			var promise = $http.post(API_HOST + '/users',data,{
        		headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}        	
    		});
    		return promise;
		}
	}

	return {
		user:user
	}


}

module.exports = API;