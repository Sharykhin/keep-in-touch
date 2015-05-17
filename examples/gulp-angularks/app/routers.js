'use strict'
var app = angular.module('myApp');

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  
   $urlRouterProvider.otherwise("/");

   // Now set up the states
      $stateProvider
        .state('home', {
            url: "/",
            views : {
                'content' : {
                    templateUrl:  'bundles/frontend/views/index.html',
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
            }           
        });    

}]);