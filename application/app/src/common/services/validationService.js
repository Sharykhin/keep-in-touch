define([
	'../module',
	'../module.config'
],function(module, moduleConfig) {
	'use strict';

	var name = 'validationService';
	var dependencies = [];

	module.factory(name,function(){


			var patterns = {};

			patterns.email = new RegExp("^[a-zA-Z0-9_\.]{1,20}@[a-zA-Z0-9_]{1,20}\.[a-z]{2,4}$");

			return {
				patterns: patterns
			};
	});


});