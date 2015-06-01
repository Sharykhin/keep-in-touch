var app =  angular.module('myApp').run(
     ['$rootScope','UserService','$state','$timeout','$cookies',
     function($rootScope,UserService,$state,$timeout,$cookies){
       
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){ 
               
               console.log(UserService);
               
                             
          	if (angular.isDefined(toState.data) && angular.isDefined(toState.data.logged)) {
          		if(UserService.isLogged === false) {	          				
     				$timeout(function(){          					
     					$state.go('sign_in');
     				},1);	          				
          		}
          	}

	    });
}]);