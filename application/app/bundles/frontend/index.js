'use strict';

var name = 'frontend';  
var module = angular.module(name,[]);
module
	.controller(name + '.DefaultController', require('./controllers/DefaultController'))
	.directive('signUpBlock', require('./directives/SignupDirective'));



