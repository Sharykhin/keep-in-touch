'use strict';

var config = require('./../config');

var app =  angular.module(config.name).run(
     ['$rootScope','UserService','AccessService','$state','$timeout',
     function($rootScope,UserService,AccessService,$state,$timeout){ 
    console.log($state)   ;
	  $rootScope.$on('$stateChangeStart', 
          function(event, toState, toParams, fromState, fromParams){                             
            console.log(UserService);              
           // If user doen't have access show forrbiden page
           AccessService.checkAccess(toState, function(isAccess){
              if (isAccess === false) {
                $rootScope.$evalAsync(function(){
                  $state.go('forrbiden');    
               }); 
              }
           });
	    });
}]);