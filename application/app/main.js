'use strict';

require.config({
    baseUrl:'/',
    paths: {
        'domReady' : 'vendors/requirejs-domready/domReady',
        'angular' : 'vendors/angular/angular',        
        'angular-ui-route' : 'vendors/angular-ui-router/release/angular-ui-router.min',
        'angular-cookies': 'vendors/angular-cookies/angular-cookies'
    },
    shim : {
        'angular' : {
            exports: 'angular'
        },        
        'angular-ui-route': {
            'deps':['angular']
        },
        'angular-cookies' : {
            'deps' : ['angular']
        }
    }
});

require([
    'angular',
    'config',
    'app',
    'routers'
], function( angular,config){
    angular.element(document).ready(function(){
        angular.bootstrap(document,[config.name]);
    });
});

