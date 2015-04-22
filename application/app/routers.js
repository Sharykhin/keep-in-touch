define([
    'angular',
    './app',
    './src/frontend/module.config'  
],function(angular,app,frontendConfig){
    'use strict';

    return app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/");
     
      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: 'src/' + frontendConfig.templatePath + 'index.html',
          controller: frontendConfig.name + '.HomeController'
        })
        .state('home.index', {
          url: "/index",
          templateUrl: "partials/state1.list.html",
          controller: function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
          }
        });       
       
    });
});