'use strict'
var app = angular.module('myApp');

app.config(['$stateProvider','$urlRouterProvider','$httpProvider','AccessProvider', 
            function($stateProvider, $urlRouterProvider,$httpProvider,AccessProvider){
   $httpProvider.defaults.withCredentials = true;
   var access = AccessProvider.$get();  
   $urlRouterProvider.otherwise("/");

   // Now set up the states
      // Now set up the states
      $stateProvider
        .state('home', {
            url: "/",
            views : {
                'content' : {
                    templateUrl: 'bundles/frontend/views/index.html',
                    controller: 'frontend.DefaultController'
            }
          },
          access: access.annon         
        })        
        .state('home.list',{
            url: "admin",            
            views: {
                'content' : {
                    templateUrl: 'bundles/frontend/views/index.html',
                    controller: 'frontend.DefaultController'
                }
            },
            access: access.admin                   
        })
        .state('sign_in',{
            url: '/sign-in',
            views: {
                'content' : {
                    templateUrl : 'bundles/auth/views/sign_in.html',
                    controller : 'auth.AuthController'                    
                }
            },
            access: access.annon            
        })
        .state('sign_up',{
            url: '/sign-up',
            views : {
                'content' : {
                    templateUrl : 'bundles/auth/views/sign_up.html',
                    controller: 'auth.AuthController as authCtrl'
                }
            }
        })       
        .state('forrbiden',{
            views: {
                'content': {
                    templateUrl : 'bundles/common/views/401.html',
                    controller : function() {}
                }
            }
        })
        .state('sign_out',{
            url:'/sign-out',
            views: {
                'content' : {
                    controller: function(UserService,AuthService,$state) {   
                            if (UserService.isLogged === false) {
                                $state.go('home');
                                return;
                            }                     
                            AuthService.signOut(function(data,status,headers,config) {
                                $state.go('home'); 
                            });
                     }
                }
            },           
            access: access.annon   
        })       

}]);