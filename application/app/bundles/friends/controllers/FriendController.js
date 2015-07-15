'use strict';

FriendController.$inject=['$scope']

function FriendController($scope) {
	$scope.name="abba";
	console.log('Hello world');
}

module.exports = FriendController;