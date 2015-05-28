'use strict'; 

//Require neccssary libraries
require('./vendor/angular/angular'); // That's right! We can just require angular as if we were in node
require('./vendor/angular-ui-router/release/angular-ui-router');
var _ = require('./vendor/underscore/underscore');



//Requires bundles
require('./bundles/common/index');
require('./bundles/frontend/index'); // We can use our WelcomeCtrl.js as a module. Rainbows.
require('./bundles/auth/index')

// Add underscore module
var underscore = angular.module('underscore', []);
underscore.factory('_', [function() { 
	return _;
}]);

var app = angular.module('myApp', ['underscore','ui.router','common','frontend','auth'])
	.run(['$rootScope','UserService','$state',function($rootScope,UserService,$state){
  
	  $rootScope.$on('$stateChangeStart', 
	          function(event, toState, toParams, fromState, fromParams){ 
	          	if (angular.isDefined(toState.data) && angular.isDefined(toState.data.required)) {
	          		if(UserService.isLogged === false) {
	          			console.log($state)
	          				$state.go('sign_in');
	          		}
	          	}
	          	  //console.log(toState);
	              //console.log("State change to " + toState.name + ". URL: " + toState.url); 
	              //console.log(UserService);
	    });

}]);

//Include routers
require('./routers');

//Run application
angular.element(document).ready(function(){
	angular.bootstrap(document,['myApp']);
});
