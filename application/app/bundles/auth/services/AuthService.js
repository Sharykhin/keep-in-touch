'use strict';

AuthService.$inject = ['$http', 'UserService', 'Access', 'API'];

function AuthService($http, UserService, Access, API) {

    var _signOut = function (callback) {
        API.user.signOut()
            .success(function (data, status, headers, config) {
                UserService.isLogged = false;
                UserService.access = Access.annon;
                UserService.data = {};
                if (callback) {
                    callback(data, status, headers, config);
                }
            })
            .error(function () {
                throw new Error('ajax error request: /sign-out ');
            });
    };

    var _checkAuth = function (callback) {

        API.user.checkAuth()
            .success(function (data) {
                if (data.success === true) {
                    UserService.isLogged = true;
                    UserService.access = Access.user;
                    UserService.data = data.data;
                }
                if (callback) {
                    callback.call(null, data);
                }

            })
            .error(function () {
                throw new Error('ajax error request: /check-auth ');
            });
    };

    return {
        signOut: _signOut,
        checkAuth: _checkAuth
    };
}


module.exports = AuthService;

