'use strict';

SignOut.$inject = ['UserService', 'AuthService', '$state'];

function SignOut(UserService, AuthService, $state) {
    if (UserService.isLogged === false) {
        $state.go('home');
        return;
    }
    AuthService.signOut(function (data, status, headers, config) {
        $state.go('home');
    });
}

module.exports = SignOut;

