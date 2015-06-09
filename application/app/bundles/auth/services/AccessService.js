'use strict';

AccessService.$inject=['$state','UserService'];

function AccessService($state,UserService) {
	var vm = this;

	var _hasAccess = function(toState) {
		var hasAccess = (UserService.access === toState.access) ? true : (UserService.access < toState.access) ? false : true;
		return hasAccess;
	}

	var _checkAccess = function (toState, callback) {
		
		if (angular.isDefined(toState.access)) {
			
			if (_hasAccess(toState) === false) {

				if (UserService.isLogged === false) {

					UserService.checkAuth(function(data) {                               
                                
                        if (data.success === true) {

	                        if (_hasAccess(toState) === false) {
	                        	callback(false);		                         	
                       		} else {
                       			callback(true);	
                       		}                            
                         }                                                       
                    });      
				} else {
					callback(false);					
				}
				
			}
		}		
	}

	return  {
		checkAccess: _checkAccess
	};
}

module.exports=AccessService;