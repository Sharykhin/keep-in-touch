'use strict';

function ValidationService () {
	var patterns = {};

	patterns.email = new RegExp("^[a-zA-Z0-9_\.]{1,20}@[a-zA-Z0-9_]{1,20}\.[a-z]{2,4}$");


	function getErrors(error,rule,message) {
		if (angular.isDefined(error)) {		
			if (error.required) {
				return message || 'This field is required';
			} else if (error.pattern) {
				var rule = angular.isDefined(rule) ? rule : {pattern:'value'};
				return message || 'Enter valid ' + rule.pattern;
			} else if (error.minlength) {
				var rule = angular.isDefined(rule) ? rule : {minlength:8};				
				return message || 'The field should contain at least ' + rule.minlength +' characters';
			} else if (error.compareTo) {
				var rule = angular.isDefined(rule) ? rule : {compareTo:'password'};
				return message || 'Confirm the ' + rule.compareTo;
			}
		}
	}

	return {
		patterns: patterns,
		getErrors: getErrors
	};
}

module.exports = ValidationService
