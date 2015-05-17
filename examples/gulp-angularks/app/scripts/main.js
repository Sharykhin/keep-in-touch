'use strict'; 

require('../vendor/angular/angular'); // That's right! We can just require angular as if we were in node
require('../vendor/angular-route/angular-route');

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.

var app = angular.module('myApp', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: '../views/index.html',
      controller: WelcomeCtrl
    })
    .otherwise(
    {
      redirectTo: '/'
    });
}]);


angular.element(document).ready(function(){
	angular.bootstrap(document,['myApp']);
});
