'use strict';

var config = require('./../config');

var app = angular.module(config.name).run(
     ['$rootScope', 'UserService', 'AccessService', 'StateService', '$state', '$timeout',
     function ($rootScope, UserService, AccessService, StateService, $state, $timeout) {
            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    // add current toState to our Service   
                    StateService.setToState(toState);
                    console.log(UserService);
                    // If user doen't have access show forrbiden page
                    AccessService.checkAccess(toState, function (isAccess) {
                        console.log('is access: ' + isAccess);
                        if (isAccess === false) {
                            $rootScope.$evalAsync(function () {
                                $state.go('forrbiden');
                            });
                        }
                    });
                });
}]);

