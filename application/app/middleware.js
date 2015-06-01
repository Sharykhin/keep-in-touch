var app =  angular.module('myApp').run(['$rootScope','UserService','$state','$timeout',function($rootScope,UserService,$state,$timeout){
       var list=0;
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){ 
               list++;
               console.log(UserService);
               console.log(list);
          	if (angular.isDefined(toState.data) && angular.isDefined(toState.data.logged)) {
          		if(UserService.isLogged === false) {	          				
     				$timeout(function(){          					
     					$state.go('sign_in');
     				},1);	          				
          		}
          	}	          	  
	    });
}]);