'use strict';

AccessService.$inject = ['$state', 'UserService', 'AuthService'];

function AccessService($state, UserService, AuthService) {

    var _hasAccess = function (toState) {
        var hasAccess = (UserService.access === toState.access) ? true : (UserService.access < toState.access) ? false : true;
        return hasAccess;
    };

    var _checkAccess = function (toState, callback) {
        // If access is defined in router
        if (angular.isDefined(toState.access)) {
            //if user doesn't have appropriate access
            if (_hasAccess(toState) === false) {
                // If user is logged in
                if (UserService.isLogged === false) {
                    // Make request to the server to be sure if user has accesses
                    AuthService.checkAuth(function (data) {

                        if (data.success === true) {
                            // Check again if user has access
                            if (_hasAccess(toState) === false) {
                                callback(false);
                            } else {
                                //if has, call callback with true param
                                callback(true);
                            }
                        } else {
                            callback(false);
                        }
                    });
                } else {
                    // If user is logged and doesn't have access call callback with false params
                    callback(false);
                }
            }
        }
    };
    // export API
    return {
        checkAccess: _checkAccess,
        hasAccess: _hasAccess
    };
}

module.exports = AccessService;

