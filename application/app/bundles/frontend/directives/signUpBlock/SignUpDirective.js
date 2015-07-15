'use strict';

SignUpDirective.$inject = ['UserService', 'StateService', 'Access', '$state', '$timeout'];

function SignUpDirective(UserService, StateService, Access, $state, $timeout) {

    function link(scope, element, attrs) {

        // Inject UserSevice and Access to view
        scope.User = UserService;
        scope.Access = Access;
    }

    return {
        restrict: 'E',
        replace: true,
        link: link,
        templateUrl: 'bundles/frontend/directives/signUpBlock/views/signup.html'
    };
}

module.exports = SignUpDirective;

