'use strict';

SignUpDirective.$inject = ['UserService','$state','$timeout'];

function SignUpDirective(UserService,$state,$timeout) {

	function link (scope, element, attrs) {

		$timeout(function(){
			console.log($state.$current.access);
		},1);
		console.log($state.$current.access);
		scope.User = UserService;		
	}

	return {
		restrict: 'E',
		link : link,
		templateUrl: 'bundles/frontend/directives/signUpBlock/views/signup.html'
	};
}

module.exports = SignUpDirective;