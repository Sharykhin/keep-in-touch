!function e(n,t,r){function i(s,u){if(!t[s]){if(!n[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=t[s]={exports:{}};n[s][0].call(f.exports,function(e){var t=n[s][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,n){(function(){"use strict";function e(e,n,t,r,i,o,s,u){function a(t){return console.log(t),e.userForm.$invalid?(e.showErrors=!0,!1):void u.user.signUp(t).success(function(r){e.showErrors=!1,r.success===!1?angular.isDefined(r.errors.validation)&&(n.compare(e.userForm,r.errors.validation),e.showErrors=!0):(f(t),e.$parent.user={})}).error(function(e){throw"Error with http request: "+e})}function f(r){return e.FlashMessage=null,e.userForm.$invalid?(e.showErrors=!0,!1):void u.user.signIn(r).success(function(r){e.showErrors=!1,r.success===!1?angular.isDefined(r.errors.validation)?(n.compare(e.userForm,r.errors.validation),e.showErrors=!0):e.FlashMessage=r.errors:(t.isLogged=!0,t.access=r.data.role,t.data=r.data,e.$parent.user={},i.path("/"))}).error(function(e){throw"Error with http request: "+e})}e.$parent.user={},e.matchEmail=n.patterns.email,e.showErrors=!1,e.addUser=a,e.signIn=f,e.getErrors=n.getErrors}e.$inject=["$scope","ValidationService","UserService","$http","$location","AuthService","Access","API"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/controllers/AuthController.js","/bundles/auth/controllers")},{"1YiZ5S":29,buffer:26}],2:[function(e,n){(function(){"use strict";function e(e,n,t){return e.isLogged===!1?void t.go("home"):void n.signOut(function(){t.go("home")})}e.$inject=["UserService","AuthService","$state"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/controllers/SighOutController.js","/bundles/auth/controllers")},{"1YiZ5S":29,buffer:26}],3:[function(e){(function(){"use strict";var n="auth",t=angular.module(n,[]);t.controller(n+".AuthController",e("./controllers/AuthController")).controller(n+".SighOutController",e("./controllers/SighOutController")).factory("UserService",e("./services/UserService")).factory("AccessService",e("./services/AccessService")).factory("AuthService",e("./services/AuthService")).provider("Access",e("./providers/AccessProvider"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/index.js","/bundles/auth")},{"./controllers/AuthController":1,"./controllers/SighOutController":2,"./providers/AccessProvider":4,"./services/AccessService":6,"./services/AuthService":7,"./services/UserService":8,"1YiZ5S":29,buffer:26}],4:[function(e,n){(function(){"use strict";function e(){function e(){var e={annon:1,user:2,admin:4};return e}this.$get=function(){return new e}}n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/providers/AccessProvider.js","/bundles/auth/providers")},{"1YiZ5S":29,buffer:26}],5:[function(e){(function(){"use strict";var e=angular.module("myApp");e.config(["$stateProvider","$urlRouterProvider","$httpProvider","AccessProvider",function(e,n,t,r){var i=r.$get();n.otherwise("/"),e.state("sign_in",{url:"/sign-in",views:{content:{templateUrl:"bundles/auth/views/sign_in.html",controller:"auth.AuthController"}},access:i.annon}).state("sign_up",{url:"/sign-up",views:{content:{templateUrl:"bundles/auth/views/sign_up.html",controller:"auth.AuthController as authCtrl"}}}).state("sign_out",{url:"/sign-out",views:{content:{controller:"auth.SighOutController"}},access:i.annon})}])}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/routers.js","/bundles/auth")},{"1YiZ5S":29,buffer:26}],6:[function(e,n){(function(){"use strict";function e(e,n,t){var r=function(e){var t=n.access===e.access?!0:n.access<e.access?!1:!0;return t},i=function(e,i){angular.isDefined(e.access)&&r(e)===!1&&(n.isLogged===!1?t.checkAuth(function(n){i(n.success===!0?r(e)===!1?!1:!0:!1)}):i(!1))};return{checkAccess:i,hasAccess:r}}e.$inject=["$state","UserService","AuthService"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/AccessService.js","/bundles/auth/services")},{"1YiZ5S":29,buffer:26}],7:[function(e,n){(function(){"use strict";function e(e,n,t,r){var i=function(e){r.user.signOut().success(function(r,i,o,s){n.isLogged=!1,n.access=t.annon,n.data={},e&&e(r,i,o,s)}).error(function(){throw new Error("ajax error request: /sign-out ")})},o=function(e){r.user.checkAuth().success(function(r){r.success===!0&&(n.isLogged=!0,n.access=t.user,n.data=r.data),e&&e.call(null,r)}).error(function(){throw new Error("ajax error request: /check-auth ")})};return{signOut:i,checkAuth:o}}e.$inject=["$http","UserService","Access","API"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/AuthService.js","/bundles/auth/services")},{"1YiZ5S":29,buffer:26}],8:[function(e,n){(function(){"use strict";function e(e,n){console.log(n);var t={isLogged:!1,hash:null,access:n.annon,data:{}};return t}e.$inject=["$http","Access"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/UserService.js","/bundles/auth/services")},{"1YiZ5S":29,buffer:26}],9:[function(e,n){(function(){"use strict";function e(e){return{restrict:"E",scope:{form:"=",model:"=",fields:"="},templateUrl:"bundles/common/directives/progress/progressBar.html",link:function(n){var t=angular.element(document.querySelector('form[name="'+n.form.$name+'"]'));n.progress=0;var r,i=[],o=100/parseInt(n.fields,10);t.on("change",function(t){r=t.target.name;var s=e.contains(i,r),u=t.target.value.replace(/ /g,""),a=!1;if(""===u||s){if(""===u&&s&&0!==n.progress){n.progress-=o;var f=e.indexOf(i,r);delete i[f]}}else a=!0,n.progress+=o;!s&&a&&i.push(r),n.$digest()})}}}e.$inject=["_"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/directives/progress/progressBarDirective.js","/bundles/common/directives/progress")},{"1YiZ5S":29,buffer:26}],10:[function(e,n){(function(){"use strict";var e=function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,n,t,r){r.$validators.compareTo=function(n){return n===e.otherModelValue},e.$watch("otherModelValue",function(){r.$validate()})}}};n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/directives/validation/compareToDirective.js","/bundles/common/directives/validation")},{"1YiZ5S":29,buffer:26}],11:[function(e){(function(){"use strict";var n="common",t=angular.module(n,[]);t.factory("ValidationService",e("./services/ValidationService")).service("StateService",e("./services/StateService")).directive("progressBar",e("./directives/progress/progressBarDirective")).directive("compareTo",e("./directives/validation/compareToDirective")).factory("API",e("./services/API"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/index.js","/bundles/common")},{"./directives/progress/progressBarDirective":9,"./directives/validation/compareToDirective":10,"./services/API":12,"./services/StateService":13,"./services/ValidationService":14,"1YiZ5S":29,buffer:26}],12:[function(e,n){(function(){"use strict";function e(e){var n="http://localhost:9090/api/v1",t={signIn:function(t){var r=e.post(n+"/sign-in",t,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});return r},signUp:function(t){var r=e.post(n+"/users",t,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});return r},signOut:function(){var t=e.get(n+"/sign-out");return t},checkAuth:function(){var t=e.get(n+"/check-auth");return t}};return{user:t}}e.$inject=["$http"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/API.js","/bundles/common/services")},{"1YiZ5S":29,buffer:26}],13:[function(e,n){(function(){"use strict";function e(){function e(e){t=e}function n(){return t}var t={};return{setToState:e,getToState:n}}n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/StateService.js","/bundles/common/services")},{"1YiZ5S":29,buffer:26}],14:[function(e,n){(function(){"use strict";function e(){function e(e,n){if(angular.isDefined(e)){var t;return angular.forEach(e,function(e,i){var o=o||("serverValidation"===i?e:void 0)||void 0;t=r[i](n,o)}),t}}function n(e,n){angular.forEach(n,function(n,t){var r=t.split("."),i=r[0].toLowerCase();if(angular.isDefined(e[i])){var o=e[i];o.$invalid=!0,o.$error={pattern:!0,serverValidation:n}}})}var t={};t.email=new RegExp("^[a-zA-Z0-9_.]{1,20}@[a-zA-Z0-9_]{1,20}.[a-z]{2,4}$");var r={required:function(e,n){return n||"This field is required"},pattern:function(e,n){return e=angular.isDefined(e)?e:{pattern:"value"},n||"Enter valid "+e.pattern},minlength:function(e,n){return e=angular.isDefined(e)?e:{minlength:8},n||"The field should contain at least "+e.minlength+" characters"},compareTo:function(e,n){return e=angular.isDefined(e)?e:{compareTo:"password"},n||"Confirm the "+e.compareTo},email:function(e,n){return n||"Enter valid email"},serverValidation:function(e,n){return n||"Enter valid value"}};return{patterns:t,getErrors:e,compare:n}}n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/ValidationService.js","/bundles/common/services")},{"1YiZ5S":29,buffer:26}],15:[function(e,n){(function(){"use strict";function e(e){e.name="abba",console.log("Hello world")}e.$inject=["$scope"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/friends/controllers/FriendController.js","/bundles/friends/controllers")},{"1YiZ5S":29,buffer:26}],16:[function(e){(function(){"use strict";var n="friends",t=angular.module(n,[]);t.controller(n+".FriendController",e("./controllers/FriendController"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/friends/index.js","/bundles/friends")},{"./controllers/FriendController":15,"1YiZ5S":29,buffer:26}],17:[function(e){(function(){"use strict";var e=angular.module("myApp");e.config(["$stateProvider","$urlRouterProvider","AccessProvider",function(e,n,t){var r=t.$get();n.otherwise("/"),e.state("friends",{url:"/friends",views:{content:{templateUrl:"bundles/friends/views/list.html",controller:"friends.FriendController",controllerAs:"FriendCtrl"}},access:r.user})}])}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/friends/routers.js","/bundles/friends")},{"1YiZ5S":29,buffer:26}],18:[function(e,n){(function(){"use strict";function e(e,n){console.log(n.first([19,4,5,6])),console.log("MY GOD he has seen IT!")}e.$inject=["$scope","_"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/controllers/DefaultController.js","/bundles/frontend/controllers")},{"1YiZ5S":29,buffer:26}],19:[function(e,n){(function(){"use strict";function e(e,n,t){function r(n){n.User=e,n.Access=t}return{restrict:"E",replace:!0,link:r,templateUrl:"bundles/frontend/directives/signUpBlock/views/signup.html"}}e.$inject=["UserService","StateService","Access","$state","$timeout"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/directives/signUpBlock/SignUpDirective.js","/bundles/frontend/directives/signUpBlock")},{"1YiZ5S":29,buffer:26}],20:[function(e,n){(function(){"use strict";function e(e){var n=["$scope",function(n){n.user=e}];return{restrict:"E",scope:{},controller:n,templateUrl:"bundles/frontend/directives/topNavigation/views/navigation.html"}}e.$inject=["UserService"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/directives/topNavigation/topNagivationDirective.js","/bundles/frontend/directives/topNavigation")},{"1YiZ5S":29,buffer:26}],21:[function(e){(function(){"use strict";var n="frontend",t=angular.module(n,[]);t.controller(n+".DefaultController",e("./controllers/DefaultController")).directive("signUpBlock",e("./directives/signUpBlock/SignUpDirective")).directive("topNavigation",e("./directives/topNavigation/topNagivationDirective"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/index.js","/bundles/frontend")},{"./controllers/DefaultController":18,"./directives/signUpBlock/SignUpDirective":19,"./directives/topNavigation/topNagivationDirective":20,"1YiZ5S":29,buffer:26}],22:[function(e,n){(function(){"use strict";var e={name:"myApp"};n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")},{"1YiZ5S":29,buffer:26}],23:[function(e){(function(){"use strict";e("./bundles/common/index"),e("./bundles/frontend/index"),e("./bundles/auth/index"),e("./bundles/friends/index");{var n=e("./config");angular.module(n.name,["underscore","ui.router","common","auth","frontend","ngCookies","friends"])}e("./moddlewares/access"),e("./routers"),angular.element(document).ready(function(){angular.bootstrap(document,[n.name])})}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9f3bcd42.js","/")},{"./bundles/auth/index":3,"./bundles/common/index":11,"./bundles/friends/index":16,"./bundles/frontend/index":21,"./config":22,"./moddlewares/access":24,"./routers":25,"1YiZ5S":29,buffer:26}],24:[function(e){(function(){"use strict";{var n=e("./../config");angular.module(n.name).run(["$rootScope","UserService","AccessService","StateService","$state","$timeout",function(e,n,t,r,i){e.$on("$stateChangeStart",function(o,s){r.setToState(s),console.log(n),t.checkAccess(s,function(n){console.log("is access: "+n),n===!1&&e.$evalAsync(function(){i.go("forrbiden")})})})}])}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/moddlewares/access.js","/moddlewares")},{"./../config":22,"1YiZ5S":29,buffer:26}],25:[function(e){(function(){"use strict";var n=angular.module("myApp");n.config(["$stateProvider","$urlRouterProvider","$httpProvider","AccessProvider",function(e,n,t,r){t.defaults.withCredentials=!0;var i=r.$get();n.otherwise("/"),e.state("home",{url:"/",views:{content:{templateUrl:"bundles/frontend/views/index.html",controller:"frontend.DefaultController"}},access:i.annon}).state("home.list",{url:"admin",views:{"list@home":{templateUrl:"bundles/frontend/views/list.html",controller:"frontend.DefaultController"}},access:i.admin}).state("forrbiden",{views:{content:{templateUrl:"bundles/common/views/401.html",controller:function(){}}}})}]),e("./bundles/friends/routers"),e("./bundles/auth/routers")}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/routers.js","/")},{"./bundles/auth/routers":5,"./bundles/friends/routers":17,"1YiZ5S":29,buffer:26}],26:[function(e,n,t){(function(n,r,i){function i(e,n,t){if(!(this instanceof i))return new i(e,n,t);var r=typeof e;if("base64"===n&&"string"===r)for(e=C(e);e.length%4!==0;)e+="=";var o;if("number"===r)o=L(e);else if("string"===r)o=i.byteLength(e,n);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");o=L(e.length)}var s;i._useTypedArrays?s=i._augment(new Uint8Array(o)):(s=this,s.length=o,s._isBuffer=!0);var u;if(i._useTypedArrays&&"number"==typeof e.byteLength)s._set(e);else if(x(e))for(u=0;o>u;u++)s[u]=i.isBuffer(e)?e.readUInt8(u):e[u];else if("string"===r)s.write(e,0,n);else if("number"===r&&!i._useTypedArrays&&!t)for(u=0;o>u;u++)s[u]=0;return s}function o(e,n,t,r){t=Number(t)||0;var o=e.length-t;r?(r=Number(r),r>o&&(r=o)):r=o;var s=n.length;V(s%2===0,"Invalid hex string"),r>s/2&&(r=s/2);for(var u=0;r>u;u++){var a=parseInt(n.substr(2*u,2),16);V(!isNaN(a),"Invalid hex string"),e[t+u]=a}return i._charsWritten=2*u,u}function s(e,n,t,r){var o=i._charsWritten=F(T(n),e,t,r);return o}function u(e,n,t,r){var o=i._charsWritten=F(k(n),e,t,r);return o}function a(e,n,t,r){return u(e,n,t,r)}function f(e,n,t,r){var o=i._charsWritten=F(M(n),e,t,r);return o}function l(e,n,t,r){var o=i._charsWritten=F(D(n),e,t,r);return o}function c(e,n,t){return R.fromByteArray(0===n&&t===e.length?e:e.slice(n,t))}function d(e,n,t){var r="",i="";t=Math.min(e.length,t);for(var o=n;t>o;o++)e[o]<=127?(r+=N(i)+String.fromCharCode(e[o]),i=""):i+="%"+e[o].toString(16);return r+N(i)}function g(e,n,t){var r="";t=Math.min(e.length,t);for(var i=n;t>i;i++)r+=String.fromCharCode(e[i]);return r}function h(e,n,t){return g(e,n,t)}function m(e,n,t){var r=e.length;(!n||0>n)&&(n=0),(!t||0>t||t>r)&&(t=r);for(var i="",o=n;t>o;o++)i+=j(e[o]);return i}function p(e,n,t){for(var r=e.slice(n,t),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function v(e,n,t,r){r||(V("boolean"==typeof t,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(n>=i)){var o;return t?(o=e[n],i>n+1&&(o|=e[n+1]<<8)):(o=e[n]<<8,i>n+1&&(o|=e[n+1])),o}}function w(e,n,t,r){r||(V("boolean"==typeof t,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(n>=i)){var o;return t?(i>n+2&&(o=e[n+2]<<16),i>n+1&&(o|=e[n+1]<<8),o|=e[n],i>n+3&&(o+=e[n+3]<<24>>>0)):(i>n+1&&(o=e[n+1]<<16),i>n+2&&(o|=e[n+2]<<8),i>n+3&&(o|=e[n+3]),o+=e[n]<<24>>>0),o}}function b(e,n,t,r){r||(V("boolean"==typeof t,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(n>=i)){var o=v(e,n,t,!0),s=32768&o;return s?-1*(65535-o+1):o}}function y(e,n,t,r){r||(V("boolean"==typeof t,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(n>=i)){var o=w(e,n,t,!0),s=2147483648&o;return s?-1*(4294967295-o+1):o}}function S(e,n,t,r){return r||(V("boolean"==typeof t,"missing or invalid endian"),V(n+3<e.length,"Trying to read beyond buffer length")),W.read(e,n,t,23,4)}function E(e,n,t,r){return r||(V("boolean"==typeof t,"missing or invalid endian"),V(n+7<e.length,"Trying to read beyond buffer length")),W.read(e,n,t,52,8)}function A(e,n,t,r,i){i||(V(void 0!==n&&null!==n,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+1<e.length,"trying to write beyond buffer length"),P(n,65535));var o=e.length;if(!(t>=o))for(var s=0,u=Math.min(o-t,2);u>s;s++)e[t+s]=(n&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function B(e,n,t,r,i){i||(V(void 0!==n&&null!==n,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"trying to write beyond buffer length"),P(n,4294967295));var o=e.length;if(!(t>=o))for(var s=0,u=Math.min(o-t,4);u>s;s++)e[t+s]=n>>>8*(r?s:3-s)&255}function I(e,n,t,r,i){i||(V(void 0!==n&&null!==n,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+1<e.length,"Trying to write beyond buffer length"),O(n,32767,-32768));var o=e.length;t>=o||(n>=0?A(e,n,t,r,i):A(e,65535+n+1,t,r,i))}function U(e,n,t,r,i){i||(V(void 0!==n&&null!==n,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"Trying to write beyond buffer length"),O(n,2147483647,-2147483648));var o=e.length;t>=o||(n>=0?B(e,n,t,r,i):B(e,4294967295+n+1,t,r,i))}function _(e,n,t,r,i){i||(V(void 0!==n&&null!==n,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"Trying to write beyond buffer length"),q(n,3.4028234663852886e38,-3.4028234663852886e38));var o=e.length;t>=o||W.write(e,n,t,r,23,4)}function Y(e,n,t,r,i){i||(V(void 0!==n&&null!==n,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+7<e.length,"Trying to write beyond buffer length"),q(n,1.7976931348623157e308,-1.7976931348623157e308));var o=e.length;t>=o||W.write(e,n,t,r,52,8)}function C(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Z(e,n,t){return"number"!=typeof e?t:(e=~~e,e>=n?n:e>=0?e:(e+=n,e>=0?e:0))}function L(e){return e=~~Math.ceil(+e),0>e?0:e}function $(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function x(e){return $(e)||i.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function j(e){return 16>e?"0"+e.toString(16):e.toString(16)}function T(e){for(var n=[],t=0;t<e.length;t++){var r=e.charCodeAt(t);if(127>=r)n.push(e.charCodeAt(t));else{var i=t;r>=55296&&57343>=r&&t++;for(var o=encodeURIComponent(e.slice(i,t+1)).substr(1).split("%"),s=0;s<o.length;s++)n.push(parseInt(o[s],16))}}return n}function k(e){for(var n=[],t=0;t<e.length;t++)n.push(255&e.charCodeAt(t));return n}function D(e){for(var n,t,r,i=[],o=0;o<e.length;o++)n=e.charCodeAt(o),t=n>>8,r=n%256,i.push(r),i.push(t);return i}function M(e){return R.toByteArray(e)}function F(e,n,t,r){for(var i=0;r>i&&!(i+t>=n.length||i>=e.length);i++)n[i+t]=e[i];return i}function N(e){try{return decodeURIComponent(e)}catch(n){return String.fromCharCode(65533)}}function P(e,n){V("number"==typeof e,"cannot write a non-number as a number"),V(e>=0,"specified a negative value for writing an unsigned value"),V(n>=e,"value is larger than maximum value for type"),V(Math.floor(e)===e,"value has a fractional component")}function O(e,n,t){V("number"==typeof e,"cannot write a non-number as a number"),V(n>=e,"value larger than maximum allowed value"),V(e>=t,"value smaller than minimum allowed value"),V(Math.floor(e)===e,"value has a fractional component")}function q(e,n,t){V("number"==typeof e,"cannot write a non-number as a number"),V(n>=e,"value larger than maximum allowed value"),V(e>=t,"value smaller than minimum allowed value")}function V(e,n){if(!e)throw new Error(n||"Failed assertion")}var R=e("base64-js"),W=e("ieee754");t.Buffer=i,t.SlowBuffer=i,t.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new ArrayBuffer(0),n=new Uint8Array(e);return n.foo=function(){return 42},42===n.foo()&&"function"==typeof n.subarray}catch(t){return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},i.byteLength=function(e,n){var t;switch(e+="",n||"utf8"){case"hex":t=e.length/2;break;case"utf8":case"utf-8":t=T(e).length;break;case"ascii":case"binary":case"raw":t=e.length;break;case"base64":t=M(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":t=2*e.length;break;default:throw new Error("Unknown encoding")}return t},i.concat=function(e,n){if(V($(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new i(0);if(1===e.length)return e[0];var t;if("number"!=typeof n)for(n=0,t=0;t<e.length;t++)n+=e[t].length;var r=new i(n),o=0;for(t=0;t<e.length;t++){var s=e[t];s.copy(r,o),o+=s.length}return r},i.prototype.write=function(e,n,t,r){if(isFinite(n))isFinite(t)||(r=t,t=void 0);else{var i=r;r=n,n=t,t=i}n=Number(n)||0;var c=this.length-n;t?(t=Number(t),t>c&&(t=c)):t=c,r=String(r||"utf8").toLowerCase();var d;switch(r){case"hex":d=o(this,e,n,t);break;case"utf8":case"utf-8":d=s(this,e,n,t);break;case"ascii":d=u(this,e,n,t);break;case"binary":d=a(this,e,n,t);break;case"base64":d=f(this,e,n,t);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=l(this,e,n,t);break;default:throw new Error("Unknown encoding")}return d},i.prototype.toString=function(e,n,t){var r=this;if(e=String(e||"utf8").toLowerCase(),n=Number(n)||0,t=void 0!==t?Number(t):t=r.length,t===n)return"";var i;switch(e){case"hex":i=m(r,n,t);break;case"utf8":case"utf-8":i=d(r,n,t);break;case"ascii":i=g(r,n,t);break;case"binary":i=h(r,n,t);break;case"base64":i=c(r,n,t);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=p(r,n,t);break;default:throw new Error("Unknown encoding")}return i},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,n,t,r){var o=this;if(t||(t=0),r||0===r||(r=this.length),n||(n=0),r!==t&&0!==e.length&&0!==o.length){V(r>=t,"sourceEnd < sourceStart"),V(n>=0&&n<e.length,"targetStart out of bounds"),V(t>=0&&t<o.length,"sourceStart out of bounds"),V(r>=0&&r<=o.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-n<r-t&&(r=e.length-n+t);var s=r-t;if(100>s||!i._useTypedArrays)for(var u=0;s>u;u++)e[u+n]=this[u+t];else e._set(this.subarray(t,t+s),n)}},i.prototype.slice=function(e,n){var t=this.length;if(e=Z(e,t,0),n=Z(n,t,t),i._useTypedArrays)return i._augment(this.subarray(e,n));for(var r=n-e,o=new i(r,void 0,!0),s=0;r>s;s++)o[s]=this[s+e];return o},i.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},i.prototype.set=function(e,n){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,n)},i.prototype.readUInt8=function(e,n){return n||(V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},i.prototype.readUInt16LE=function(e,n){return v(this,e,!0,n)},i.prototype.readUInt16BE=function(e,n){return v(this,e,!1,n)},i.prototype.readUInt32LE=function(e,n){return w(this,e,!0,n)},i.prototype.readUInt32BE=function(e,n){return w(this,e,!1,n)},i.prototype.readInt8=function(e,n){if(n||(V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var t=128&this[e];return t?-1*(255-this[e]+1):this[e]}},i.prototype.readInt16LE=function(e,n){return b(this,e,!0,n)},i.prototype.readInt16BE=function(e,n){return b(this,e,!1,n)},i.prototype.readInt32LE=function(e,n){return y(this,e,!0,n)},i.prototype.readInt32BE=function(e,n){return y(this,e,!1,n)},i.prototype.readFloatLE=function(e,n){return S(this,e,!0,n)},i.prototype.readFloatBE=function(e,n){return S(this,e,!1,n)},i.prototype.readDoubleLE=function(e,n){return E(this,e,!0,n)},i.prototype.readDoubleBE=function(e,n){return E(this,e,!1,n)},i.prototype.writeUInt8=function(e,n,t){t||(V(void 0!==e&&null!==e,"missing value"),V(void 0!==n&&null!==n,"missing offset"),V(n<this.length,"trying to write beyond buffer length"),P(e,255)),n>=this.length||(this[n]=e)},i.prototype.writeUInt16LE=function(e,n,t){A(this,e,n,!0,t)},i.prototype.writeUInt16BE=function(e,n,t){A(this,e,n,!1,t)},i.prototype.writeUInt32LE=function(e,n,t){B(this,e,n,!0,t)},i.prototype.writeUInt32BE=function(e,n,t){B(this,e,n,!1,t)},i.prototype.writeInt8=function(e,n,t){t||(V(void 0!==e&&null!==e,"missing value"),V(void 0!==n&&null!==n,"missing offset"),V(n<this.length,"Trying to write beyond buffer length"),O(e,127,-128)),n>=this.length||(e>=0?this.writeUInt8(e,n,t):this.writeUInt8(255+e+1,n,t))},i.prototype.writeInt16LE=function(e,n,t){I(this,e,n,!0,t)},i.prototype.writeInt16BE=function(e,n,t){I(this,e,n,!1,t)},i.prototype.writeInt32LE=function(e,n,t){U(this,e,n,!0,t)},i.prototype.writeInt32BE=function(e,n,t){U(this,e,n,!1,t)},i.prototype.writeFloatLE=function(e,n,t){_(this,e,n,!0,t)},i.prototype.writeFloatBE=function(e,n,t){_(this,e,n,!1,t)},i.prototype.writeDoubleLE=function(e,n,t){Y(this,e,n,!0,t)},i.prototype.writeDoubleBE=function(e,n,t){Y(this,e,n,!1,t)},i.prototype.fill=function(e,n,t){if(e||(e=0),n||(n=0),t||(t=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),V("number"==typeof e&&!isNaN(e),"value is not a number"),V(t>=n,"end < start"),t!==n&&0!==this.length){V(n>=0&&n<this.length,"start out of bounds"),V(t>=0&&t<=this.length,"end out of bounds");for(var r=n;t>r;r++)this[r]=e}},i.prototype.inspect=function(){for(var e=[],n=this.length,r=0;n>r;r++)if(e[r]=j(this[r]),r===t.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},i.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),n=0,t=e.length;t>n;n+=1)e[n]=this[n];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var z=i.prototype;i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=z.get,e.set=z.set,e.write=z.write,e.toString=z.toString,e.toLocaleString=z.toString,e.toJSON=z.toJSON,e.copy=z.copy,e.slice=z.slice,e.readUInt8=z.readUInt8,e.readUInt16LE=z.readUInt16LE,e.readUInt16BE=z.readUInt16BE,e.readUInt32LE=z.readUInt32LE,e.readUInt32BE=z.readUInt32BE,e.readInt8=z.readInt8,e.readInt16LE=z.readInt16LE,e.readInt16BE=z.readInt16BE,e.readInt32LE=z.readInt32LE,e.readInt32BE=z.readInt32BE,e.readFloatLE=z.readFloatLE,e.readFloatBE=z.readFloatBE,e.readDoubleLE=z.readDoubleLE,e.readDoubleBE=z.readDoubleBE,e.writeUInt8=z.writeUInt8,e.writeUInt16LE=z.writeUInt16LE,e.writeUInt16BE=z.writeUInt16BE,e.writeUInt32LE=z.writeUInt32LE,e.writeUInt32BE=z.writeUInt32BE,e.writeInt8=z.writeInt8,e.writeInt16LE=z.writeInt16LE,e.writeInt16BE=z.writeInt16BE,e.writeInt32LE=z.writeInt32LE,e.writeInt32BE=z.writeInt32BE,e.writeFloatLE=z.writeFloatLE,e.writeFloatBE=z.writeFloatBE,e.writeDoubleLE=z.writeDoubleLE,e.writeDoubleBE=z.writeDoubleBE,e.fill=z.fill,e.inspect=z.inspect,e.toArrayBuffer=z.toArrayBuffer,e}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer");

},{"1YiZ5S":29,"base64-js":27,buffer:26,ieee754:28}],27:[function(e,n,t){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(n){"use strict";function t(e){var n=e.charCodeAt(0);return n===s||n===c?62:n===u||n===d?63:a>n?-1:a+10>n?n-a+26+26:l+26>n?n-l:f+26>n?n-f+26:void 0}function r(e){function n(e){f[c++]=e}var r,i,s,u,a,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;a="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,f=new o(3*e.length/4-a),s=a>0?e.length-4:e.length;var c=0;for(r=0,i=0;s>r;r+=4,i+=3)u=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&u)>>16),n((65280&u)>>8),n(255&u);return 2===a?(u=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&u)):1===a&&(u=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(u>>8&255),n(255&u)),f}function i(n){function t(n){return e.charAt(n)}function r(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var i,o,s,u=n.length%3,a="";for(i=0,s=n.length-u;s>i;i+=3)o=(n[i]<<16)+(n[i+1]<<8)+n[i+2],a+=r(o);switch(u){case 1:o=n[n.length-1],a+=t(o>>2),a+=t(o<<4&63),a+="==";break;case 2:o=(n[n.length-2]<<8)+n[n.length-1],a+=t(o>>10),a+=t(o>>4&63),a+=t(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),u="/".charCodeAt(0),a="0".charCodeAt(0),f="a".charCodeAt(0),l="A".charCodeAt(0),c="-".charCodeAt(0),d="_".charCodeAt(0);n.toByteArray=r,n.fromByteArray=i}("undefined"==typeof t?this.base64js={}:t)}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"1YiZ5S":29,buffer:26}],28:[function(e,n,t){(function(){t.read=function(e,n,t,r,i){var o,s,u=8*i-r-1,a=(1<<u)-1,f=a>>1,l=-7,c=t?i-1:0,d=t?-1:1,g=e[n+c];for(c+=d,o=g&(1<<-l)-1,g>>=-l,l+=u;l>0;o=256*o+e[n+c],c+=d,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[n+c],c+=d,l-=8);if(0===o)o=1-f;else{if(o===a)return s?0/0:(g?-1:1)*(1/0);s+=Math.pow(2,r),o-=f}return(g?-1:1)*s*Math.pow(2,o-r)},t.write=function(e,n,t,r,i,o){var s,u,a,f=8*o-i-1,l=(1<<f)-1,c=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:o-1,h=r?1:-1,m=0>n||0===n&&0>1/n?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(u=isNaN(n)?1:0,s=l):(s=Math.floor(Math.log(n)/Math.LN2),n*(a=Math.pow(2,-s))<1&&(s--,a*=2),n+=s+c>=1?d/a:d*Math.pow(2,1-c),n*a>=2&&(s++,a/=2),s+c>=l?(u=0,s=l):s+c>=1?(u=(n*a-1)*Math.pow(2,i),s+=c):(u=n*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;e[t+g]=255&u,g+=h,u/=256,i-=8);for(s=s<<i|u,f+=i;f>0;e[t+g]=255&s,g+=h,s/=256,f-=8);e[t+g-h]|=128*m}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"1YiZ5S":29,buffer:26}],29:[function(e,n){(function(e){function t(){}var e=n.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(n){var t=[];return window.addEventListener("message",function(e){var n=e.source;if((n===window||null===n)&&"process-tick"===e.data&&(e.stopPropagation(),t.length>0)){var r=t.shift();r()}},!0),function(e){t.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=t,e.addListener=t,e.once=t,e.off=t,e.removeListener=t,e.removeAllListeners=t,e.emit=t,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{"1YiZ5S":29,buffer:26}]},{},[23]);