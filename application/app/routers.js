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
                    templateUrl : 'src/auth/views/sign_in.html',
                    controller: authConfig.name + '.AuthController'
                }
            }
        })
        .state('sign_up',{
            url: '/sign-up',
            views : {
                'content' : {
                    templateUrl : 'src/auth/views/sign_up.html',
                    controller: authConfig.name + '.AuthController'
                }
            }
        })       
    });
});