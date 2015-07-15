'use strict';

//Requires bundles
require('./bundles/common/index');
require('./bundles/frontend/index'); // We can use our WelcomeCtrl.js as a module. Rainbows.
require('./bundles/auth/index');
require('./bundles/friends/index');

var config = require('./config');


var app = angular.module(config.name, ['underscore', 'ui.router', 'common', 'auth', 'frontend', 'ngCookies','friends']);

require('./moddlewares/access');
//Include routers
require('./routers');

//Run application
angular.element(document).ready(function () {
    angular.bootstrap(document, [config.name]);
});

