define([
    'angular',
    './app',
    './src/frontend/module.config' ,
    './src/auth/module.config' 
],function(angular,app,frontendConfig,authConfig){
    'use strict';

    return app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/");
     
      // Now set up the states
      $stateProvider
        .state('home', {
            url: "/",
            views : {
                'content' : {
                    templateUrl:  'src/' + frontendConfig.templatePath + 'index.html',
                    controller: frontendConfig.name + '.HomeController'
            }            
          }           
        })        
        .state('home.list',{
            url: "/admin",
            views: {
                'content' : {
                    templateUrl: 'src/' + frontendConfig.templatePath + 'index.html',
                    controller: frontendConfig.name + '.HomeController'
                }
            }           
        })
        .state('sign_in',{
            url: '/sign-in',
            views: {
                'content' : {
                    templateUrl : 'src/auth/views/login.html',
                    controller: authConfig.name + '.AuthController'
                }
            }
        })       
    });
});