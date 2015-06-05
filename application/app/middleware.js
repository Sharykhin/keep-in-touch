'use strict';

var config = require('./config');

var app =  angular.module(config.name).run(
     ['$rootScope','UserService','$state','$timeout',
     function($rootScope,UserService,$state,$timeout){ 
       
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){                             
            console.log(UserService);         

          	if (angular.isDefined(toState.access)) {
                    // Check if User has appropriate access level
                  if (UserService.access !== toState.access && UserService.access < toState.access) {                       
                        console.log(toState.name);
                       if(UserService.isLogged === false && toState.access !== 1) {  

                            UserService.checkAuth(function(data){                               
                                console.log(UserService);
                                 if (data.success === true) {
                                                                  
                                  $rootScope.$evalAsync(function(){                                    
                                    $state.go('forrbiden');                                   
                                  });
                                    
                                 }
                                 if(data.success === false) {

                                  $rootScope.$evalAsync(function(){
                                     $state.go('sign_in');   
                                  }); 
                                                                   
                                 }                                   
                            });                                               
                       } else {

                            $rootScope.$evalAsync(function(){
                              $state.go('forrbiden');
                            });                            
                       }                          
                  }                          
          	}

	    });
}]);