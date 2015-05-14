// app.js

// require all of the core libraries
//var angular = require('angular');
//require('./vendors/angular/angular.min');

//require('angular-route');

//require('./bundles/frontend');

var angular = require('./public/js/angular/angular-index');
require('./vendors/angular-route/angular-route.min');

// module up
var app = angular.module('app', []);

// routes and such
/*app.config(['$routeProvider', function($routeProvider) {
  console.log('config');
  $routeProvider
    .when('/',
    {
      templateUrl: 'bundles/frontend/views/index.html',
      controller: function() {
        console.log('Yes i am');
      }
    })
    .otherwise(
    {
      redirectTo: '/'
    });
}]);*/

app.run(function(){
  console.log('hello world');
})
