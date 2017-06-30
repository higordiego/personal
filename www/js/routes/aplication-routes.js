'use strict';
angular.module('starter.routes', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('login', {
        url: '/login',
        data: {pageTitle: 'Entrar RedeAtive'},
        templateUrl: 'templates/login.html',
        controller: 'AuthCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller:'AppCtrl'
          }
        }
      })
      .state('app.client', {
        url: '/client/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/client-detail.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  });
