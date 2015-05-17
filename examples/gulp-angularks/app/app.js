'use strict'; 

//Require neccssary libraries
require('./vendor/angular/angular'); // That's right! We can just require angular as if we were in node
require('./vendor/angular-ui-router/release/angular-ui-router');
require('./vendor/underscore/underscore');



//Requires bundles
require('./bundles/common/index');
require('./bundles/frontend/index'); // We can use our WelcomeCtrl.js as a module. Rainbows.
require('./bundles/auth/index')


var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) { 
  return $window._; // assumes underscore has already been loaded on the page
}]);

var app = angular.module('myApp', ['underscore','ui.router','common','frontend','auth']).run(['$rootScope',function($rootScope){
  
  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){ 
              console.log("State change");
    });

}]);


require('./routers');


angular.element(document).ready(function(){
	angular.bootstrap(document,['myApp']);
});
