'use strict'; 

//Requires bundles
require('./bundles/common/index');
require('./bundles/frontend/index'); // We can use our WelcomeCtrl.js as a module. Rainbows.
require('./bundles/auth/index')
 
var app = angular.module('myApp', ['underscore','ui.router','common','frontend','auth','ngCookies']);

require('./middleware');
//Include routers
require('./routers');

//Run application
angular.element(document).ready(function(){
	angular.bootstrap(document,['myApp']);
});
