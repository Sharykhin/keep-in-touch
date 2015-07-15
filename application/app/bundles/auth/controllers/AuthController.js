'use strict';

AuthController.$inject = ['$scope', 'ValidationService', 'UserService', '$http', '$location', 'AuthService', 'Access', 'API'];

function AuthController($scope, ValidationService, UserService, $http, $location, AuthService, Access, API) {
    /* jshint validthis: true */
    var vm = this;

    $scope.matchEmail = ValidationService.patterns.email;

    $scope.showErrors = false;

    $scope.addUser = addUser;

    $scope.signIn = signIn;

    function addUser(user) {
        console.log(user);
        if ($scope.userForm.$invalid) {
            $scope.showErrors = true;
            return false;
        }

        API.user.signUp(user)
            .success(function (data, status, headers, config) {
                $scope.showErrors = false;
                if (data.success === false) {
                    if (angular.isDefined(data.errors.validation)) {
                        ValidationService.compare($scope.userForm, data.errors.validation);
                        $scope.showErrors = true;
                    }
                } else {
                    //If everything is ok, sign-in the user
                    signIn(user);                   
                    $scope.$parent.user = {};                    
                }
            })
            .error(function (data, status, headers, config) {
                throw 'Error with http request: ' + data;
            });

    }

    function signIn(user) {
        $scope.FlashMessage = null;
        if ($scope.userForm.$invalid) {
            $scope.showErrors = true;
            return false;
        }

        API.user.signIn(user)
            .success(function (data, status, headers, config) {

                $scope.showErrors = false;
                if (data.success === false) {
                    if (angular.isDefined(data.errors.validation)) {
                        ValidationService.compare($scope.userForm, data.errors.validation);
                        $scope.showErrors = true;
                    } else {
                        $scope.FlashMessage = data.errors;
                    }
                } else {
                    UserService.isLogged = true;
                    UserService.access = data.data.role;
                    UserService.data = data.data;
                    $scope.$parent.user = {};
                    $location.path('/');
                }


            })
            .error(function (data, status, headers, config) {
                throw 'Error with http request: ' + data;
            });
    }

    $scope.getErrors = ValidationService.getErrors;


}

module.exports = AuthController;

