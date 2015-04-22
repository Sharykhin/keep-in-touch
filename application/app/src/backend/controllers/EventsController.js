define([
    '../module',
    '../module.config'
],function(module, moduleConfig){
   'use strict';

    var name = moduleConfig.name + '.EventsController';

    var dependencies = ['$scope','$cookieStore','$http'];

    var controller = function($scope,$cookieStore,$http) {

        $scope.template='dashboard.html'

        $scope.getTemplate = function() {
            return $scope.template ? 'src/backend/templates/' + $scope.template : false;
        }

        $scope.getBackendTemplate = function() {
            return 'src/backend/templates/events.html';
        };
    };

    module.controller(name,dependencies.concat(controller));

});