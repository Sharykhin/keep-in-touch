var app =  angular.module('myApp').run(
     ['$rootScope','UserService','$state','$timeout',
     function($rootScope,UserService,$state,$timeout){ 
       
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){                             
                console.log(UserService);             
          	if (angular.isDefined(toState.access)) {
                    // Check if User has appropriate access level
                    if (UserService.access !== toState.access && UserService.access < toState.access) {                       
                        
                         if(UserService.isLogged === false && toState.access !== 1) {     
                              UserService.checkAuth(function(data){
                                   console.log(data);
                                   if(data.success === false) {
                                     $state.go('sign_in');   
                                   }                                   
                              });                                               
                         } else {
                               $timeout(function() {$state.go('forrbiden') },1);
                         }                          
                    }                          
          	}

	    });
}]);