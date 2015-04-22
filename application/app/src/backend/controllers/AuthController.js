define([
    '../module',
    '../module.config'
],function(module,moduleConfig){
   'use strict';

    var name = moduleConfig.name + '.AuthController';

    var dependencies = ['$scope','$cookieStore','$http','authUrl','userUrl'];

    var controller = function($scope,$cookieStore,$http,authUrl,userUrl) {

//      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        var uid = $cookieStore.get('uid');

        $scope.error=null;

        $scope.template=false;

        if(uid !== undefined) {
            $http.get(userUrl+uid,{withCredentials : true}).success(function(response){
                if(response.id == uid) {
                    $scope.template='dashboard.html'
                }
            });
        } else {
            $scope.template = 'login.html';
        }


        $scope.getTemplate = function() {
            return $scope.template ? 'src/backend/templates/' + $scope.template : false;
        }

        $scope.authenticate = function() {
            $scope.error=null;

            $http.post(authUrl,{username:this.username,password:this.password})
                .success(function(response){
                    $cookieStore.put('uid',response.uid);
                    $scope.template='dashboard.html';
                })
                .error(function(response){
                    var status = response.status;
                    if(status == 401) {
                        $scope.error = 'Bad credentials';
                    }
                });
        };

        $scope.getBackendTemplate = function() {
            return 'src/backend/templates/hello.html';
        };

        $scope.legend = 'Login form';

    };

    module
        .constant('authUrl','http://localhost:2403/users/login')
        .constant('userUrl','http://localhost:2403/users/')
        .controller(name,dependencies.concat(controller));

});