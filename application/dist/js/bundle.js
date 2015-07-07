!function e(t,n,r){function i(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return i(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t){(function(){"use strict";function e(e,t,n,r,i,o,s,u){function a(n){return console.log(n),e.userForm.$invalid?(e.showErrors=!0,!1):void u.user.signUp(n).success(function(n){e.showErrors=!1,n.success===!1?angular.isDefined(n.errors.validation)&&(t.compare(e.userForm,n.errors.validation),e.showErrors=!0):(e.$parent.user={},i.path("/"))}).error(function(e){throw"Error with http request: "+e})}function f(r){return e.FlashMessage=null,e.userForm.$invalid?(e.showErrors=!0,!1):void u.user.signIn(r).success(function(r){e.showErrors=!1,r.success===!1?angular.isDefined(r.errors.validation)?(t.compare(e.userForm,r.errors.validation),e.showErrors=!0):e.FlashMessage=r.errors:(n.isLogged=!0,n.access=r.data.role,n.data=r.data,e.$parent.user={},i.path("/"))}).error(function(e){throw"Error with http request: "+e})}e.matchEmail=t.patterns.email,e.showErrors=!1,e.addUser=a,e.signIn=f,e.getErrors=t.getErrors}e.$inject=["$scope","ValidationService","UserService","$http","$location","AuthService","Access","API"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/controllers/AuthController.js","/bundles/auth/controllers")},{"1YiZ5S":26,buffer:23}],2:[function(e,t){(function(){"use strict";function e(e,t,n){return e.isLogged===!1?void n.go("home"):void t.signOut(function(){n.go("home")})}e.$inject=["UserService","AuthService","$state"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/controllers/SighOutController.js","/bundles/auth/controllers")},{"1YiZ5S":26,buffer:23}],3:[function(e){(function(){"use strict";var t="auth",n=angular.module(t,[]);n.controller(t+".AuthController",e("./controllers/AuthController")).controller(t+".SighOutController",e("./controllers/SighOutController")).factory("UserService",e("./services/UserService")).factory("AccessService",e("./services/AccessService")).factory("AuthService",e("./services/AuthService")).provider("Access",e("./providers/AccessProvider"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/index.js","/bundles/auth")},{"./controllers/AuthController":1,"./controllers/SighOutController":2,"./providers/AccessProvider":4,"./services/AccessService":6,"./services/AuthService":7,"./services/UserService":8,"1YiZ5S":26,buffer:23}],4:[function(e,t){(function(){"use strict";function e(){function e(){var e={annon:1,user:2,admin:4};return e}this.$get=function(){return new e}}t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/providers/AccessProvider.js","/bundles/auth/providers")},{"1YiZ5S":26,buffer:23}],5:[function(e){(function(){"use strict";var e=angular.module("myApp");e.config(["$stateProvider","$urlRouterProvider","$httpProvider","AccessProvider",function(e,t,n,r){var i=r.$get();t.otherwise("/"),e.state("sign_in",{url:"/sign-in",views:{content:{templateUrl:"bundles/auth/views/sign_in.html",controller:"auth.AuthController"}},access:i.annon}).state("sign_up",{url:"/sign-up",views:{content:{templateUrl:"bundles/auth/views/sign_up.html",controller:"auth.AuthController as authCtrl"}}}).state("sign_out",{url:"/sign-out",views:{content:{controller:"auth.SighOutController"}},access:i.annon})}])}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/routers.js","/bundles/auth")},{"1YiZ5S":26,buffer:23}],6:[function(e,t){(function(){"use strict";function e(e,t,n){var r=function(e){var n=t.access===e.access?!0:t.access<e.access?!1:!0;return n},i=function(e,i){angular.isDefined(e.access)&&r(e)===!1&&(t.isLogged===!1?n.checkAuth(function(t){i(t.success===!0?r(e)===!1?!1:!0:!1)}):i(!1))};return{checkAccess:i,hasAccess:r}}e.$inject=["$state","UserService","AuthService"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/AccessService.js","/bundles/auth/services")},{"1YiZ5S":26,buffer:23}],7:[function(e,t){(function(){"use strict";function e(e,t,n,r){var i=function(e){r.user.signOut().success(function(r,i,o,s){t.isLogged=!1,t.access=n.annon,t.data={},e&&e(r,i,o,s)}).error(function(){throw new Error("ajax error request: /sign-out ")})},o=function(e){r.user.checkAuth().success(function(r){r.success===!0&&(t.isLogged=!0,t.access=n.user,t.data=r.data),e&&e.call(null,r)}).error(function(){throw new Error("ajax error request: /check-auth ")})};return{signOut:i,checkAuth:o}}e.$inject=["$http","UserService","Access","API"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/AuthService.js","/bundles/auth/services")},{"1YiZ5S":26,buffer:23}],8:[function(e,t){(function(){"use strict";function e(e,t){console.log(t);var n={isLogged:!1,hash:null,access:t.annon,data:{}};return n}e.$inject=["$http","Access"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/UserService.js","/bundles/auth/services")},{"1YiZ5S":26,buffer:23}],9:[function(e,t){(function(){"use strict";function e(e){return{restrict:"E",scope:{form:"=",model:"=",fields:"="},templateUrl:"bundles/common/directives/progress/progressBar.html",link:function(t){var n=angular.element(document.querySelector('form[name="'+t.form.$name+'"]'));t.progress=0;var r,i=[],o=100/parseInt(t.fields,10);n.on("change",function(n){r=n.target.name;var s=e.contains(i,r),u=n.target.value.replace(/ /g,""),a=!1;if(""==u||s){if(""==u&&s&&0!=t.progress){t.progress-=o;var f=e.indexOf(i,r);delete i[f]}}else a=!0,t.progress+=o;!s&&a&&i.push(r),t.$digest()})}}}e.$inject=["_"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/directives/progress/progressBarDirective.js","/bundles/common/directives/progress")},{"1YiZ5S":26,buffer:23}],10:[function(e,t){(function(){"use strict";var e=function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,t,n,r){r.$validators.compareTo=function(t){return t==e.otherModelValue},e.$watch("otherModelValue",function(){r.$validate()})}}};t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/directives/validation/compareToDirective.js","/bundles/common/directives/validation")},{"1YiZ5S":26,buffer:23}],11:[function(e){(function(){"use strict";var t="common",n=angular.module(t,[]);n.factory("ValidationService",e("./services/ValidationService")).service("StateService",e("./services/StateService")).directive("progressBar",e("./directives/progress/progressBarDirective")).directive("compareTo",e("./directives/validation/compareToDirective")).factory("API",e("./services/API"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/index.js","/bundles/common")},{"./directives/progress/progressBarDirective":9,"./directives/validation/compareToDirective":10,"./services/API":12,"./services/StateService":13,"./services/ValidationService":14,"1YiZ5S":26,buffer:23}],12:[function(e,t){(function(){"use strict";function e(e){var t="http://localhost:9090",n={signIn:function(n){var r=e.post(t+"/sign-in",n,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});return r},signUp:function(n){var r=e.post(t+"/users",n,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});return r},signOut:function(){var n=e.get(t+"/sign-out");return n},checkAuth:function(){var n=e.get(t+"/check-auth");return n}};return{user:n}}e.$inject=["$http"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/API.js","/bundles/common/services")},{"1YiZ5S":26,buffer:23}],13:[function(e,t){(function(){"use strict";function e(){function e(e){n=e}function t(){return n}var n={};return{setToState:e,getToState:t}}t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/StateService.js","/bundles/common/services")},{"1YiZ5S":26,buffer:23}],14:[function(e,t){(function(){"use strict";function e(){function e(e,t){if(angular.isDefined(e)){var n;return angular.forEach(e,function(e,i){var o=o||("serverValidation"===i?e:void 0)||void 0;n=r[i](t,o)}),n}}function t(e,t){angular.forEach(t,function(t,n){var r=n.split("."),i=r[0].toLowerCase();if(angular.isDefined(e[i])){var o=e[i];o.$invalid=!0,o.$error={pattern:!0,serverValidation:t}}})}var n={};n.email=new RegExp("^[a-zA-Z0-9_.]{1,20}@[a-zA-Z0-9_]{1,20}.[a-z]{2,4}$");var r={required:function(e,t){return t||"This field is required"},pattern:function(e,t){var e=angular.isDefined(e)?e:{pattern:"value"};return t||"Enter valid "+e.pattern},minlength:function(e,t){var e=angular.isDefined(e)?e:{minlength:8};return t||"The field should contain at least "+e.minlength+" characters"},compareTo:function(e,t){var e=angular.isDefined(e)?e:{compareTo:"password"};return t||"Confirm the "+e.compareTo},email:function(e,t){return t||"Enter valid email"},serverValidation:function(e,t){return t||"Enter valid value"}};return{patterns:n,getErrors:e,compare:t}}t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/ValidationService.js","/bundles/common/services")},{"1YiZ5S":26,buffer:23}],15:[function(e,t){(function(){"use strict";function e(e,t){console.log(t.first([19,4,5,6])),e.var2="Scope blin 22",console.log("MY GOD he has seen IT!")}e.$inject=["$scope","_"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/controllers/DefaultController.js","/bundles/frontend/controllers")},{"1YiZ5S":26,buffer:23}],16:[function(e,t){(function(){"use strict";function e(e,t,n){function r(t){t.User=e,t.Access=n}return{restrict:"E",replace:!0,link:r,templateUrl:"bundles/frontend/directives/signUpBlock/views/signup.html"}}e.$inject=["UserService","StateService","Access","$state","$timeout"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/directives/signUpBlock/SignUpDirective.js","/bundles/frontend/directives/signUpBlock")},{"1YiZ5S":26,buffer:23}],17:[function(e,t){(function(){"use strict";function e(e){function t(t){t.user=e}return{restrict:"E",link:t,templateUrl:"bundles/frontend/directives/topNavigation/views/navigation.html"}}e.$inject=["UserService"],t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/directives/topNavigation/topNagivationDirective.js","/bundles/frontend/directives/topNavigation")},{"1YiZ5S":26,buffer:23}],18:[function(e){(function(){"use strict";var t="frontend",n=angular.module(t,[]);n.controller(t+".DefaultController",e("./controllers/DefaultController")).directive("signUpBlock",e("./directives/signUpBlock/SignUpDirective")).directive("topNavigation",e("./directives/topNavigation/topNagivationDirective"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/index.js","/bundles/frontend")},{"./controllers/DefaultController":15,"./directives/signUpBlock/SignUpDirective":16,"./directives/topNavigation/topNagivationDirective":17,"1YiZ5S":26,buffer:23}],19:[function(e,t){(function(){"use strict";var e={name:"myApp"};t.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")},{"1YiZ5S":26,buffer:23}],20:[function(e){(function(){"use strict";e("./bundles/common/index"),e("./bundles/frontend/index"),e("./bundles/auth/index");{var t=e("./config");angular.module(t.name,["underscore","ui.router","common","auth","frontend","ngCookies"])}e("./moddlewares/access"),e("./routers"),angular.element(document).ready(function(){angular.bootstrap(document,[t.name])})}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_cb480a3.js","/")},{"./bundles/auth/index":3,"./bundles/common/index":11,"./bundles/frontend/index":18,"./config":19,"./moddlewares/access":21,"./routers":22,"1YiZ5S":26,buffer:23}],21:[function(e){(function(){"use strict";{var t=e("./../config");angular.module(t.name).run(["$rootScope","UserService","AccessService","StateService","$state","$timeout",function(e,t,n,r,i){e.$on("$stateChangeStart",function(o,s){r.setToState(s),console.log(t),n.checkAccess(s,function(t){console.log("is access: "+t),t===!1&&e.$evalAsync(function(){i.go("forrbiden")})})})}])}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/moddlewares/access.js","/moddlewares")},{"./../config":19,"1YiZ5S":26,buffer:23}],22:[function(e){(function(){"use strict";var t=angular.module("myApp");t.config(["$stateProvider","$urlRouterProvider","$httpProvider","AccessProvider",function(e,t,n,r){n.defaults.withCredentials=!0;var i=r.$get();t.otherwise("/"),e.state("home",{url:"/",views:{content:{templateUrl:"bundles/frontend/views/index.html",controller:"frontend.DefaultController"}},access:i.annon}).state("home.list",{url:"admin",views:{"list@home":{templateUrl:"bundles/frontend/views/list.html",controller:"frontend.DefaultController"}},access:i.admin}).state("forrbiden",{views:{content:{templateUrl:"bundles/common/views/401.html",controller:function(){}}}})}]),e("./bundles/auth/routers")}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/routers.js","/")},{"./bundles/auth/routers":5,"1YiZ5S":26,buffer:23}],23:[function(e,t,n){(function(t,r,i){function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=Y(e);e.length%4!==0;)e+="=";var o;if("number"===r)o=Z(e);else if("string"===r)o=i.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");o=Z(e.length)}var s;i._useTypedArrays?s=i._augment(new Uint8Array(o)):(s=this,s.length=o,s._isBuffer=!0);var u;if(i._useTypedArrays&&"number"==typeof e.byteLength)s._set(e);else if(j(e))for(u=0;o>u;u++)s[u]=i.isBuffer(e)?e.readUInt8(u):e[u];else if("string"===r)s.write(e,0,t);else if("number"===r&&!i._useTypedArrays&&!n)for(u=0;o>u;u++)s[u]=0;return s}function o(e,t,n,r){n=Number(n)||0;var o=e.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;var s=t.length;V(s%2===0,"Invalid hex string"),r>s/2&&(r=s/2);for(var u=0;r>u;u++){var a=parseInt(t.substr(2*u,2),16);V(!isNaN(a),"Invalid hex string"),e[n+u]=a}return i._charsWritten=2*u,u}function s(e,t,n,r){var o=i._charsWritten=N(k(t),e,n,r);return o}function u(e,t,n,r){var o=i._charsWritten=N(T(t),e,n,r);return o}function a(e,t,n,r){return u(e,t,n,r)}function f(e,t,n,r){var o=i._charsWritten=N(M(t),e,n,r);return o}function c(e,t,n,r){var o=i._charsWritten=N(D(t),e,n,r);return o}function l(e,t,n){return R.fromByteArray(0===t&&n===e.length?e:e.slice(t,n))}function d(e,t,n){var r="",i="";n=Math.min(e.length,n);for(var o=t;n>o;o++)e[o]<=127?(r+=F(i)+String.fromCharCode(e[o]),i=""):i+="%"+e[o].toString(16);return r+F(i)}function g(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;n>i;i++)r+=String.fromCharCode(e[i]);return r}function h(e,t,n){return g(e,t,n)}function p(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r);for(var i="",o=t;n>o;o++)i+=$(e[o]);return i}function m(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function v(e,t,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return n?(o=e[t],i>t+1&&(o|=e[t+1]<<8)):(o=e[t]<<8,i>t+1&&(o|=e[t+1])),o}}function w(e,t,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return n?(i>t+2&&(o=e[t+2]<<16),i>t+1&&(o|=e[t+1]<<8),o|=e[t],i>t+3&&(o+=e[t+3]<<24>>>0)):(i>t+1&&(o=e[t+1]<<16),i>t+2&&(o|=e[t+2]<<8),i>t+3&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}}function b(e,t,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=v(e,t,n,!0),s=32768&o;return s?-1*(65535-o+1):o}}function y(e,t,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=w(e,t,n,!0),s=2147483648&o;return s?-1*(4294967295-o+1):o}}function S(e,t,n,r){return r||(V("boolean"==typeof n,"missing or invalid endian"),V(t+3<e.length,"Trying to read beyond buffer length")),W.read(e,t,n,23,4)}function E(e,t,n,r){return r||(V("boolean"==typeof n,"missing or invalid endian"),V(t+7<e.length,"Trying to read beyond buffer length")),W.read(e,t,n,52,8)}function A(e,t,n,r,i){i||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+1<e.length,"trying to write beyond buffer length"),P(t,65535));var o=e.length;if(!(n>=o))for(var s=0,u=Math.min(o-n,2);u>s;s++)e[n+s]=(t&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function B(e,t,n,r,i){i||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<e.length,"trying to write beyond buffer length"),P(t,4294967295));var o=e.length;if(!(n>=o))for(var s=0,u=Math.min(o-n,4);u>s;s++)e[n+s]=t>>>8*(r?s:3-s)&255}function I(e,t,n,r,i){i||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+1<e.length,"Trying to write beyond buffer length"),O(t,32767,-32768));var o=e.length;n>=o||(t>=0?A(e,t,n,r,i):A(e,65535+t+1,n,r,i))}function U(e,t,n,r,i){i||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<e.length,"Trying to write beyond buffer length"),O(t,2147483647,-2147483648));var o=e.length;n>=o||(t>=0?B(e,t,n,r,i):B(e,4294967295+t+1,n,r,i))}function _(e,t,n,r,i){i||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+3<e.length,"Trying to write beyond buffer length"),q(t,3.4028234663852886e38,-3.4028234663852886e38));var o=e.length;n>=o||W.write(e,t,n,r,23,4)}function L(e,t,n,r,i){i||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==n&&null!==n,"missing offset"),V(n+7<e.length,"Trying to write beyond buffer length"),q(t,1.7976931348623157e308,-1.7976931348623157e308));var o=e.length;n>=o||W.write(e,t,n,r,52,8)}function Y(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function C(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function Z(e){return e=~~Math.ceil(+e),0>e?0:e}function x(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function j(e){return x(e)||i.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function $(e){return 16>e?"0"+e.toString(16):e.toString(16)}function k(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(127>=r)t.push(e.charCodeAt(n));else{var i=n;r>=55296&&57343>=r&&n++;for(var o=encodeURIComponent(e.slice(i,n+1)).substr(1).split("%"),s=0;s<o.length;s++)t.push(parseInt(o[s],16))}}return t}function T(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function D(e){for(var t,n,r,i=[],o=0;o<e.length;o++)t=e.charCodeAt(o),n=t>>8,r=t%256,i.push(r),i.push(n);return i}function M(e){return R.toByteArray(e)}function N(e,t,n,r){for(var i=0;r>i&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i];return i}function F(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function P(e,t){V("number"==typeof e,"cannot write a non-number as a number"),V(e>=0,"specified a negative value for writing an unsigned value"),V(t>=e,"value is larger than maximum value for type"),V(Math.floor(e)===e,"value has a fractional component")}function O(e,t,n){V("number"==typeof e,"cannot write a non-number as a number"),V(t>=e,"value larger than maximum allowed value"),V(e>=n,"value smaller than minimum allowed value"),V(Math.floor(e)===e,"value has a fractional component")}function q(e,t,n){V("number"==typeof e,"cannot write a non-number as a number"),V(t>=e,"value larger than maximum allowed value"),V(e>=n,"value smaller than minimum allowed value")}function V(e,t){if(!e)throw new Error(t||"Failed assertion")}var R=e("base64-js"),W=e("ieee754");n.Buffer=i,n.SlowBuffer=i,n.INSPECT_MAX_BYTES=50,i.poolSize=8192,i._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},i.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=k(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=M(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},i.concat=function(e,t){if(V(x(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new i(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new i(t),o=0;for(n=0;n<e.length;n++){var s=e[n];s.copy(r,o),o+=s.length}return r},i.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var i=r;r=t,t=n,n=i}t=Number(t)||0;var l=this.length-t;n?(n=Number(n),n>l&&(n=l)):n=l,r=String(r||"utf8").toLowerCase();var d;switch(r){case"hex":d=o(this,e,t,n);break;case"utf8":case"utf-8":d=s(this,e,t,n);break;case"ascii":d=u(this,e,t,n);break;case"binary":d=a(this,e,t,n);break;case"base64":d=f(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=c(this,e,t,n);break;default:throw new Error("Unknown encoding")}return d},i.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var i;switch(e){case"hex":i=p(r,t,n);break;case"utf8":case"utf-8":i=d(r,t,n);break;case"ascii":i=g(r,t,n);break;case"binary":i=h(r,t,n);break;case"base64":i=l(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=m(r,t,n);break;default:throw new Error("Unknown encoding")}return i},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},i.prototype.copy=function(e,t,n,r){var o=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==o.length){V(r>=n,"sourceEnd < sourceStart"),V(t>=0&&t<e.length,"targetStart out of bounds"),V(n>=0&&n<o.length,"sourceStart out of bounds"),V(r>=0&&r<=o.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var s=r-n;if(100>s||!i._useTypedArrays)for(var u=0;s>u;u++)e[u+t]=this[u+n];else e._set(this.subarray(n,n+s),t)}},i.prototype.slice=function(e,t){var n=this.length;if(e=C(e,n,0),t=C(t,n,n),i._useTypedArrays)return i._augment(this.subarray(e,t));for(var r=t-e,o=new i(r,void 0,!0),s=0;r>s;s++)o[s]=this[s+e];return o},i.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},i.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},i.prototype.readUInt8=function(e,t){return t||(V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},i.prototype.readUInt16LE=function(e,t){return v(this,e,!0,t)},i.prototype.readUInt16BE=function(e,t){return v(this,e,!1,t)},i.prototype.readUInt32LE=function(e,t){return w(this,e,!0,t)},i.prototype.readUInt32BE=function(e,t){return w(this,e,!1,t)},i.prototype.readInt8=function(e,t){if(t||(V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?-1*(255-this[e]+1):this[e]}},i.prototype.readInt16LE=function(e,t){return b(this,e,!0,t)},i.prototype.readInt16BE=function(e,t){return b(this,e,!1,t)},i.prototype.readInt32LE=function(e,t){return y(this,e,!0,t)},i.prototype.readInt32BE=function(e,t){return y(this,e,!1,t)},i.prototype.readFloatLE=function(e,t){return S(this,e,!0,t)},i.prototype.readFloatBE=function(e,t){return S(this,e,!1,t)},i.prototype.readDoubleLE=function(e,t){return E(this,e,!0,t)},i.prototype.readDoubleBE=function(e,t){return E(this,e,!1,t)},i.prototype.writeUInt8=function(e,t,n){n||(V(void 0!==e&&null!==e,"missing value"),V(void 0!==t&&null!==t,"missing offset"),V(t<this.length,"trying to write beyond buffer length"),P(e,255)),t>=this.length||(this[t]=e)},i.prototype.writeUInt16LE=function(e,t,n){A(this,e,t,!0,n)},i.prototype.writeUInt16BE=function(e,t,n){A(this,e,t,!1,n)},i.prototype.writeUInt32LE=function(e,t,n){B(this,e,t,!0,n)},i.prototype.writeUInt32BE=function(e,t,n){B(this,e,t,!1,n)},i.prototype.writeInt8=function(e,t,n){n||(V(void 0!==e&&null!==e,"missing value"),V(void 0!==t&&null!==t,"missing offset"),V(t<this.length,"Trying to write beyond buffer length"),O(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},i.prototype.writeInt16LE=function(e,t,n){I(this,e,t,!0,n)},i.prototype.writeInt16BE=function(e,t,n){I(this,e,t,!1,n)},i.prototype.writeInt32LE=function(e,t,n){U(this,e,t,!0,n)},i.prototype.writeInt32BE=function(e,t,n){U(this,e,t,!1,n)},i.prototype.writeFloatLE=function(e,t,n){_(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){_(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){L(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){L(this,e,t,!1,n)},i.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),V("number"==typeof e&&!isNaN(e),"value is not a number"),V(n>=t,"end < start"),n!==t&&0!==this.length){V(t>=0&&t<this.length,"start out of bounds"),V(n>=0&&n<=this.length,"end out of bounds");for(var r=t;n>r;r++)this[r]=e}},i.prototype.inspect=function(){for(var e=[],t=this.length,r=0;t>r;r++)if(e[r]=$(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},i.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(i._useTypedArrays)return new i(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;n>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var z=i.prototype;i._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=z.get,e.set=z.set,e.write=z.write,e.toString=z.toString,e.toLocaleString=z.toString,e.toJSON=z.toJSON,e.copy=z.copy,e.slice=z.slice,e.readUInt8=z.readUInt8,e.readUInt16LE=z.readUInt16LE,e.readUInt16BE=z.readUInt16BE,e.readUInt32LE=z.readUInt32LE,e.readUInt32BE=z.readUInt32BE,e.readInt8=z.readInt8,e.readInt16LE=z.readInt16LE,e.readInt16BE=z.readInt16BE,e.readInt32LE=z.readInt32LE,e.readInt32BE=z.readInt32BE,e.readFloatLE=z.readFloatLE,e.readFloatBE=z.readFloatBE,e.readDoubleLE=z.readDoubleLE,e.readDoubleBE=z.readDoubleBE,e.writeUInt8=z.writeUInt8,e.writeUInt16LE=z.writeUInt16LE,e.writeUInt16BE=z.writeUInt16BE,e.writeUInt32LE=z.writeUInt32LE,e.writeUInt32BE=z.writeUInt32BE,e.writeInt8=z.writeInt8,e.writeInt16LE=z.writeInt16LE,e.writeInt16BE=z.writeInt16BE,e.writeInt32LE=z.writeInt32LE,e.writeInt32BE=z.writeInt32BE,e.writeFloatLE=z.writeFloatLE,e.writeFloatBE=z.writeFloatBE,e.writeDoubleLE=z.writeDoubleLE,e.writeDoubleBE=z.writeDoubleBE,e.fill=z.fill,e.inspect=z.inspect,e.toArrayBuffer=z.toArrayBuffer,e}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"1YiZ5S":26,"base64-js":24,buffer:23,ieee754:25}],24:[function(e,t,n){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function n(e){var t=e.charCodeAt(0);return t===s||t===l?62:t===u||t===d?63:a>t?-1:a+10>t?t-a+26+26:c+26>t?t-c:f+26>t?t-f+26:void 0}function r(e){function t(e){f[l++]=e}var r,i,s,u,a,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=e.length;a="="===e.charAt(c-2)?2:"="===e.charAt(c-1)?1:0,f=new o(3*e.length/4-a),s=a>0?e.length-4:e.length;var l=0;for(r=0,i=0;s>r;r+=4,i+=3)u=n(e.charAt(r))<<18|n(e.charAt(r+1))<<12|n(e.charAt(r+2))<<6|n(e.charAt(r+3)),t((16711680&u)>>16),t((65280&u)>>8),t(255&u);return 2===a?(u=n(e.charAt(r))<<2|n(e.charAt(r+1))>>4,t(255&u)):1===a&&(u=n(e.charAt(r))<<10|n(e.charAt(r+1))<<4|n(e.charAt(r+2))>>2,t(u>>8&255),t(255&u)),f}function i(t){function n(t){return e.charAt(t)}function r(e){return n(e>>18&63)+n(e>>12&63)+n(e>>6&63)+n(63&e)}var i,o,s,u=t.length%3,a="";for(i=0,s=t.length-u;s>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],a+=r(o);switch(u){case 1:o=t[t.length-1],a+=n(o>>2),a+=n(o<<4&63),a+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],a+=n(o>>10),a+=n(o>>4&63),a+=n(o<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),u="/".charCodeAt(0),a="0".charCodeAt(0),f="a".charCodeAt(0),c="A".charCodeAt(0),l="-".charCodeAt(0),d="_".charCodeAt(0);

t.toByteArray=r,t.fromByteArray=i}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"1YiZ5S":26,buffer:23}],25:[function(e,t,n){(function(){n.read=function(e,t,n,r,i){var o,s,u=8*i-r-1,a=(1<<u)-1,f=a>>1,c=-7,l=n?i-1:0,d=n?-1:1,g=e[t+l];for(l+=d,o=g&(1<<-c)-1,g>>=-c,c+=u;c>0;o=256*o+e[t+l],l+=d,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=r;c>0;s=256*s+e[t+l],l+=d,c-=8);if(0===o)o=1-f;else{if(o===a)return s?0/0:(g?-1:1)*(1/0);s+=Math.pow(2,r),o-=f}return(g?-1:1)*s*Math.pow(2,o-r)},n.write=function(e,t,n,r,i,o){var s,u,a,f=8*o-i-1,c=(1<<f)-1,l=c>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:o-1,h=r?1:-1,p=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(a=Math.pow(2,-s))<1&&(s--,a*=2),t+=s+l>=1?d/a:d*Math.pow(2,1-l),t*a>=2&&(s++,a/=2),s+l>=c?(u=0,s=c):s+l>=1?(u=(t*a-1)*Math.pow(2,i),s+=l):(u=t*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;e[n+g]=255&u,g+=h,u/=256,i-=8);for(s=s<<i|u,f+=i;f>0;e[n+g]=255&s,g+=h,s/=256,f-=8);e[n+g-h]|=128*p}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"1YiZ5S":26,buffer:23}],26:[function(e,t){(function(e){function n(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=n,e.addListener=n,e.once=n,e.off=n,e.removeListener=n,e.removeAllListeners=n,e.emit=n,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{"1YiZ5S":26,buffer:23}]},{},[20]);