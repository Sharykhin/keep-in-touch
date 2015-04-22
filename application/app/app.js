define([
    'angular',
    './config',
    './src/frontend/module.config',
    './src/common/module.config',
    './src/backend/module.config',
    'angular-route',
    'angular-cookies',
    './src/frontend/module.require',
    './src/common/module.require',
    './src/backend/module.require'
],function(angular,config,frontendModuleConfig,commonModuleConfig,backendModuleConfig){
   'use strict';

    var app = angular.module(config.name,[
        'ngRoute',
        'ngCookies',
        frontendModuleConfig.name,
        commonModuleConfig.name,
        backendModuleConfig.name
    ]).run(function(){

    });

    return app;

});