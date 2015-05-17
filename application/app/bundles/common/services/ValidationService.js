'use strict';

function ValidationService () {
	var patterns = {};

	patterns.email = new RegExp("^[a-zA-Z0-9_\.]{1,20}@[a-zA-Z0-9_]{1,20}\.[a-z]{2,4}$");

	return {
		patterns: patterns
	};
}

module.exports = ValidationService
