'use strict';

topNagivationDirective.$inject=['UserService']

function topNagivationDirective(UserService) {

	function link(scope, element, attrs) {
		scope.user = UserService;
	}

	return {
		restrict: 'E',
		link: link,
		templateUrl: 'bundles/frontend/directives/topNavigation/views/navigation.html'
	};

}

module.exports = topNagivationDirective;