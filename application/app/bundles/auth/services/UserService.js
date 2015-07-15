'use strict';

UserService.$inject = ['$http', 'Access'];

function UserService($http, Access) {
    console.log(Access);
    var user = {
        isLogged: false,
        hash: null,
        access: Access.annon,
        data: {}

    };

    return user;
}

module.exports = UserService;

