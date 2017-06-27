(function(){
  'use strict';
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
      url: '/',
      data: { pageTitle: 'Entrar RedeAtive' },
      templateUrl: 'templates/login.html',
      controller: 'AuthCtrl'
    });
    $urlRouterProvider.otherwise('/');
  });
})();
