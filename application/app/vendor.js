'use strict'; 
//Require necessary libraries
require('./vendor/angular/angular'); 
require('./vendor/angular-ui-router/release/angular-ui-router');
require('./vendor/angular-cookies/angular-cookies');

var _ = require('./vendor/underscore/underscore');

var underscore = angular.module('underscore', []);
underscore.factory('_', [function() { 
	return _;
}]);