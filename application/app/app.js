define([
    'angular',
    './config',
    './src/frontend/module.config',
    './src/common/module.config',
    'angular-ui-route',
    'angular-cookies',
    './src/frontend/module.require',
    './src/common/module.require'   
],function(angular,config,frontendModuleConfig,commonModuleConfig){
   'use strict';

    var app = angular.module(config.name,[
        'ui.router',
        'ngCookies',
        frontendModuleConfig.name,
        commonModuleConfig.name        
    ]).run(function(){

    });

    return app;

});