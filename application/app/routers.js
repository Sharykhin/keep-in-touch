define([
    'angular',
    './app',
    './src/frontend/module.config'  
],function(angular,app,frontendConfig){
    'use strict';

    return app.config(function($routeProvider){
        $routeProvider.when('/',{
           templateUrl: 'src/' + frontendConfig.templatePath + 'index.html',
           controller: frontendConfig.name + '.HomeController'
        });
       
    });
});