'use strict';

var name = 'frontend';  
var module = angular.module(name,[]);

//var d = require('./directives/signUpBlock/SignUpDirective');

module
	.controller(name + '.DefaultController', require('./controllers/DefaultController'))	
	.directive('signUpBlock', require('./directives/signUpBlock/SignUpDirective'));
		



