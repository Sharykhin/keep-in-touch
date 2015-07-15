'use strict';

DefaultController.$inject = ['$scope', '_'];

function DefaultController($scope, _) {
    console.log(_.first([19, 4, 5, 6]));
    $scope.var2 = "Scope blin 22";
    console.log('MY GOD he has seen IT!');
}

module.exports = DefaultController;

