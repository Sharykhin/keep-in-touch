'use strict';

var name = 'common';
var module = angular.module(name, []);
module
    .factory('ValidationService', require('./services/ValidationService'))
    .service('StateService', require('./services/StateService'))
    .directive('progressBar', require('./directives/progress/progressBarDirective'))
    .directive('compareTo', require('./directives/validation/compareToDirective'))
    .factory('API', require('./services/API'));

