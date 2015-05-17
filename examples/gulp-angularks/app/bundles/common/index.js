'use strict'

var name = 'common';  
var module = angular.module(name,[]);
module.factory('ValidationService', require('./services/ValidationService'))
	.directive('progressBar',require('./directives/progress/progressBarDirective'));
