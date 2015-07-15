'use strict';
var app = angular.module('myApp');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'AccessProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider, AccessProvider) {
        // Add cookie to each request
        $httpProvider.defaults.withCredentials = true;
        // Get the access provider
        var access = AccessProvider.$get();
        // Set a default url
        $urlRouterProvider.otherwise('/');

        // Now set up the states      
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'bundles/frontend/views/index.html',
                        controller: 'frontend.DefaultController'
                    }
                },
                access: access.annon
            })
            .state('home.list', {
                url: 'admin',
                views: {
                    'list@home': {
                        templateUrl: 'bundles/frontend/views/list.html',
                        controller: 'frontend.DefaultController'
                    }
                },
                access: access.admin
            })
            .state('forrbiden', {
                views: {
                    'content': {
                        templateUrl: 'bundles/common/views/401.html',
                        controller: function () {}
                    }
                }
            }); // end  $stateProvider.state     

}]); // end app.config

//Include auth routers
require('./bundles/auth/routers');

