'use strict';

angular
  .module('catTreeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cat.html',
        controller: 'CatCtrl'
      })
      .when('/item', {
        templateUrl: 'views/item.html',
        controller: 'CatCtrl'
      })
      .otherwise({
        redirectTo: '/cat'
      });
  });
