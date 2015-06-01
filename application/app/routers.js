'use strict'
var app = angular.module('myApp');

app.config(['$stateProvider','$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider){
   $httpProvider.defaults.withCredentials = true;
   
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
          }           
        })        
        .state('home.list',{
            url: "/admin",            
            views: {
                'content' : {
                    templateUrl: 'bundles/frontend/views/index.html',
                    controller: 'frontend.DefaultController'
                }
            },
            data: {
                logged: true
            }                   
        })
        .state('sign_in',{
            url: '/sign-in',
            views: {
                'content' : {
                    templateUrl : 'bundles/auth/views/sign_in.html',
                    controller : 'auth.AuthController'
                }
            }
        })
        .state('sign_up',{
            url: '/sign-up',
            views : {
                'content' : {
                    templateUrl : 'bundles/auth/views/sign_up.html',
                    controller: 'auth.AuthController'
                }
            }
        })       

}]);