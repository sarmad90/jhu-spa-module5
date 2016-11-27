(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://murmuring-plateau-44685.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
