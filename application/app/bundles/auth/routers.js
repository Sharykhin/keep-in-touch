'use strict';

var app = angular.module('myApp');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'AccessProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider, AccessProvider) {
        // Get the access provider
        var access = AccessProvider.$get();
        // Set a default url
        $urlRouterProvider.otherwise('/');

        // Now set up the states      
        $stateProvider

            .state('sign_in', {
                url: '/sign-in',
                views: {
                    'content': {
                        templateUrl: 'bundles/auth/views/sign_in.html',
                        controller: 'auth.AuthController'
                    }
                },
                access: access.annon
            })
            .state('sign_up', {
                url: '/sign-up',
                views: {
                    'content': {
                        templateUrl: 'bundles/auth/views/sign_up.html',
                        controller: 'auth.AuthController as authCtrl'
                    }
                }
            })
            .state('sign_out', {
                url: '/sign-out',
                views: {
                    'content': {
                        controller: 'auth.SighOutController'
                    }
                },
                access: access.annon
            });

}]); // end app.config

