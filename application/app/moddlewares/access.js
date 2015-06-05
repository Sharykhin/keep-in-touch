'use strict';

var config = require('./../config');

var app =  angular.module(config.name).run(
     ['$rootScope','UserService','AccessService','$state','$timeout',
     function($rootScope,UserService,AccessService,$state,$timeout){ 
       
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){                             
            console.log(UserService);   
            console.log(AccessService.checkAccess(toState))   ;
           // If user doen't have access show forrbiden page
           if (AccessService.checkAccess(toState) === false) {
             
               $rootScope.$evalAsync(function(){
                  $state.go('forrbiden');    
               }); 
           }          

	    });
}]);