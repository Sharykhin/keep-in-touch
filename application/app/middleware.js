var app =  angular.module('myApp').run(
     ['$rootScope','UserService','$state','$timeout',
     function($rootScope,UserService,$state,$timeout){
       
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){                             
                             
          	if (angular.isDefined(toState.data) && angular.isDefined(toState.data.logged)) {

          		if(UserService.isLogged === false) {	
                         UserService.checkAuth(function(data){
                              console.log(data);
                              if(data.success === false) {
                                $state.go('sign_in');   
                              }                                   
                         });    				
     				/*$timeout(function(){          					
     					$state.go('sign_in');
     				},1);	*/          				
          		}
          	}

	    });
}]);