define([
    '../module',
    '../module.config',
    '../../../config'
],function(module,moduleConfig, appConfig){
   'use strict';

    var name = moduleConfig.name + '.HomeController';

    var dependencies = ['$scope','$http'];

    var controller = function($scope,$http) {
    		$http.get(appConfig.apiHost + ':' + appConfig.apiPort).
			  success(function(data, status, headers, config) {
			    console.log(data);
			  }).
			  error(function(data, status, headers, config) {
			    console.log(data);
			    
			  });
    };

    module.controller(name,dependencies.concat(controller));

});