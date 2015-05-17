'use strict'; 

require('./vendor/angular/angular'); // That's right! We can just require angular as if we were in node
require('./vendor/angular-ui-router/release/angular-ui-router');

require('./bundles/frontend/index'); // We can use our WelcomeCtrl.js as a module. Rainbows.


var app = angular.module('myApp', ['ui.router','frontend']).run(['$rootScope',function($rootScope){

  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){ 
              console.log("State change");
    });

}]);


require('./routers');


angular.element(document).ready(function(){
	angular.bootstrap(document,['myApp']);
});
