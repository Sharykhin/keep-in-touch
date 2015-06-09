'use strict';



function AccessProvider() {

	function Access() { 
		
		var UserRoles = {

			annon: 1,
			user: 2,
			admin: 4
		}

		return UserRoles;
	}

	this.$get = function() {
		return new Access();
	};
}



module.exports = AccessProvider;

