(function(){
  'use strict';
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
        }
      }
    })
    .state('app.client', {
      url: '/client/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/client-detail.html',
        }
      }
    })

    $urlRouterProvider.otherwise('/');
  });
})();
