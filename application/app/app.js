define([
    'angular',
    './config',
    './src/frontend/module.config',
    './src/common/module.config',
    './src/auth/module.config',
    'angular-ui-route',
    'angular-cookies',   
    './src/frontend/module.require',
    './src/common/module.require',
    './src/auth/module.require'   
],function(angular,config,frontendModuleConfig,commonModuleConfig,authModuleConfig){
   'use strict';

    var app = angular.module(config.name,[
        'ui.router',
        'ngCookies',       
        frontendModuleConfig.name,
        commonModuleConfig.name,
        authModuleConfig.name        
    ]).run(['$rootScope',function($rootScope){
             

         $rootScope.$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
                console.log("State change");
            });

         $rootScope.$on('$stateNotFound', 
            function(event, unfoundState, fromState, fromParams){ 
                console.log(unfoundState.to); // "lazy.state"
                console.log(unfoundState.toParams); // {a:1, b:2}
                console.log(unfoundState.options); // {inherit:false} + default options
            })
         
    }]);

    return app;

});