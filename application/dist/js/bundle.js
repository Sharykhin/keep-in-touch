!function e(n,t,r){function o(s,u){if(!t[s]){if(!n[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=t[s]={exports:{}};n[s][0].call(f.exports,function(e){var t=n[s][1][e];return o(t?t:e)},f,f.exports,e,n,t,r)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,n){(function(){"use strict";function e(e,n,t,r,o,i,s){function u(t){return console.log(t),e.userForm.$invalid?(e.showErrors=!0,!1):void r.post("http://localhost:9090/users",t,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).success(function(t){e.showErrors=!1,t.success===!1?angular.isDefined(t.errors.validation)&&(n.compare(e.userForm,t.errors.validation),e.showErrors=!0):o.path("/")}).error(function(e){throw"Error with http request: "+e})}function a(i){return e.FlashMessage=null,e.userForm.$invalid?(e.showErrors=!0,!1):void r.post("http://localhost:9090/sign-in",i,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).success(function(r){e.showErrors=!1,r.success===!1?angular.isDefined(r.errors.validation)?(n.compare(e.userForm,r.errors.validation),e.showErrors=!0):e.FlashMessage=r.errors:(t.isLogged=!0,t.access=s.admin,t.data=r.data,o.path("/"))}).error(function(e){throw"Error with http request: "+e})}e.matchEmail=n.patterns.email,e.showErrors=!1,e.addUser=u,e.signIn=a,e.getErrors=n.getErrors}e.$inject=["$scope","ValidationService","UserService","$http","$location","AuthService","Access"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/controllers/AuthController.js","/bundles/auth/controllers")},{"1YiZ5S":22,buffer:19}],2:[function(e,n){(function(){"use strict";function e(e,n,t){return e.isLogged===!1?void t.go("home"):void n.signOut(function(){t.go("home")})}e.$inject=["UserService","AuthService","$state"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/controllers/SighOutController.js","/bundles/auth/controllers")},{"1YiZ5S":22,buffer:19}],3:[function(e){(function(){"use strict";var n="auth",t=angular.module(n,[]);t.controller(n+".AuthController",e("./controllers/AuthController")).controller(n+".SighOutController",e("./controllers/SighOutController")).factory("UserService",e("./services/UserService")).factory("AccessService",e("./services/AccessService")).factory("AuthService",e("./services/AuthService")).provider("Access",e("./providers/AccessProvider"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/index.js","/bundles/auth")},{"./controllers/AuthController":1,"./controllers/SighOutController":2,"./providers/AccessProvider":4,"./services/AccessService":5,"./services/AuthService":6,"./services/UserService":7,"1YiZ5S":22,buffer:19}],4:[function(e,n){(function(){"use strict";function e(){function e(){var e={annon:1,user:2,admin:4};return e}this.$get=function(){return new e}}n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/providers/AccessProvider.js","/bundles/auth/providers")},{"1YiZ5S":22,buffer:19}],5:[function(e,n){(function(){"use strict";function e(e,n,t){var r=function(e){var t=n.access===e.access?!0:n.access<e.access?!1:!0;return t},o=function(e,o){angular.isDefined(e.access)&&r(e)===!1&&(n.isLogged===!1?t.checkAuth(function(n){o(n.success===!0?r(e)===!1?!1:!0:!1)}):o(!1))};return{checkAccess:o}}e.$inject=["$state","UserService","AuthService"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/AccessService.js","/bundles/auth/services")},{"1YiZ5S":22,buffer:19}],6:[function(e,n){(function(){"use strict";function e(e,n,t){var r=function(r){e.get("http://localhost:9090/sign-out").success(function(e,o,i,s){n.isLogged=!1,n.access=t.annon,n.data={},r&&r(e,o,i,s)}).error(function(){throw new Error("ajax error request: /sign-out ")})},o=function(r){e.get("http://localhost:9090/check-auth").success(function(e){e.success===!0&&(n.isLogged=!0,n.access=t.user,n.data=e.data),r&&r.call(null,e)}).error(function(){throw new Error("ajax error request: /check-auth ")})};return{signOut:r,checkAuth:o}}e.$inject=["$http","UserService","Access"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/AuthService.js","/bundles/auth/services")},{"1YiZ5S":22,buffer:19}],7:[function(e,n){(function(){"use strict";function e(e,n){console.log(n);var t={isLogged:!1,hash:null,access:n.annon,data:{}};return t}e.$inject=["$http","Access"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/auth/services/UserService.js","/bundles/auth/services")},{"1YiZ5S":22,buffer:19}],8:[function(e,n){(function(){"use strict";function e(e){return{restrict:"E",scope:{form:"=",model:"=",fields:"="},templateUrl:"bundles/common/directives/progress/progressBar.html",link:function(n){var t=angular.element(document.querySelector('form[name="'+n.form.$name+'"]'));n.progress=0;var r,o=[],i=100/parseInt(n.fields,10);t.on("change",function(t){r=t.target.name;var s=e.contains(o,r),u=t.target.value.replace(/ /g,""),a=!1;if(""==u||s){if(""==u&&s&&0!=n.progress){n.progress-=i;var f=e.indexOf(o,r);delete o[f]}}else a=!0,n.progress+=i;!s&&a&&o.push(r),n.$digest()})}}}e.$inject=["_"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/directives/progress/progressBarDirective.js","/bundles/common/directives/progress")},{"1YiZ5S":22,buffer:19}],9:[function(e,n){(function(){"use strict";var e=function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,n,t,r){r.$validators.compareTo=function(n){return n==e.otherModelValue},e.$watch("otherModelValue",function(){r.$validate()})}}};n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/directives/validation/compareToDirective.js","/bundles/common/directives/validation")},{"1YiZ5S":22,buffer:19}],10:[function(e){(function(){"use strict";var n="common",t=angular.module(n,[]);t.factory("ValidationService",e("./services/ValidationService")).directive("progressBar",e("./directives/progress/progressBarDirective")).directive("compareTo",e("./directives/validation/compareToDirective"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/index.js","/bundles/common")},{"./directives/progress/progressBarDirective":8,"./directives/validation/compareToDirective":9,"./services/ValidationService":11,"1YiZ5S":22,buffer:19}],11:[function(e,n){(function(){"use strict";function e(){function e(e,n){if(angular.isDefined(e)){var t;return angular.forEach(e,function(e,o){var i=i||("serverValidation"===o?e:void 0)||void 0;t=r[o](n,i)}),t}}function n(e,n){angular.forEach(n,function(n,t){var r=t.split("."),o=r[0].toLowerCase();if(angular.isDefined(e[o])){var i=e[o];i.$invalid=!0,i.$error={pattern:!0,serverValidation:n}}})}var t={};t.email=new RegExp("^[a-zA-Z0-9_.]{1,20}@[a-zA-Z0-9_]{1,20}.[a-z]{2,4}$");var r={required:function(e,n){return n||"This field is required"},pattern:function(e,n){var e=angular.isDefined(e)?e:{pattern:"value"};return n||"Enter valid "+e.pattern},minlength:function(e,n){var e=angular.isDefined(e)?e:{minlength:8};return n||"The field should contain at least "+e.minlength+" characters"},compareTo:function(e,n){var e=angular.isDefined(e)?e:{compareTo:"password"};return n||"Confirm the "+e.compareTo},email:function(e,n){return n||"Enter valid email"},serverValidation:function(e,n){return n||"Enter valid value"}};return{patterns:t,getErrors:e,compare:n}}n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/common/services/ValidationService.js","/bundles/common/services")},{"1YiZ5S":22,buffer:19}],12:[function(e,n){(function(){"use strict";function e(e,n){console.log(n.first([19,4,5,6])),e.var2="Scope blin 22",console.log("MY GOD he has seen IT!")}e.$inject=["$scope","_"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/controllers/DefaultController.js","/bundles/frontend/controllers")},{"1YiZ5S":22,buffer:19}],13:[function(e,n){(function(){"use strict";function e(e,n,t){function r(r){t(function(){console.log(n.$current.access)},1),console.log(n.$current.access),r.User=e}return{restrict:"E",link:r,templateUrl:"bundles/frontend/directives/signUpBlock/views/signup.html"}}e.$inject=["UserService","$state","$timeout"],n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/directives/signUpBlock/SignUpDirective.js","/bundles/frontend/directives/signUpBlock")},{"1YiZ5S":22,buffer:19}],14:[function(e){(function(){"use strict";var n="frontend",t=angular.module(n,[]);t.controller(n+".DefaultController",e("./controllers/DefaultController")).directive("signUpBlock",e("./directives/signUpBlock/SignUpDirective"))}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/bundles/frontend/index.js","/bundles/frontend")},{"./controllers/DefaultController":12,"./directives/signUpBlock/SignUpDirective":13,"1YiZ5S":22,buffer:19}],15:[function(e,n){(function(){"use strict";var e={name:"myApp"};n.exports=e}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")},{"1YiZ5S":22,buffer:19}],16:[function(e){(function(){"use strict";e("./bundles/common/index"),e("./bundles/frontend/index"),e("./bundles/auth/index");{var n=e("./config");angular.module(n.name,["underscore","ui.router","common","auth","frontend","ngCookies"])}e("./moddlewares/access"),e("./routers"),angular.element(document).ready(function(){angular.bootstrap(document,[n.name])})}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_aade9c86.js","/")},{"./bundles/auth/index":3,"./bundles/common/index":10,"./bundles/frontend/index":14,"./config":15,"./moddlewares/access":17,"./routers":18,"1YiZ5S":22,buffer:19}],17:[function(e){(function(){"use strict";{var n=e("./../config");angular.module(n.name).run(["$rootScope","UserService","AccessService","$state","$timeout",function(e,n,t,r){e.$on("$stateChangeStart",function(o,i){console.log(n),t.checkAccess(i,function(n){console.log("is access: "+n),n===!1&&e.$evalAsync(function(){r.go("forrbiden")})})})}])}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/moddlewares/access.js","/moddlewares")},{"./../config":15,"1YiZ5S":22,buffer:19}],18:[function(e){(function(){"use strict";var e=angular.module("myApp");e.config(["$stateProvider","$urlRouterProvider","$httpProvider","AccessProvider",function(e,n,t,r){t.defaults.withCredentials=!0;var o=r.$get();n.otherwise("/"),e.state("home",{url:"/",views:{content:{templateUrl:"bundles/frontend/views/index.html",controller:"frontend.DefaultController"}},access:o.annon}).state("home.list",{url:"admin",views:{"list@home":{templateUrl:"bundles/frontend/views/list.html",controller:"frontend.DefaultController"}},access:o.admin}).state("sign_in",{url:"/sign-in",views:{content:{templateUrl:"bundles/auth/views/sign_in.html",controller:"auth.AuthController"}},access:o.annon}).state("sign_up",{url:"/sign-up",views:{content:{templateUrl:"bundles/auth/views/sign_up.html",controller:"auth.AuthController as authCtrl"}}}).state("sign_out",{url:"/sign-out",views:{content:{controller:"auth.SighOutController"}},access:o.annon}).state("forrbiden",{views:{content:{templateUrl:"bundles/common/views/401.html",controller:function(){}}}})}])}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/routers.js","/")},{"1YiZ5S":22,buffer:19}],19:[function(e,n,t){(function(n,r,o){function o(e,n,t){if(!(this instanceof o))return new o(e,n,t);var r=typeof e;if("base64"===n&&"string"===r)for(e=C(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=Y(e);else if("string"===r)i=o.byteLength(e,n);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=Y(e.length)}var s;o._useTypedArrays?s=o._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0);var u;if(o._useTypedArrays&&"number"==typeof e.byteLength)s._set(e);else if(j(e))for(u=0;i>u;u++)s[u]=o.isBuffer(e)?e.readUInt8(u):e[u];else if("string"===r)s.write(e,0,n);else if("number"===r&&!o._useTypedArrays&&!t)for(u=0;i>u;u++)s[u]=0;return s}function i(e,n,t,r){t=Number(t)||0;var i=e.length-t;r?(r=Number(r),r>i&&(r=i)):r=i;var s=n.length;P(s%2===0,"Invalid hex string"),r>s/2&&(r=s/2);for(var u=0;r>u;u++){var a=parseInt(n.substr(2*u,2),16);P(!isNaN(a),"Invalid hex string"),e[t+u]=a}return o._charsWritten=2*u,u}function s(e,n,t,r){var i=o._charsWritten=F(T(n),e,t,r);return i}function u(e,n,t,r){var i=o._charsWritten=F($(n),e,t,r);return i}function a(e,n,t,r){return u(e,n,t,r)}function f(e,n,t,r){var i=o._charsWritten=F(M(n),e,t,r);return i}function l(e,n,t,r){var i=o._charsWritten=F(D(n),e,t,r);return i}function c(e,n,t){return W.fromByteArray(0===n&&t===e.length?e:e.slice(n,t))}function d(e,n,t){var r="",o="";t=Math.min(e.length,t);for(var i=n;t>i;i++)e[i]<=127?(r+=N(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+N(o)}function g(e,n,t){var r="";t=Math.min(e.length,t);for(var o=n;t>o;o++)r+=String.fromCharCode(e[o]);return r}function h(e,n,t){return g(e,n,t)}function p(e,n,t){var r=e.length;(!n||0>n)&&(n=0),(!t||0>t||t>r)&&(t=r);for(var o="",i=n;t>i;i++)o+=k(e[i]);return o}function m(e,n,t){for(var r=e.slice(n,t),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function v(e,n,t,r){r||(P("boolean"==typeof t,"missing or invalid endian"),P(void 0!==n&&null!==n,"missing offset"),P(n+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var i;return t?(i=e[n],o>n+1&&(i|=e[n+1]<<8)):(i=e[n]<<8,o>n+1&&(i|=e[n+1])),i}}function w(e,n,t,r){r||(P("boolean"==typeof t,"missing or invalid endian"),P(void 0!==n&&null!==n,"missing offset"),P(n+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var i;return t?(o>n+2&&(i=e[n+2]<<16),o>n+1&&(i|=e[n+1]<<8),i|=e[n],o>n+3&&(i+=e[n+3]<<24>>>0)):(o>n+1&&(i=e[n+1]<<16),o>n+2&&(i|=e[n+2]<<8),o>n+3&&(i|=e[n+3]),i+=e[n]<<24>>>0),i}}function b(e,n,t,r){r||(P("boolean"==typeof t,"missing or invalid endian"),P(void 0!==n&&null!==n,"missing offset"),P(n+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var i=v(e,n,t,!0),s=32768&i;return s?-1*(65535-i+1):i}}function y(e,n,t,r){r||(P("boolean"==typeof t,"missing or invalid endian"),P(void 0!==n&&null!==n,"missing offset"),P(n+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(n>=o)){var i=w(e,n,t,!0),s=2147483648&i;return s?-1*(4294967295-i+1):i}}function E(e,n,t,r){return r||(P("boolean"==typeof t,"missing or invalid endian"),P(n+3<e.length,"Trying to read beyond buffer length")),z.read(e,n,t,23,4)}function S(e,n,t,r){return r||(P("boolean"==typeof t,"missing or invalid endian"),P(n+7<e.length,"Trying to read beyond buffer length")),z.read(e,n,t,52,8)}function A(e,n,t,r,o){o||(P(void 0!==n&&null!==n,"missing value"),P("boolean"==typeof r,"missing or invalid endian"),P(void 0!==t&&null!==t,"missing offset"),P(t+1<e.length,"trying to write beyond buffer length"),O(n,65535));var i=e.length;if(!(t>=i))for(var s=0,u=Math.min(i-t,2);u>s;s++)e[t+s]=(n&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function B(e,n,t,r,o){o||(P(void 0!==n&&null!==n,"missing value"),P("boolean"==typeof r,"missing or invalid endian"),P(void 0!==t&&null!==t,"missing offset"),P(t+3<e.length,"trying to write beyond buffer length"),O(n,4294967295));var i=e.length;if(!(t>=i))for(var s=0,u=Math.min(i-t,4);u>s;s++)e[t+s]=n>>>8*(r?s:3-s)&255}function I(e,n,t,r,o){o||(P(void 0!==n&&null!==n,"missing value"),P("boolean"==typeof r,"missing or invalid endian"),P(void 0!==t&&null!==t,"missing offset"),P(t+1<e.length,"Trying to write beyond buffer length"),q(n,32767,-32768));var i=e.length;t>=i||(n>=0?A(e,n,t,r,o):A(e,65535+n+1,t,r,o))}function U(e,n,t,r,o){o||(P(void 0!==n&&null!==n,"missing value"),P("boolean"==typeof r,"missing or invalid endian"),P(void 0!==t&&null!==t,"missing offset"),P(t+3<e.length,"Trying to write beyond buffer length"),q(n,2147483647,-2147483648));var i=e.length;t>=i||(n>=0?B(e,n,t,r,o):B(e,4294967295+n+1,t,r,o))}function _(e,n,t,r,o){o||(P(void 0!==n&&null!==n,"missing value"),P("boolean"==typeof r,"missing or invalid endian"),P(void 0!==t&&null!==t,"missing offset"),P(t+3<e.length,"Trying to write beyond buffer length"),V(n,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;t>=i||z.write(e,n,t,r,23,4)}function L(e,n,t,r,o){o||(P(void 0!==n&&null!==n,"missing value"),P("boolean"==typeof r,"missing or invalid endian"),P(void 0!==t&&null!==t,"missing offset"),P(t+7<e.length,"Trying to write beyond buffer length"),V(n,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;t>=i||z.write(e,n,t,r,52,8)}function C(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function x(e,n,t){return"number"!=typeof e?t:(e=~~e,e>=n?n:e>=0?e:(e+=n,e>=0?e:0))}function Y(e){return e=~~Math.ceil(+e),0>e?0:e}function Z(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function j(e){return Z(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function k(e){return 16>e?"0"+e.toString(16):e.toString(16)}function T(e){for(var n=[],t=0;t<e.length;t++){var r=e.charCodeAt(t);if(127>=r)n.push(e.charCodeAt(t));else{var o=t;r>=55296&&57343>=r&&t++;for(var i=encodeURIComponent(e.slice(o,t+1)).substr(1).split("%"),s=0;s<i.length;s++)n.push(parseInt(i[s],16))}}return n}function $(e){for(var n=[],t=0;t<e.length;t++)n.push(255&e.charCodeAt(t));return n}function D(e){for(var n,t,r,o=[],i=0;i<e.length;i++)n=e.charCodeAt(i),t=n>>8,r=n%256,o.push(r),o.push(t);return o}function M(e){return W.toByteArray(e)}function F(e,n,t,r){for(var o=0;r>o&&!(o+t>=n.length||o>=e.length);o++)n[o+t]=e[o];return o}function N(e){try{return decodeURIComponent(e)}catch(n){return String.fromCharCode(65533)}}function O(e,n){P("number"==typeof e,"cannot write a non-number as a number"),P(e>=0,"specified a negative value for writing an unsigned value"),P(n>=e,"value is larger than maximum value for type"),P(Math.floor(e)===e,"value has a fractional component")}function q(e,n,t){P("number"==typeof e,"cannot write a non-number as a number"),P(n>=e,"value larger than maximum allowed value"),P(e>=t,"value smaller than minimum allowed value"),P(Math.floor(e)===e,"value has a fractional component")}function V(e,n,t){P("number"==typeof e,"cannot write a non-number as a number"),P(n>=e,"value larger than maximum allowed value"),P(e>=t,"value smaller than minimum allowed value")}function P(e,n){if(!e)throw new Error(n||"Failed assertion")}var W=e("base64-js"),z=e("ieee754");t.Buffer=o,t.SlowBuffer=o,t.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),n=new Uint8Array(e);return n.foo=function(){return 42},42===n.foo()&&"function"==typeof n.subarray}catch(t){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,n){var t;switch(e+="",n||"utf8"){case"hex":t=e.length/2;break;case"utf8":case"utf-8":t=T(e).length;break;case"ascii":case"binary":case"raw":t=e.length;break;case"base64":t=M(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":t=2*e.length;break;default:throw new Error("Unknown encoding")}return t},o.concat=function(e,n){if(P(Z(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var t;if("number"!=typeof n)for(n=0,t=0;t<e.length;t++)n+=e[t].length;var r=new o(n),i=0;for(t=0;t<e.length;t++){var s=e[t];s.copy(r,i),i+=s.length}return r},o.prototype.write=function(e,n,t,r){if(isFinite(n))isFinite(t)||(r=t,t=void 0);else{var o=r;r=n,n=t,t=o}n=Number(n)||0;var c=this.length-n;t?(t=Number(t),t>c&&(t=c)):t=c,r=String(r||"utf8").toLowerCase();var d;switch(r){case"hex":d=i(this,e,n,t);break;case"utf8":case"utf-8":d=s(this,e,n,t);break;case"ascii":d=u(this,e,n,t);break;case"binary":d=a(this,e,n,t);break;case"base64":d=f(this,e,n,t);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=l(this,e,n,t);break;default:throw new Error("Unknown encoding")}return d},o.prototype.toString=function(e,n,t){var r=this;if(e=String(e||"utf8").toLowerCase(),n=Number(n)||0,t=void 0!==t?Number(t):t=r.length,t===n)return"";var o;switch(e){case"hex":o=p(r,n,t);break;case"utf8":case"utf-8":o=d(r,n,t);break;case"ascii":o=g(r,n,t);break;case"binary":o=h(r,n,t);break;case"base64":o=c(r,n,t);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=m(r,n,t);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,n,t,r){var i=this;if(t||(t=0),r||0===r||(r=this.length),n||(n=0),r!==t&&0!==e.length&&0!==i.length){P(r>=t,"sourceEnd < sourceStart"),P(n>=0&&n<e.length,"targetStart out of bounds"),P(t>=0&&t<i.length,"sourceStart out of bounds"),P(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-n<r-t&&(r=e.length-n+t);var s=r-t;if(100>s||!o._useTypedArrays)for(var u=0;s>u;u++)e[u+n]=this[u+t];else e._set(this.subarray(t,t+s),n)}},o.prototype.slice=function(e,n){var t=this.length;if(e=x(e,t,0),n=x(n,t,t),o._useTypedArrays)return o._augment(this.subarray(e,n));for(var r=n-e,i=new o(r,void 0,!0),s=0;r>s;s++)i[s]=this[s+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,n){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,n)},o.prototype.readUInt8=function(e,n){return n||(P(void 0!==e&&null!==e,"missing offset"),P(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},o.prototype.readUInt16LE=function(e,n){return v(this,e,!0,n)},o.prototype.readUInt16BE=function(e,n){return v(this,e,!1,n)},o.prototype.readUInt32LE=function(e,n){return w(this,e,!0,n)},o.prototype.readUInt32BE=function(e,n){return w(this,e,!1,n)},o.prototype.readInt8=function(e,n){if(n||(P(void 0!==e&&null!==e,"missing offset"),P(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var t=128&this[e];return t?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,n){return b(this,e,!0,n)},o.prototype.readInt16BE=function(e,n){return b(this,e,!1,n)},o.prototype.readInt32LE=function(e,n){return y(this,e,!0,n)},o.prototype.readInt32BE=function(e,n){return y(this,e,!1,n)},o.prototype.readFloatLE=function(e,n){return E(this,e,!0,n)},o.prototype.readFloatBE=function(e,n){return E(this,e,!1,n)},o.prototype.readDoubleLE=function(e,n){return S(this,e,!0,n)},o.prototype.readDoubleBE=function(e,n){return S(this,e,!1,n)},o.prototype.writeUInt8=function(e,n,t){t||(P(void 0!==e&&null!==e,"missing value"),P(void 0!==n&&null!==n,"missing offset"),P(n<this.length,"trying to write beyond buffer length"),O(e,255)),n>=this.length||(this[n]=e)},o.prototype.writeUInt16LE=function(e,n,t){A(this,e,n,!0,t)},o.prototype.writeUInt16BE=function(e,n,t){A(this,e,n,!1,t)},o.prototype.writeUInt32LE=function(e,n,t){B(this,e,n,!0,t)},o.prototype.writeUInt32BE=function(e,n,t){B(this,e,n,!1,t)},o.prototype.writeInt8=function(e,n,t){t||(P(void 0!==e&&null!==e,"missing value"),P(void 0!==n&&null!==n,"missing offset"),P(n<this.length,"Trying to write beyond buffer length"),q(e,127,-128)),n>=this.length||(e>=0?this.writeUInt8(e,n,t):this.writeUInt8(255+e+1,n,t))},o.prototype.writeInt16LE=function(e,n,t){I(this,e,n,!0,t)},o.prototype.writeInt16BE=function(e,n,t){I(this,e,n,!1,t)},o.prototype.writeInt32LE=function(e,n,t){U(this,e,n,!0,t)},o.prototype.writeInt32BE=function(e,n,t){U(this,e,n,!1,t)},o.prototype.writeFloatLE=function(e,n,t){_(this,e,n,!0,t)},o.prototype.writeFloatBE=function(e,n,t){_(this,e,n,!1,t)},o.prototype.writeDoubleLE=function(e,n,t){L(this,e,n,!0,t)},o.prototype.writeDoubleBE=function(e,n,t){L(this,e,n,!1,t)},o.prototype.fill=function(e,n,t){if(e||(e=0),n||(n=0),t||(t=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),P("number"==typeof e&&!isNaN(e),"value is not a number"),P(t>=n,"end < start"),t!==n&&0!==this.length){P(n>=0&&n<this.length,"start out of bounds"),P(t>=0&&t<=this.length,"end out of bounds");for(var r=n;t>r;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],n=this.length,r=0;n>r;r++)if(e[r]=k(this[r]),r===t.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),n=0,t=e.length;t>n;n+=1)e[n]=this[n];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var R=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=R.get,e.set=R.set,e.write=R.write,e.toString=R.toString,e.toLocaleString=R.toString,e.toJSON=R.toJSON,e.copy=R.copy,e.slice=R.slice,e.readUInt8=R.readUInt8,e.readUInt16LE=R.readUInt16LE,e.readUInt16BE=R.readUInt16BE,e.readUInt32LE=R.readUInt32LE,e.readUInt32BE=R.readUInt32BE,e.readInt8=R.readInt8,e.readInt16LE=R.readInt16LE,e.readInt16BE=R.readInt16BE,e.readInt32LE=R.readInt32LE,e.readInt32BE=R.readInt32BE,e.readFloatLE=R.readFloatLE,e.readFloatBE=R.readFloatBE,e.readDoubleLE=R.readDoubleLE,e.readDoubleBE=R.readDoubleBE,e.writeUInt8=R.writeUInt8,e.writeUInt16LE=R.writeUInt16LE,e.writeUInt16BE=R.writeUInt16BE,e.writeUInt32LE=R.writeUInt32LE,e.writeUInt32BE=R.writeUInt32BE,e.writeInt8=R.writeInt8,e.writeInt16LE=R.writeInt16LE,e.writeInt16BE=R.writeInt16BE,e.writeInt32LE=R.writeInt32LE,e.writeInt32BE=R.writeInt32BE,e.writeFloatLE=R.writeFloatLE,e.writeFloatBE=R.writeFloatBE,e.writeDoubleLE=R.writeDoubleLE,e.writeDoubleBE=R.writeDoubleBE,e.fill=R.fill,e.inspect=R.inspect,e.toArrayBuffer=R.toArrayBuffer,e}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"1YiZ5S":22,"base64-js":20,buffer:19,ieee754:21}],20:[function(e,n,t){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(n){"use strict";function t(e){var n=e.charCodeAt(0);return n===s||n===c?62:n===u||n===d?63:a>n?-1:a+10>n?n-a+26+26:l+26>n?n-l:f+26>n?n-f+26:void 0}function r(e){function n(e){f[c++]=e}var r,o,s,u,a,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;a="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,f=new i(3*e.length/4-a),s=a>0?e.length-4:e.length;var c=0;for(r=0,o=0;s>r;r+=4,o+=3)u=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&u)>>16),n((65280&u)>>8),n(255&u);return 2===a?(u=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&u)):1===a&&(u=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(u>>8&255),n(255&u)),f}function o(n){function t(n){return e.charAt(n)}function r(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var o,i,s,u=n.length%3,a="";for(o=0,s=n.length-u;s>o;o+=3)i=(n[o]<<16)+(n[o+1]<<8)+n[o+2],a+=r(i);switch(u){case 1:i=n[n.length-1],a+=t(i>>2),a+=t(i<<4&63),a+="==";break;case 2:i=(n[n.length-2]<<8)+n[n.length-1],a+=t(i>>10),a+=t(i>>4&63),a+=t(i<<2&63),a+="="}return a}var i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),u="/".charCodeAt(0),a="0".charCodeAt(0),f="a".charCodeAt(0),l="A".charCodeAt(0),c="-".charCodeAt(0),d="_".charCodeAt(0);n.toByteArray=r,n.fromByteArray=o}("undefined"==typeof t?this.base64js={}:t)}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{"1YiZ5S":22,buffer:19}],21:[function(e,n,t){(function(){t.read=function(e,n,t,r,o){var i,s,u=8*o-r-1,a=(1<<u)-1,f=a>>1,l=-7,c=t?o-1:0,d=t?-1:1,g=e[n+c];for(c+=d,i=g&(1<<-l)-1,g>>=-l,l+=u;l>0;i=256*i+e[n+c],c+=d,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=r;l>0;s=256*s+e[n+c],c+=d,l-=8);if(0===i)i=1-f;else{if(i===a)return s?0/0:(g?-1:1)*(1/0);s+=Math.pow(2,r),i-=f}return(g?-1:1)*s*Math.pow(2,i-r)},t.write=function(e,n,t,r,o,i){var s,u,a,f=8*i-o-1,l=(1<<f)-1,c=l>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:i-1,h=r?1:-1,p=0>n||0===n&&0>1/n?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(u=isNaN(n)?1:0,s=l):(s=Math.floor(Math.log(n)/Math.LN2),n*(a=Math.pow(2,-s))<1&&(s--,a*=2),n+=s+c>=1?d/a:d*Math.pow(2,1-c),n*a>=2&&(s++,a/=2),s+c>=l?(u=0,s=l):s+c>=1?(u=(n*a-1)*Math.pow(2,o),s+=c):(u=n*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;e[t+g]=255&u,g+=h,u/=256,o-=8);for(s=s<<o|u,f+=o;f>0;e[t+g]=255&s,g+=h,s/=256,f-=8);e[t+g-h]|=128*p}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{"1YiZ5S":22,buffer:19}],22:[function(e,n){(function(e){function t(){}var e=n.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(n){var t=[];return window.addEventListener("message",function(e){var n=e.source;if((n===window||null===n)&&"process-tick"===e.data&&(e.stopPropagation(),t.length>0)){var r=t.shift();r()}},!0),function(e){t.push(e),
window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=t,e.addListener=t,e.once=t,e.off=t,e.removeListener=t,e.removeAllListeners=t,e.emit=t,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{"1YiZ5S":22,buffer:19}]},{},[16]);