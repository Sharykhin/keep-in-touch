'use strict';

SignUpDirective.$inject = ['UserService','StateService','$state','$timeout'];

function SignUpDirective(UserService,StateService,$state,$timeout) {

	function link (scope, element, attrs) {
		
		console.log(StateService.getToState().access);
		scope.User = UserService;		
	}

	return {
		restrict: 'E',
		link : link,
		templateUrl: 'bundles/frontend/directives/signUpBlock/views/signup.html'
	};
}

module.exports = SignUpDirective;