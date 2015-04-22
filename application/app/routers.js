define([
    'angular',
    './app',
    './src/frontend/module.config',
    './src/backend/module.config'
],function(angular,app,frontendConfig,backendModuleConfig){
    'use strict';

    return app.config(function($routeProvider){
        $routeProvider.when('/',{
           templateUrl: 'src/' + frontendConfig.templatePath + 'index.html',
           controller: frontendConfig.name + '.HomeController'
        });

        $routeProvider.when('/backend',{
           templateUrl:'src/' +  backendModuleConfig.templatePath + 'backend.html',
           controller: backendModuleConfig.name + '.AuthController'
        });

        $routeProvider.when('/backend/event-management',{
           templateUrl:'src/'+ backendModuleConfig.templatePath + '/backend.html',
           controller: backendModuleConfig.name + '.EventsController'

        });
    });
});