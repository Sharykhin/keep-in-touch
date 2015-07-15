'use strict';

topNagivationDirective.$inject = ['UserService'];

function topNagivationDirective(UserService) {

    var controller = ['$scope', function ($scope) {
        $scope.user = UserService;
	}];

    return {
        restrict: 'E',
        scope: {},
        controller: controller,
        templateUrl: 'bundles/frontend/directives/topNavigation/views/navigation.html'
    };

}

module.exports = topNagivationDirective;

