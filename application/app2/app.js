// app.js

// require all of the core libraries
var angular = require('angular');
//require('./vendors/angular/angular.min');
//require('./vendors/angular-route/angular-route.min');
require('angular-route');

var frontend = require('./bundles/frontend');

// module up
var app = angular.module('app', [ 'ngRoute', frontend ]);

// routes and such
app.config(['$routeProvider', function($routeProvider) {
  console.log('config');
  $routeProvider
    .when('/',
    {
      templateUrl: 'bundles/frontend/views/index.html',
      controller: 'HomeController'
    })
    .otherwise(
    {
      redirectTo: '/'
    });
}]);

app.run(function(){
  console.log('hello world');
})
