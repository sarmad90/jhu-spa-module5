(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common'])
.constant('ApiPath', 'https://murmuring-plateau-44685.herokuapp.com/');

})();
