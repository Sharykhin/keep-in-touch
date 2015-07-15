'use strict';

var app = angular.module('myApp');

app.config(['$stateProvider','$urlRouterProvider','AccessProvider',
		function($stateProvider,$urlRouterProvider,AccessProvider){

		var access = AccessProvider.$get();
 		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('friends', {				
				url: '/friends', 
				views: {
					'content': {
						templateUrl: 'bundles/friends/views/list.html',
						controller: 'friends.FriendController',
						controllerAs: 'FriendCtrl'
					}
				},
				access: access.user		
			});
			

	}]);