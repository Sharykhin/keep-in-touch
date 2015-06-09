'use strict';

var name = 'auth';  
var module = angular.module(name,[]);
module.controller(name + '.AuthController', require('./controllers/AuthController'))
		.factory('UserService', require('./services/UserService'))
		.factory('AccessService', require('./services/AccessService'))
		.factory('AuthService', require('./services/AuthService'))
		.provider('Access',require('./providers/AccessProvider')); 