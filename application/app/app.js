define([
    'angular',
    './config',
    './src/frontend/module.config',
    './src/common/module.config',
    'angular-route',
    'angular-cookies',
    './src/frontend/module.require',
    './src/common/module.require'   
],function(angular,config,frontendModuleConfig,commonModuleConfig){
   'use strict';

    var app = angular.module(config.name,[
        'ngRoute',
        'ngCookies',
        frontendModuleConfig.name,
        commonModuleConfig.name        
    ]).run(function(){

    });

    return app;

});