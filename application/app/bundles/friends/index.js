'use strict';

var name = 'friends';
var module = angular.module(name, []);
module
    .controller(name + '.FriendController', require('./controllers/FriendController'));
    

